window.onload = function(){
	var url = location.search;
	var query = queryUrl();
	if( query.language ){
		if( query.language == 'zh-Hans' ){
			query.language = 'zh';
		}
	}
	else{
		query.language = 'en';
	}
	
	// 填充语言
	fillInLang( languages[ query.language ] );
	// 对按钮进行单独处理
	var btn = document.querySelector('#share_btn')
	if( query.share == 'true'){
		btn.className = 'share_true';
		btn.innerText = ( query.language == 'zh')? '已开启网页分享功能' : 'Opened web sharing feature';
	}
	else if( query.share === 'false' || !query.share ){
		btn.className = 'share_false clickable';
		btn.href="http://wiz.cn"
		
		btn.innerText = ( query.language == 'zh')? '开启网页分享功能' : 'Open web sharing feature';
	}
	


	document.body.style.display = 'block';

	// alert( document.body.style.width );
}