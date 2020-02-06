import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeoplebarPage } from './peoplebar.page';

describe('PeoplebarPage', () => {
	let component: PeoplebarPage;
	let fixture: ComponentFixture<PeoplebarPage>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [PeoplebarPage],
			schemas: [CUSTOM_ELEMENTS_SCHEMA]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PeoplebarPage);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
