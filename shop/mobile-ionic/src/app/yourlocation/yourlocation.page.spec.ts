import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourlocationPage } from './yourlocation.page';

describe('YourlocationPage', () => {
	let component: YourlocationPage;
	let fixture: ComponentFixture<YourlocationPage>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [YourlocationPage],
			schemas: [CUSTOM_ELEMENTS_SCHEMA]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(YourlocationPage);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
