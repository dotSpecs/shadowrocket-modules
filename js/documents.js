/******************************

脚本功能：documents文件管理器+解锁订阅

*******************************

[rewrite_local]

^https:\/\/license\.pdfexpert\.com\/api\/2\.0\/documents\/subscription\/check url script-request-body https://github.com/dotSpecs/shadowrocket-modules/raw/main/js/documents.js

[mitm] 

hostname = license.pdfexpert.com

*******************************/
var body = JSON.parse($request.body);

body = {
	"bundleId": "com.readdle.ReaddleDocsIPad",
	"chargingPlatform": "iOS AppStore",
	"receiptId": 1593059129000,
	"originalTransactionId": 720001751211957,
	"inAppStates": [{
		"type": "subscription",
		"productId": "com.readdle.ReaddleDocsIPad.subscription.month10_bf22",
		"originalTransactionId": 720001751211957,
		"subscriptionGroupId": "20555224",
		"productName": "subscription",
		"isEligibleForIntroPeriod": false,
		"subscriptionExpirationDate": "01:28 01/03/2099",
		"subscriptionState": "active",
		"subscriptionAutoRenewStatus": "autoRenewOn",
		"isInGracePeriod": false,
		"isInBillingRetryPeriod": false,
		"subscriptionExpirationIntent": "none",
		"entitlements": ["ios.documents.pdf"]
	}],
	"receiptStatus": "ok",
	"statisticsInfo": {
		"events": []
	},
	"externalId": "068a5e6c-9181-4b14-a7d4-417ca5a109dd"
}

$done({body : JSON.stringify(body)});