import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { VoiceUserModel } from '../../models/user-model';
import { VoiceOpenViduVideoComponent } from './ov-video.component';

@Component({
	selector: 'stream-component',
	templateUrl: './stream.component.html',
	styleUrls: ['./stream.component.scss']
})
export class VoiceStreamComponent implements OnInit {
	@Input()
	user: VoiceUserModel;

	@ViewChild('videoComponent', { static: false })
	videoComponent: VoiceOpenViduVideoComponent;

	mutedSound: boolean;

	constructor() {}

	ngOnInit() {
		console.log('user', this.user);
	}
}
