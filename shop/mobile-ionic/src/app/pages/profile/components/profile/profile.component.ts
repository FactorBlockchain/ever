import { Component, Injector, OnInit } from '@angular/core';
import { IUser } from 'app/pages/auth/helpers/model';
import { AuthService } from 'app/pages/auth/services/auth/auth.service';
import { IFeed } from 'app/pages/feed/models/feed';
import { FeedService } from 'app/pages/feed/services/feed/feed.service';
import { PeopleService } from 'app/pages/people/services/people/people.service';
import { Extender } from 'shared/helpers/extender';
import { EditProfileComponent } from 'shared/modals/edit-profile/edit-profile.component';

/**
 * view users details and their posts, followers and friends
 */
@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.scss']
})
export class ProfileComponent extends Extender implements OnInit {
	public user: IUser;
	public friends: string[] = [];
	public followers: string[] = [];
	public selectedView: number = 0;
	public posts: IFeed[] = [];

	constructor(
		protected injector: Injector,
		private authService: AuthService,
		private feedService: FeedService,
		private peopleService: PeopleService
	) {
		super(injector);
	}

	/** set tab data  */
	public get views(): any[] {
		return [
			{
				id: 0,
				name: this.translate.instant('profile-component.post'),
				value: this.posts.length
			},
			{
				id: 1,
				name: this.translate.instant('profile-component.following'),
				value: this.friends ? this.friends.length : 0
			},
			{
				id: 2,
				name: this.translate.instant('profile-component.followers'),
				value: this.followers.length
			}
		];
	}

	/** get current user */
	public async ngOnInit() {
		this.user = await this.authService.getUser();
	}

	/** get user and user details such as feed, friends and followers */
	public async ionViewDidEnter() {
		this.subscriptions.push(
			this.authService.user.subscribe((user) => {
				if (user) {
					this.user = user;
					this.subscriptions.push(
						this.feedService
							.getUserFeed(this.user.uid)
							.subscribe((posts) => (this.posts = posts))
					);
					this.subscriptions.push(
						this.peopleService
							.getFriendIds(this.user.uid)
							.subscribe((friends) => (this.friends = friends))
					);
					this.subscriptions.push(
						this.peopleService
							.getFollowersIds(this.user.uid)
							.subscribe((friends) => (this.followers = friends))
					);
				}
			})
		);
	}

	/** open more options in action sheet with options to edit, logout or close action sheet */
	public async more(): Promise<any> {
		const actionSheetCtrl = await this.actionSheetCtrl.create({
			header: this.translate.instant('other.options'),
			buttons: [
				{
					text: this.translate.instant(
						'setting-component.edit-account'
					),
					handler: () => this.edit()
				},
				{
					text: this.translate.instant(
						'setting-component.logout-button'
					),
					handler: () => {
						this.authService
							.signOut()
							.then(() => this.goto(this.routes.auth));
					}
				},
				{
					text: this.translate.instant('other.close'),
					role: 'cancel'
				}
			]
		});

		await actionSheetCtrl.present();
	}

	/** open profile edit modal */
	public async edit() {
		const modal = await this.openModal(EditProfileComponent, this.user);
		modal.present();
	}
	/* */
	public signout() {
		this.authService.signOut().then(() => this.goto(this.routes.auth));
	}
	public gotoexplorer() {
		this.router.navigateByUrl('/products');
	}

	public gotomyorder() {
		this.router.navigateByUrl('/orders-history');
	}

	public gotofriend() {
		this.router.navigateByUrl('/people');
	}

	public gotoprofile() {
		this.router.navigateByUrl('/profile');
	}
}
