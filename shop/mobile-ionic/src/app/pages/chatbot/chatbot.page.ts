import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Message } from '../models/message';
import { DialogflowService } from '../../services/dialogflow.service';
import { IonContent, IonList } from '@ionic/angular';

@Component({
	selector: 'app-home',
	templateUrl: 'chatbot.page.html',
	styleUrls: ['chatbot.page.scss']
})
export class chatbot {
	//@ViewChild(Content) contentArea: Content;
	@ViewChild('contentArea', { static: false }) contentArea: IonContent;
	//@ViewChild(IonList, {read: ElementRef} ) chatList: ElementRef;
	@ViewChild('chatList', { static: false }) chatList: ElementRef;

	public message: Message;
	public messages: Message[];
	private mutationObserver: MutationObserver;

	constructor(private dialogflowService: DialogflowService) {
		this.message = new Message('', 'assets/imgs/user.png');
		this.messages = [
			new Message(
				'Welcome to chatbot universe',
				'assets/imgs/bot.png',
				new Date()
			)
		];
	}

	ngOnInit() {
		this.mutationObserver = new MutationObserver((mutations) => {
			this.contentArea.scrollToBottom();
		});

		this.mutationObserver.observe(this.chatList.nativeElement, {
			childList: true
		});
	}

	public sendMessage(): void {
		this.message.timestamp = new Date();
		this.messages.push(this.message);

		//this.message = new Message('', 'assets/imgs/user.png');
		this.dialogflowService
			.getResponse(this.message.content)
			.subscribe((res) => {
				this.messages.push(
					new Message(
						res.result.fulfillment.speech,
						'assets/imgs/bot.png',
						res.timestamp
					)
				);
			});

		this.message = new Message('', 'assets/imgs/user.png');

		//this.contentArea.scrollToBottom();
	}
}
