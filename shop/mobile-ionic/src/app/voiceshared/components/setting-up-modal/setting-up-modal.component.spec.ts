import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoiceSettingUpModalComponent } from './setting-up-modal.component';

describe('SettingUpModalComponent', () => {
	let component: VoiceSettingUpModalComponent;
	let fixture: ComponentFixture<VoiceSettingUpModalComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [VoiceSettingUpModalComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(VoiceSettingUpModalComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
