import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MemediaPage } from './memedia.page';
import { ChatheaderComponentModule } from '../components/chatheader/chatheader.component.module';

const routes: Routes = [
	{
		path: '',
		component: MemediaPage
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
	declarations: [MemediaPage]
})
export class MemediaPageModule {}
