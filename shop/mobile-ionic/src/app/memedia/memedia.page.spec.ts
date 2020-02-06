import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemediaPage } from './memedia.page';

describe('MemediaPage', () => {
	let component: MemediaPage;
	let fixture: ComponentFixture<MemediaPage>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [MemediaPage],
			schemas: [CUSTOM_ELEMENTS_SCHEMA]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(MemediaPage);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
