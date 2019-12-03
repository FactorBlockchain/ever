import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentlistPage } from './paymentlist.page';

describe('PaymentlistPage', () => {
	let component: PaymentlistPage;
	let fixture: ComponentFixture<PaymentlistPage>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [PaymentlistPage],
			schemas: [CUSTOM_ELEMENTS_SCHEMA]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PaymentlistPage);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
