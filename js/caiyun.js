/******************************

脚本功能：彩云天气 SVIP

*******************************

[rewrite_local]
^https:\/\/biz\.cyapi\.cn\/p\/v1\/vip_info$ url script-request-body https://github.com/dotSpecs/shadowrocket-modules/raw/main/js/caiyun.js

彩云天气v1=type=http-response,pattern=^https:\/\/biz\.cyapi\.cn\/p\/v1\/vip_info$,requires-body=1,script-path=https://github.com/dotSpecs/shadowrocket-modules/raw/main/js/caiyun.js

[mitm] 

hostname = biz.cyapi.cn

*******************************/
var body = JSON.parse($request.body);

body = {
	"vip": {
		"expires_time": "0",
		"is_auto_renewal": false
	},
	"svip": {
		"expires_time": "4070923200",
		"is_auto_renewal": false
	},
	"upcoming_renewals": [],
	"show_upcoming_renewal": true,
	"server_time": "1697681344",
	"trial_svip": {
		"expires_time": "0",
		"received_time": "0",
		"is_recharge_vip": false,
		"trial_card_code": ""
	}
}

$done({body : JSON.stringify(body)});