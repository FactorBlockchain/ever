import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { chatbot } from './chatbot.page';
import { ChatheaderComponentModule } from '../../components/chatheader/chatheader.component.module';

const routes: Routes = [
	{
		path: '',
		component: chatbot
	}
];

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		ChatheaderComponentModule,
		RouterModule.forChild(routes)
	],
	declarations: [chatbot]
})
export class chatbotPageModule {}
