import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MyhomepagePage } from './myhomepage.page';

const routes: Routes = [
	{
		path: '',
		component: MyhomepagePage
	}
];

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		RouterModule.forChild(routes)
	],
	declarations: [MyhomepagePage]
})
export class MyhomepagePageModule {}
