import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TestcompletePage } from './testcomplete.page';
import { ChatheaderComponentModule } from '../components/chatheader/chatheader.component.module';

const routes: Routes = [
	{
		path: '',
		component: TestcompletePage
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
	declarations: [TestcompletePage]
})
export class TestcompletePageModule {}
