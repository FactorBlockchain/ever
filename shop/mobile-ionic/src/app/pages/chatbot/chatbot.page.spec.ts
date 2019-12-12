import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { chatbot } from './chatbot.page';

describe('chatbot', () => {
	let component: chatbot;
	let fixture: ComponentFixture<chatbot>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [chatbot],
			schemas: [CUSTOM_ELEMENTS_SCHEMA]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(chatbot);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
