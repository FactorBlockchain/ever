import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionsbyPage } from './collectionsby.page';

describe('CollectionsbyPage', () => {
	let component: CollectionsbyPage;
	let fixture: ComponentFixture<CollectionsbyPage>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [CollectionsbyPage],
			schemas: [CUSTOM_ELEMENTS_SCHEMA]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CollectionsbyPage);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
