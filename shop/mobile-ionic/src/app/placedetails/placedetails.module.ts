import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PlacedetailsPage } from './placedetails.page';

const routes: Routes = [
	{
		path: '',
		component: PlacedetailsPage
	}
];

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		RouterModule.forChild(routes)
	],
	declarations: [PlacedetailsPage]
})
export class PlacedetailsPageModule {}
