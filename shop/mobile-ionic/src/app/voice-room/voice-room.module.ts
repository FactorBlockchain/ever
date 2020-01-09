import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VoiceRoomPage } from './voice-room.page';
import { VoiceStreamComponent } from '../voiceshared/components/stream/stream.component';
import { VoiceOpenViduVideoComponent } from '../voiceshared/components/stream/ov-video.component';
import { VoiceChatComponent } from '../voiceshared/components/chat/chat.component';
import { VoiceSettingUpModalComponent } from '../voiceshared/components/setting-up-modal/setting-up-modal.component';

const routes: Routes = [
	{
		path: '',
		component: VoiceRoomPage
	}
];

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		RouterModule.forChild(routes)
	],
	declarations: [
		VoiceRoomPage,
		VoiceStreamComponent,
		VoiceChatComponent,
		VoiceSettingUpModalComponent,
		VoiceOpenViduVideoComponent
	],
	exports: [],
	entryComponents: [VoiceChatComponent, VoiceSettingUpModalComponent]
})
export class VoiceRoomPageModule {}
