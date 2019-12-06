import { Component, OnInit } from '@angular/core';
import {
	PayPal,
	PayPalPayment,
	PayPalConfiguration
} from '@ionic-native/paypal/ngx';
import { PayPalResponse } from '../interface/payPalResponse';
import { Router } from '@angular/router';
import { Store } from 'app/services/store.service';
import { OrderRouter } from '@modules/client.common.angular2/routers/order-router.service';
import { IamportService } from 'iamport-ionic4-kcp';
import { AlertController } from '@ionic/angular';
import { Location } from '@angular/common';

@Component({
	selector: 'e-cu-paymentlist',
	templateUrl: './paymentlist.page.html',
	styleUrls: ['./paymentlist.page.css']
})
export class PaymentlistPage implements OnInit {
	constructor(
		private payPal: PayPal,
		private router: Router,
		private store: Store,
		private orderRouter: OrderRouter,
		public iamport: IamportService,
		public alertController: AlertController,
		private location: Location
	) {}

	paymentAmount: string = localStorage.getItem('orderprice');
	currency: string = 'USD';
	currencyIcon: string = '$';

	ngOnInit() {}

	payWithPaypal() {
		console.log('Pay ????');
		this.payPal
			.init({
				PayPalEnvironmentProduction:
					'AYbrVUgR8KQOtHRGleTq8ihBG2OppOl19uQzS-V3eAgYJS_RBa-C6rYxbqvXMI0ZsrMIvV7e8W-6BOeE',
				PayPalEnvironmentSandbox:
					'AYbrVUgR8KQOtHRGleTq8ihBG2OppOl19uQzS-V3eAgYJS_RBa-C6rYxbqvXMI0ZsrMIvV7e8W-6BOeE'
			})
			.then(
				() => {
					// Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
					this.payPal
						.prepareToRender(
							'PayPalEnvironmentSandbox',
							new PayPalConfiguration({
								// Only needed if you get an "Internal Service Error" after PayPal login!
								//payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
							})
						)
						.then(
							() => {
								let payment = new PayPalPayment(
									this.paymentAmount,
									this.currency,
									'Description',
									'sale'
								);
								this.payPal.renderSinglePaymentUI(payment).then(
									async (res: PayPalResponse) => {
										console.log(res);

										// Successfully paid

										// Example sandbox response
										//
										// {
										//   "client": {
										//     "environment": "sandbox",
										//     "product_name": "PayPal iOS SDK",
										//     "paypal_sdk_version": "2.16.0",
										//     "platform": "iOS"
										//   },
										//   "response_type": "payment",
										//   "response": {
										//     "id": "PAY-1AB23456CD789012EF34GHIJ",
										//     "state": "approved",
										//     "create_time": "2016-10-03T13:33:33Z",
										//     "intent": "sale"
										//   }
										// }
										if (res.response.state == 'approved') {
											localStorage.setItem(
												'confirmId',
												'paypal:' + res.response.id
											);
											let order = await this.orderRouter.payWithPaymentCommon(
												this.store.orderId,
												localStorage.getItem(
													'confirmId'
												)
											);
											order = await this.orderRouter.confirm(
												this.store.orderId
											);
											console.log('Payment Done!');
											this.location.back();
										}
									},
									async (e) => {
										// Error or render dialog closed without being successful
										console.log(e);
										const alertCtrl = await this.alertController.create(
											{
												header: 'Alert',
												message: e,
												buttons: ['OK']
											}
										);
										await alertCtrl.present();
									}
								);
							},
							async (e) => {
								// Error in configuration
								console.log(e);
								const alertCtrl = await this.alertController.create(
									{
										header: 'Alert',
										message: e,
										buttons: ['OK']
									}
								);
								await alertCtrl.present();
							}
						);
				},
				async (e) => {
					// Error in initialization, maybe PayPal isn't supported or something else
					console.log(e);
					const alertCtrl = await this.alertController.create({
						header: 'Alert',
						message: e,
						buttons: ['OK']
					});
					await alertCtrl.present();
				}
			);
	}

	payWithIAMPORT() {
		console.log('Pay IAMPORT');
		const param = {
			pay_method: 'card',
			merchant_uid: 'merchant_' + new Date().getTime(),
			name: '주문명:결제테스트',
			amount: Number(this.paymentAmount) * 1100,
			buyer_email: 'iamport@siot.do',
			buyer_name: '구매자이름',
			buyer_tel: '010-1234-5678',
			buyer_addr: '서울특별시 강남구 삼성동',
			buyer_postcode: '123-456',
			app_scheme: 'ionickcp' //플러그인 설치 시 사용한 명령어 "ionic cordova plugin add cordova-plugin-iamport-kcp --variable URL_SCHEME=ionickcp" 의 URL_SCHEME 뒤에 오는 값을 넣으시면 됩니다.
		};

		// 아임포트 관리자 페이지 가입 후 발급된 가맹점 식별코드를 사용
		this.iamport
			.payment('imp09937735', param)
			.then(async (response) => {
				if (response.isSuccess()) {
					//TODO : 결제성공일 때 처리
					var res: any = response.getResponse();
					localStorage.setItem('confirmId', 'IAMPORT:' + res.imp_uid);
					let order = await this.orderRouter.payWithPaymentCommon(
						this.store.orderId,
						localStorage.getItem('confirmId')
					);
					order = await this.orderRouter.confirm(this.store.orderId);
					console.log('Payment Done!');
					this.location.back();
				}
			})
			.catch(async (err) => {
				const alertCtrl = await this.alertController.create({
					header: 'Alert',
					message: err,
					buttons: ['OK']
				});
				await alertCtrl.present();
			});
	}

	goBack() {
		this.location.back();
	}
}
