import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'shared/shared.module';
import { PeopleComponent } from './components/people/people.component';
import { PersonComponent } from './components/person/person.component';

import { ChatheaderComponentModule } from '../../components/chatheader/chatheader.component.module';

import {
	Contacts,
	ContactFieldType,
	ContactFindOptions
} from '@ionic-native/contacts';

@NgModule({
	declarations: [PeopleComponent, PersonComponent],
	imports: [
		CommonModule,
		SharedModule,
		ChatheaderComponentModule,
		RouterModule.forChild([
			{
				path: '',
				component: PeopleComponent
			},
			{
				path: ':id',
				component: PersonComponent
			}
		])
	]
})
export class PeopleModule {}
