import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'shared/shared.module';
import { MessageComponent } from './components/message/message.component';
import { MessagesComponent } from './components/messages/messages.component';
import { ChatheaderComponentModule } from '../../components/chatheader/chatheader.component.module';

@NgModule({
	declarations: [MessagesComponent, MessageComponent],
	entryComponents: [MessageComponent],
	imports: [
		CommonModule,
		SharedModule,
		ChatheaderComponentModule,
		RouterModule.forChild([
			{
				path: '',
				component: MessagesComponent
			},
			{
				path: ':id',
				component: MessagesComponent
			}
		])
	]
})
export class MessagesModule {}
