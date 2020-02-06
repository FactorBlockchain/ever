import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PeoplebarPage } from './peoplebar.page';
import { ChatheaderComponentModule } from '../components/chatheader/chatheader.component.module';
const routes: Routes = [
	{
		path: '',
		component: PeoplebarPage
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
	declarations: [PeoplebarPage]
})
export class PeoplebarPageModule {}
