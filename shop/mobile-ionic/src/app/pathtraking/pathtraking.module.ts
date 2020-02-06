import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ChatheaderComponentModule } from '../components/chatheader/chatheader.component.module';

import { IonicModule } from '@ionic/angular';

import { PathtrakingPage } from './pathtraking.page';

const routes: Routes = [
	{
		path: '',
		component: PathtrakingPage
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
	declarations: [PathtrakingPage]
})
export class PathtrakingPageModule {}
