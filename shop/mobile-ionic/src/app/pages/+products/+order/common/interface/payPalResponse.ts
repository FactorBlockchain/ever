/**
 * Example sandbox response
 * {
 *   "client": {
 *     "environment": "sandbox",
 *     "product_name": "PayPal iOS SDK",
 *     "paypal_sdk_version": "2.16.0",
 *     "platform": "iOS"
 *   },
 *   "response_type": "payment",
 *   "response": {
 *     "id": "PAY-1AB23456CD789012EF34GHIJ",
 *     "state": "approved",
 *     "create_time": "2016-10-03T13:33:33Z",
 *     "intent": "sale"
 *   }
 * }
 */
export interface PayPalResponse {
	client: {
		environmnet: string;
		product_name: string;
		paypal_sdk_version: string;
		platform: string;
	};
	response_type: string;
	response: {
		id: string;
		state: string;
		create_time: string;
		intent: string;
	};
}
