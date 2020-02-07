import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MallPage } from './mall.page';
import { ChatheaderComponentModule } from '../components/chatheader/chatheader.component.module';
const routes: Routes = [
	{
		path: '',
		component: MallPage
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
	declarations: [MallPage]
})
export class MallPageModule {}