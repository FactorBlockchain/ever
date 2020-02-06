import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneverificationPage } from './phoneverification.page';

describe('PhoneverificationPage', () => {
	let component: PhoneverificationPage;
	let fixture: ComponentFixture<PhoneverificationPage>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [PhoneverificationPage],
			schemas: [CUSTOM_ELEMENTS_SCHEMA]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PhoneverificationPage);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
