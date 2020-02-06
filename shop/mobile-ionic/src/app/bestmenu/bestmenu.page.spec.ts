import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestmenuPage } from './bestmenu.page';

describe('BestmenuPage', () => {
	let component: BestmenuPage;
	let fixture: ComponentFixture<BestmenuPage>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [BestmenuPage],
			schemas: [CUSTOM_ELEMENTS_SCHEMA]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(BestmenuPage);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
