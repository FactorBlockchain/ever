import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
	selector: 'e-cu-order-empty',
	templateUrl: './order-empty.page.html',
	styleUrls: ['./order-empty.page.css']
})
export class OrderEmptyPage {
	constructor(private location: Location) {}

	ngOnInit() {}
	goBack() {
		this.location.back();
	}
}
