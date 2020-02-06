import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RestaurantdetailPage } from './restaurantdetail.page';

const routes: Routes = [
	{
		path: '',
		component: RestaurantdetailPage
	}
];

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		RouterModule.forChild(routes)
	],
	declarations: [RestaurantdetailPage]
})
export class RestaurantdetailPageModule {}
