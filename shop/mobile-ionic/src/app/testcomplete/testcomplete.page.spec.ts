import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestcompletePage } from './testcomplete.page';

describe('TestcompletePage', () => {
	let component: TestcompletePage;
	let fixture: ComponentFixture<TestcompletePage>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [TestcompletePage],
			schemas: [CUSTOM_ELEMENTS_SCHEMA]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(TestcompletePage);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
