import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyhomepagePage } from './myhomepage.page';

describe('MyhomepagePage', () => {
	let component: MyhomepagePage;
	let fixture: ComponentFixture<MyhomepagePage>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [MyhomepagePage],
			schemas: [CUSTOM_ELEMENTS_SCHEMA]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(MyhomepagePage);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
