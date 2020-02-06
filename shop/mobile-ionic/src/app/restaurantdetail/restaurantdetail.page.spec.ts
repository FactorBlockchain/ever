import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantdetailPage } from './restaurantdetail.page';

describe('RestaurantdetailPage', () => {
	let component: RestaurantdetailPage;
	let fixture: ComponentFixture<RestaurantdetailPage>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [RestaurantdetailPage],
			schemas: [CUSTOM_ELEMENTS_SCHEMA]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(RestaurantdetailPage);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
