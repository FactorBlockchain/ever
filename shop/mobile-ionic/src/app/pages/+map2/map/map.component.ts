import {
	Component,
	ViewChild,
	ElementRef,
	OnInit,
	AfterViewInit
} from '@angular/core';
import { ModalController } from '@ionic/angular';

declare var google: any;
const directionsDisplay = new google.maps.DirectionsRenderer();
const directionsService = new google.maps.DirectionsService();
@Component({
	selector: 'carrier-map',
	templateUrl: 'map.component.html'
})
export class MapComponent implements OnInit, AfterViewInit {
	@ViewChild('map', { static: true })
	mapElement: ElementRef;

	map: google.maps.Map;

	curPosMarker: google.maps.Marker;
	infowindow: google.maps.InfoWindow;

	constructor(public modalCtrl: ModalController) {}

	ngOnInit(): void {
		this.showMap();
	}

	ngAfterViewInit(): void {
		this.makeCurrentMarker();
		this.makeInfowindow();
	}

	showMap(): google.maps.Map {
		const option = {
			zoom: 17,
			controls: {
				myLocation: true
			}
		};

		this.map = new google.maps.Map(this.mapElement.nativeElement, option);
		return this.map;
	}

	private makeCurrentMarker() {
		const map = this.map;
		const curPos = new google.maps.LatLng(0, 0);

		// var myLocationIcon = {
		// 	path: 'M11 11l1.256 5 3.744-10-10 3.75 5 1.25zm1-11c-5.522 0-10 4.395-10 9.815 0 5.505 4.375 9.268 10 14.185 5.625-4.917 10-8.68 10-14.185 0-5.42-4.478-9.815-10-9.815zm0 18c-4.419 0-8-3.582-8-8s3.581-8 8-8 8 3.582 8 8-3.581 8-8 8z',
		// 	scale: 1,
		// 	fillColor: '#3a84df'
		// };
		this.curPosMarker = new google.maps.Marker({
			curPos,
			map,
			icon: new google.maps.MarkerImage(
				'//maps.gstatic.com/mapfiles/mobile/mobileimgs2.png',
				new google.maps.Size(22, 22),
				new google.maps.Point(0, 18),
				new google.maps.Point(11, 11)
			)
		});
	}

	private makeInfowindow(): void {
		var contentString =
			'<div id="content">' +
			'<div id="siteNotice">' +
			'</div>' +
			'<h1 id="firstHeading" class="firstHeading">Uluru</h1>' +
			'<div id="bodyContent">' +
			'<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
			'sandstone rock formation in the southern part of the ' +
			'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) ' +
			'south west of the nearest large town, Alice Springs; 450&#160;km ' +
			'(280&#160;mi) by road. Kata Tjuta and Uluru are the two major ' +
			'features of the Uluru - Kata Tjuta National Park. Uluru is ' +
			'sacred to the Pitjantjatjara and Yankunytjatjara, the ' +
			'Aboriginal people of the area. It has many springs, waterholes, ' +
			'rock caves and ancient paintings. Uluru is listed as a World ' +
			'Heritage Site.</p>' +
			'<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
			'https://en.wikipedia.org/w/index.php?title=Uluru</a> ' +
			'(last visited June 22, 2009).</p>' +
			'</div>' +
			'</div>';

		this.infowindow = new google.maps.InfoWindow({
			content: contentString
		});
	}

	setCenter(position) {
		if (this.map) {
			this.map.setCenter(position);
		}
	}

	addMarker(position): google.maps.Marker {
		if (this.map) {
			const map = this.map;
			const marker = new google.maps.Marker({
				position,
				map
			});
			const infowindow = this.infowindow;
			const modalCtrl = this.modalCtrl;
			// marker.addListener('click', async function() {
			// 	infowindow.open(map, marker);
			// 	const storeDetailModal = await modalCtrl.create({
			// 		component: StoreDetailComponent
			// 	});
			// 	await storeDetailModal.present();
			//   });
			return marker;
		}
	}

	setCurrentMarker(position) {
		this.curPosMarker.setPosition(position);
	}

	drawRoute(origin, destination) {
		if (this.map) {
			directionsDisplay.setMap(this.map);

			const request = {
				origin,
				destination,
				travelMode: 'DRIVING'
			};

			directionsService.route(request, function(res, stat) {
				if (stat === 'OK') {
					directionsDisplay.setDirections({ routes: [] });

					directionsDisplay.setDirections(res);
				}
			});
		}
	}

	getMap(): google.maps.Map {
		return this.map;
	}
}
