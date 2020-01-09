import {
	Component,
	ElementRef,
	Injector,
	OnInit,
	ViewChild
} from '@angular/core';
import { NavParams } from '@ionic/angular';
import { IUser } from 'app/pages/auth/helpers/model';
import { AuthService } from 'app/pages/auth/services/auth/auth.service';
import { MessagesService } from 'app/pages/messages/services/messages/messages.service';
import { Extender } from 'shared/helpers/extender';
import { CommonService } from 'shared/services/common/common.service';
import { PeopleService } from '../../services/people/people.service';
import { CallsService } from 'app/pages/messages/services/calls/calls.service';

/**
 * view users profile and call, follow, unfollow share or chat to user
 */
@Component({
	selector: 'app-person',
	templateUrl: './person.component.html',
	styleUrls: ['./person.component.scss']
})
export class PersonComponent extends Extender implements OnInit {
	public user: IUser;
	public currentUser: IUser;
	@ViewChild('callNumber', null) public callNumber: ElementRef;

	constructor(
		protected injector: Injector,
		private navParams: NavParams,
		private authService: AuthService,
		private peopleService: PeopleService,
		private messageService: MessagesService,
		private commonService: CommonService,
		private callService: CallsService
	) {
		super(injector);
	}

	/** get current user, get user to view by getting id from nav param */
	public async ngOnInit() {
		this.currentUser = await this.authService.getUser();
		const uid = this.navParams.get('data');
		this.user = await this.peopleService.getPerson(uid);
	}

	public temptoken: string;

	//** random number generator (toString) for video/voice call chatroom ID */
	random(): string {
		//	let rand = Math.floor(Math.random()*20.0)+1.0;
		//	return rand;
		return (
			Math.random()
				.toString(36)
				.substring(2, 15) +
			Math.random()
				.toString(36)
				.substring(2, 15)
		);
	}
	//** random number generator for video/voice call chatroom ID */

	/** call user */
	/*
	public async call() {
		// await this.commonService.callUser(
		// 	this.user.mobile || this.user.phone,
		// 	this.callNumber
		// );
		this.callService.startCall(this.user)
		this.closeModal();
	}

	*/

	/*
	///////////////// obtain the sessionToken and open video chat room
	public async voicecall() {
		const sessionToken = this.random();
		let videocall = false;
		this.callService.startCall(this.user, sessionToken, videocall);
		this.router.navigate(['/video-room/' + sessionToken + "/voice"]);
		this.closeModal();
	}
	///////////////// obtain the sessionToken and open video chat room
	*/

	public async voicecall() {
		const sessionToken = this.random();
		let videocall = false;
		this.callService.startCall(this.user, sessionToken, videocall);
		this.router.navigate(['/voice-room/' + sessionToken + '/voice']);
		this.closeModal();
	}

	///////////////// obtain the sessionToken and open video chat room
	public async call() {
		const sessionToken = this.random();
		let videocall = true;
		this.callService.startCall(this.user, sessionToken, videocall);
		this.router.navigate(['/video-room/' + sessionToken + '/video']);
		this.closeModal();
	}
	///////////////// obtain the sessionToken and open video chat room

	/** chat to user */
	public async chat() {
		this.messageService.startChat(this.user);
		this.closeModal();
	}

	/** share user */
	public async share() {
		const url = `people?id=${this.user.uid}`;
		await this.commonService.share(
			this.user.displayName,
			this.user.email,
			this.user.photoURL,
			url
		);
		this.closeModal();
	}

	/** getter to check if user is a friend */
	public get isFriend() {
		return this.peopleService.friends.includes(this.user.uid);
	}

	/** check if user is a friend and follow or unfollow depending on if they are already your friend or not */
	public async manage() {
		if (this.peopleService.friends.includes(this.user.uid)) {
			await this.peopleService.unfollow(this.user.uid);
		} else {
			await this.peopleService.follow(this.user.uid);
		}
	}
}
