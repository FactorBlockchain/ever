import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChatheaderComponent } from './chatheader.component';

describe('ChatheaderComponent', () => {
	let component: ChatheaderComponent;
	let fixture: ComponentFixture<ChatheaderComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ChatheaderComponent],
			imports: [IonicModule.forRoot()]
		}).compileComponents();

		fixture = TestBed.createComponent(ChatheaderComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	}));

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
