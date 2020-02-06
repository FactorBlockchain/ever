import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FiltersfullPage } from './filtersfull.page';

const routes: Routes = [
	{
		path: '',
		component: FiltersfullPage
	}
];

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		RouterModule.forChild(routes)
	],
	declarations: [FiltersfullPage]
})
export class FiltersfullPageModule {}
