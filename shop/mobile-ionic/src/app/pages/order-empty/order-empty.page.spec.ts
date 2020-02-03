import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderEmptyPage } from './order-empty.page';

describe('OrderEmptyPage', () => {
	let component: OrderEmptyPage;
	let fixture: ComponentFixture<OrderEmptyPage>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [OrderEmptyPage],
			schemas: [CUSTOM_ELEMENTS_SCHEMA]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(OrderEmptyPage);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
