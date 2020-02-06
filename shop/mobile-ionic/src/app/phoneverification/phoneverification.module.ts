import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PhoneverificationPage } from './phoneverification.page';

const routes: Routes = [
	{
		path: '',
		component: PhoneverificationPage
	}
];

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		RouterModule.forChild(routes)
	],
	declarations: [PhoneverificationPage]
})
export class PhoneverificationPageModule {}
