import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-imageicon',
	templateUrl: './imageicon.component.html',
	styleUrls: ['./imageicon.component.scss']
})
export class ImageiconComponent implements OnInit {
	@Input() icon: string;
	@Input() text: string;
	constructor() {}
	ngOnInit() {}
}
