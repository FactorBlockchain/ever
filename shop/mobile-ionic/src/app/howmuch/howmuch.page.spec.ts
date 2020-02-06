import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowmuchPage } from './howmuch.page';

describe('HowmuchPage', () => {
	let component: HowmuchPage;
	let fixture: ComponentFixture<HowmuchPage>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [HowmuchPage],
			schemas: [CUSTOM_ELEMENTS_SCHEMA]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(HowmuchPage);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
