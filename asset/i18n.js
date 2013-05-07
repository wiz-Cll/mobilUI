var en = {
	intro: 'Using mobile to view web, browser sharing feature, can help you to save the contents of the current web page to "My Emails" ',

	step_head: 'You can use the function by following steps:',

	step1: 'step1: Open Web sharing feature.',

	step2: 'step2: Click  browser\'s sharing feature,select "Mail",Recipient use MyWiz from address book.',

	step3: 'step3: View web in My Mails.',


	step_ps: 'p.s.: MyWiz will be add to the address book automatically',
	btn_ps: 'Whether to open web  sharing feature?'
}

var zh = {
	intro: '使用移动端浏览网页时，利用浏览器分享功能，可以帮您保存当前网页的内容到为知笔记的“我的邮件”目录。',

	step_head: '您可以按如下的步骤使用此功能：',

	step1: '步骤1: 开启下端网页分享功能。',

	step2: '步骤2: 点击网页的“分享”功能，选择“邮件”，收件人地址从通讯录选择MyWiz邮箱，发送邮件。',

	step3: '步骤3: 到我的邮箱目录下查看分享的网页。',


	step_ps: ' 注: MyWiz邮箱将自动添加到您的通讯录',
	btn_ps: '是否开启网页分享功能？'
}

var languages = {
	zh: zh,
	en: en
}



function fillInLang( langObj ){
	for(var i in langObj ){
		console.log( i );
		document.querySelector('#'+ i).innerHTML = langObj[i]; 
	}
}

function queryUrl(){
	var search = location.search;
	var sStr = search.substr(1);
	var arr = sStr.split('&');
	var query = {};
	var arrLen = arr.length;
	for( var i = 0; i< arrLen; i++){
		var item = arr[i];
		var itemArr = item.split('=');
		query[ itemArr[0] ] = itemArr[1];
	}
	return query;
}