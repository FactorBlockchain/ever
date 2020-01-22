import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoiceStreamComponent } from './stream.component';

describe('StreamComponent', () => {
	let component: VoiceStreamComponent;
	let fixture: ComponentFixture<VoiceStreamComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [VoiceStreamComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(VoiceStreamComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
