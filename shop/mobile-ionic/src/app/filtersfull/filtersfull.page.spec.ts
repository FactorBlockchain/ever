import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersfullPage } from './filtersfull.page';

describe('FiltersfullPage', () => {
	let component: FiltersfullPage;
	let fixture: ComponentFixture<FiltersfullPage>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [FiltersfullPage],
			schemas: [CUSTOM_ELEMENTS_SCHEMA]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(FiltersfullPage);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
