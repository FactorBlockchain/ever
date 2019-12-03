import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeoLocationsMerchantsService } from 'app/services/geo-location-merchants.service';
import { Store } from 'app/services/store.service';
import { first } from 'rxjs/operators';
import { UserRouter } from '@modules/client.common.angular2/routers/user-router.service';
import { GeoLocationService } from 'app/services/geo-location';
import Warehouse from '@modules/server.common/entities/Warehouse';
import { ILocation } from '@modules/server.common/interfaces/IGeoLocation';
import { environment } from 'environment';
import { MapComponent } from './map/map.component';

@Component({
	selector: 'e-cu-map2',
	templateUrl: './map2.page.html',
	styleUrls: ['./map2.page.css']
})
export class Map2Page implements OnInit, AfterViewInit {
	@ViewChild('gmap', { static: false })
	carrierMap: MapComponent;

	merchants: Warehouse[];
	overlayHidden: boolean = false;
	selectedMerchant: Warehouse;

	constructor(
		private router: Router,
		private geoLocationsMerchantsService: GeoLocationsMerchantsService,
		private store: Store,
		private userRouter: UserRouter,
		private geoLocationService: GeoLocationService
	) {}

	ngOnInit() {}

	ngAfterViewInit() {
		this.Initialize();
		this.loadCloseMerchants();
	}

	private async Initialize() {
		const location = await this.getLocation();
		const curPos = new google.maps.LatLng(
			location.coordinates[1],
			location.coordinates[0]
		);
		this.carrierMap.setCenter(curPos);
		this.carrierMap.setCurrentMarker(curPos);
		this.carrierMap.getMap().addListener('click', () => {
			this.overlayHidden = true;
		});
	}

	private async loadCloseMerchants() {
		const location = await this.getLocation();
		this.merchants = await this.geoLocationsMerchantsService
			.getCoseMerchants({ loc: location })
			.pipe(first())
			.toPromise();

		const merchants$ = this.geoLocationsMerchantsService
			.getCoseMerchants({ loc: location })
			.subscribe(async (merchants) => {
				merchants.forEach((merchant) => {
					const merchantLong =
						merchant.geoLocation.loc.coordinates[0];
					const merchantLat = merchant.geoLocation.loc.coordinates[1];
					const marker = this.carrierMap.addMarker(
						new google.maps.LatLng(merchantLat, merchantLong)
					);
					marker.addListener('click', async () => {
						this.selectedMerchant = merchant;
						this.overlayHidden = false;
					});
				});
			});
	}

	// private async getLocation() {
	// 	let location: ILocation;

	// 	const isProductionEnv = environment.production;

	// 	if (this.store.userId && isProductionEnv) {
	// 		const user = await this.userRouter
	// 			.get(this.store.userId)
	// 			.pipe(first())
	// 			.toPromise();

	// 		location = {
	// 			type: 'Point',
	// 			coordinates: user.geoLocation.loc.coordinates
	// 		};
	// 	} else {
	// 		const findGeoLocation = await this.geoLocationService.getCurrentGeoLocation();
	// 		location = {
	// 			type: 'Point',
	// 			coordinates: findGeoLocation.loc.coordinates
	// 		};
	// 	}

	// 	return location;
	// }

	private async getLocation() {
		let location: ILocation;
		const findGeoLocation = await this.geoLocationService.getCurrentGeoLocation();
		location = {
			type: 'Point',
			coordinates: findGeoLocation.loc.coordinates
		};

		return location;
	}

	public hideOverlay() {
		this.overlayHidden = true;
	}

	async selectMerchant(merchant) {
		this.store.inStore = merchant.id;
		this.router.navigateByUrl('products');
	}
}
