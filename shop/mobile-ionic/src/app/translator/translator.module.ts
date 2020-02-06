import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TranslatorPage } from './translator.page';
import { ChatheaderComponentModule } from '../components/chatheader/chatheader.component.module';
const routes: Routes = [
	{
		path: '',
		component: TranslatorPage
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
	declarations: [TranslatorPage]
})
export class TranslatorPageModule {}
