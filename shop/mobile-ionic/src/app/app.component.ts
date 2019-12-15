import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Platform } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { Network } from '@ionic-native/network/ngx';
import { TranslateService } from '@ngx-translate/core';
import { DeviceRouter } from '@modules/client.common.angular2/routers/device-router.service';
import ILanguage from '@modules/server.common/interfaces/ILanguage';
import IPlatform from '@modules/server.common/interfaces/IPlatform';
import { Device } from '@ionic-native/device/ngx';
import { Router } from '@angular/router';
import { Store } from './services/store.service';
import { environment } from 'environment';

import { Extender } from 'shared/helpers/extender';
import { Injector, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AuthService } from 'app/pages/auth/services/auth/auth.service';
import { SettingService } from 'app/pages/setting/services/setting/setting.service';
import { FcmService } from 'shared/services/fcm/fcm.service';
import { AppService, IAppPages } from 'app/services/app/app.service';
import { Toast } from '@ionic-native/toast/ngx';

@Component({
	selector: 'e-cu-root',
	templateUrl: 'app.component.html'
})
export class AppComponent extends Extender implements OnInit {
	public pages = [];
	public color: string = '#009688';
	public count: number = 0;

	constructor(
		public readonly platform: Platform,
		private readonly store: Store,
		private readonly angularrouter: Router,
		private readonly deviceRouter: DeviceRouter,
		private readonly _translateService: TranslateService,
		private readonly location: Location,
		private statusBar: StatusBar,
		private splashScreen: SplashScreen,
		private network: Network,
		private device: Device,

		protected injector: Injector,
		private appService: AppService,
		private authService: AuthService,
		private fcmService: FcmService,
		private settingService: SettingService,
		private storage: Storage,
		private nativeToast: Toast
	) {
		super(injector);
		this._initializeApp();
	}

	async getChannelId(): Promise<string | null> {
		const urbanAirshipPlugin = (window as any).UrbanAirshipPlugin;

		if (urbanAirshipPlugin !== undefined) {
			return new Promise<string>((resolve) =>
				urbanAirshipPlugin.getChannelID((channelID) =>
					resolve(channelID)
				)
			);
		} else {
			if (this.platform.is('cordova')) {
				console.error(
					"DeviceService can't getChannelId() because UrbanAirship plugin isn't installed!"
				);
			}
			return null;
		}
	}

	getLanguage(): ILanguage {
		return this.store.language;
	}

	getPlatform(): IPlatform {
		return this.platform.is('cordova')
			? (this.device.platform.toLowerCase() as IPlatform)
			: 'browser';
	}

	getUUID(): string {
		return this.platform.is('cordova')
			? this.device.uuid
			: environment.FAKE_UUID;
	}

	async openPage(page) {
		await this.angularrouter.navigate(page.url);
	}

	private _watchNetworkConnection() {
		this.network.onDisconnect().subscribe(async () => {
			console.error('Network was disconnected!');
			await this.angularrouter.navigate(['errors', 'connection-lost']);
		});
		this.network.onConnect().subscribe(() => {
			console.warn('Network connected!');
			this.location.back();
			setTimeout(() => {
				if (this.network.type === 'wifi') {
					console.log('Wifi connection detected!');
				}
			}, 3000);
		});
	}

	private async _initializeApp() {
		await this.platform.ready().then(() => {
			this.platform.backButton.subscribe((backbuttonEventDetail) => {
				console.log(backbuttonEventDetail);
				this.count++;
				if (this.count === 2) {
					this.nativeToast
						.show(
							'뒤로 가기 버튼을 한번 더 누르면 종료됩니다',
							'5000',
							'bottom'
						)
						.subscribe((toast) => {
							console.log(toast);
						});
					setTimeout(function() {
						this.count = 0;
					}, 800);
				} else if (this.count === 3) {
					navigator['app'].exitApp();
					setTimeout(function() {
						this.count = 0;
					}, 800);
				}
			});
		});

		this._watchNetworkConnection();

		this.statusBar.styleBlackOpaque();
		this.splashScreen.hide();

		if (!this.store.deviceId) {
			await this._registerDeviceDevMode();
		}

		await this._watchDeviceUpdates();
	}

	private async _registerDeviceDevMode() {
		const device = await this.deviceRouter.create({
			channelId: await this.getChannelId(),
			language: this.getLanguage(),
			type: this.getPlatform(),
			uuid: this.getUUID()
		});

		this.store.deviceId = device.id;
	}

	private async _watchDeviceUpdates() {
		this._translateService.onLangChange.subscribe(async ({ lang }) => {
			await this.deviceRouter.updateLanguage(this.store.deviceId, lang);
		});
	}

	/**
	 * run initializeApp from appServices
	 * get language from localstorage, if language is set, use to configure translations
	 * otherwise default to english (gb)
	 * if user is logged in, get firebase cloud messaging token and listen for notifications
	 * setup app pages
	 * get user preferences to setup lang
	 */
	public async ngOnInit() {
		this.appService.initializeApp();
		// const lang = await this.storage.get('language');
		// this.appService.langConfig(lang);
		this.subscriptions.push(
			this.authService.user.subscribe((user) => {
				if (user) {
					this.fcmService.getToken().then(() => {
						this.listen4Notifications();
					});
					// this.subscriptions.push(
					// 	this.settingService
					// 		.getUserSettings(user.uid)
					// 		.subscribe((setting) =>
					// 			this.appService.langConfig(setting.language)
					// 		)
					// );
					this.pages = this.appService.setUpPages(user);
				}
			})
		);
	}

	/**
	 * open component pages except for when component property is logout
	 * then logout user from app and route to login page
	 * @param page
	 */
	public open(page: IAppPages) {
		if (page.component === 'logout') {
			this.authService.signOut().then(() => this.goto(this.routes.login));
		} else {
			this.goto(page.component);
		}
	}

	/* Listen to incoming messages */
	private listen4Notifications() {
		this.subscriptions.push(
			this.fcmService.listenToNotifications().subscribe((message) => {
				console.log(message);
				if (message.messageType === 'data') {
					// route to answer call page
					alert(
						message.messageType +
							' ' +
							message.sessionToken +
							' ' +
							message.video
					);
					const videocall: boolean = message.video;
					if (videocall) {
						this.router.navigateByUrl(
							'/video-room/' + message.sessionToken + '/video'
						);
					} else {
						this.router.navigateByUrl(
							'/video-room/' + message.sessionToken + '/audio'
						);
					}
				}
			})
		);
	}
}
