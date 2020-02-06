import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalmomPage } from './localmom.page';

describe('LocalmomPage', () => {
	let component: LocalmomPage;
	let fixture: ComponentFixture<LocalmomPage>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [LocalmomPage],
			schemas: [CUSTOM_ELEMENTS_SCHEMA]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(LocalmomPage);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
