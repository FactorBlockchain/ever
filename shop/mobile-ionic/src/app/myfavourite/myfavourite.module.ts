import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MyfavouritePage } from './myfavourite.page';

const routes: Routes = [
	{
		path: '',
		component: MyfavouritePage
	}
];

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		RouterModule.forChild(routes)
	],
	declarations: [MyfavouritePage]
})
export class MyfavouritePageModule {}
