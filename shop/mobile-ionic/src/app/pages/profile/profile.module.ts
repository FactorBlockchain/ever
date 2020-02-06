import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'shared/shared.module';
import { ProfileComponent } from './components/profile/profile.component';
import { UserPeopleComponent } from './components/user-people/user-people.component';
import { UserPostsComponent } from './components/user-posts/user-posts.component';
import { ChatheaderComponentModule } from '../../components/chatheader/chatheader.component.module';

@NgModule({
	declarations: [ProfileComponent, UserPostsComponent, UserPeopleComponent],
	imports: [
		CommonModule,
		SharedModule,
		ChatheaderComponentModule,
		RouterModule.forChild([
			{
				path: '',
				component: ProfileComponent
			}
		])
	]
})
export class ProfileModule {}
