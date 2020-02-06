import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CollectionsbyPage } from './collectionsby.page';

const routes: Routes = [
	{
		path: '',
		component: CollectionsbyPage
	}
];

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		RouterModule.forChild(routes)
	],
	declarations: [CollectionsbyPage]
})
export class CollectionsbyPageModule {}
