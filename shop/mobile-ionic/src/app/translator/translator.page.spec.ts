import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslatorPage } from './translator.page';

describe('TranslatorPage', () => {
	let component: TranslatorPage;
	let fixture: ComponentFixture<TranslatorPage>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [TranslatorPage],
			schemas: [CUSTOM_ELEMENTS_SCHEMA]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(TranslatorPage);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
