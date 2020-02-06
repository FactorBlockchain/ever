import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PathtrakingPage } from './pathtraking.page';

describe('PathtrakingPage', () => {
	let component: PathtrakingPage;
	let fixture: ComponentFixture<PathtrakingPage>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [PathtrakingPage],
			schemas: [CUSTOM_ELEMENTS_SCHEMA]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PathtrakingPage);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
