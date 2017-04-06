var isNewTab = 0;  // 0：默认当前标签页打开导航链接或搜索结果  1：强制新标签页打开导航链接或搜索结果
// 搜索引擎设置

$(document).ready(function(){

	$('#Searchtype1 ul li a').on('click', function(){
		$(this).parent().addClass('active').siblings().removeClass('active');
		$('#Searchbox').submit();
	});
	
	$('#Searchbox').submit(function() {
		var type = $('#Searchtype1 li.active a').attr('lang');
		var que = $('input[name="wd"]').val();
		if(que !== '') {
			switch (type) {
				case 'baidu':
					searchstr='https://www.baidu.com/s?wd=' + que;
					break;
				case 'google':
					searchstr='https://64.233.162.83/#newwindow=1&q=' + que;
					break;
				case 'Bing':
					searchstr='https://www.bing.com/search?q=' + que;
					break;
				case 'baiduyun':
					searchstr='https://64.233.162.83/#newwindow=1&q=site:pan.baidu.com%20' + que;
					break;
				case 'taobao':
					searchstr='https://s.taobao.com/search?q=' + que;
					break;
                case 'Tieba':
					searchstr='https://www.baidu.com/s?wd=' + que +' site:tieba.baidu.com';
					break;
/*				case 'kafan':
					searchstr='http://bds.kafan.cn/cse/search?q=' + que +'&s=15563968344970452529';
					break;
					
				case 'wiki':
					searchstr='https://zh.wikipedia.org/zh-cn/' + que;
					break;
				case 'map':
					searchstr='https://www.google.com/maps/place/' + que;
					break;
				case 'YTB':
					searchstr='https://www.youtube.com/results?search_query=' + que;
					break;
				case 'music':
					searchstr='http://music.baidu.com/search?key=' + que;
					break;
				case 'image':
					searchstr='http://www.bing.com/images/search?q=' + que;
					break;
				case 'video':
					searchstr='http://www.soku.com/search_video/q_' + que;
					break;
				case 'tieba':
					searchstr='http://tieba.baidu.com/f?kw=' + que; 
					break;*/
				default:
			}
		
			if(isNewTab){
				window.open(searchstr);
				$('input[name="wd"]').val("");
			} 
			else {
				window.location.href = searchstr;
			}
			
			return false;
		}
	});
});


var sle1 = document.getElementById("a1");
var sle2= document.getElementById("a2");
var sle3 = document.getElementById("a3");
var sle4= document.getElementById("a4");
var sle5 = document.getElementById("a5");
var sle6= document.getElementById("a6");

var Baidu = document.getElementById("baidu"); 
var Google = document.getElementById("google"); 
var Bing = document.getElementById("Bing"); 
var Baiduyun = document.getElementById("baiduyun"); 
var Taobao = document.getElementById("taobao"); 
var Tieba = document.getElementById("Tieba"); 

sle1.onclick = function(){Baidu.click();Baidu.focus();Baidu.onclick = function(){}}
sle2.onclick = function(){Google.click();Google.focus();Google.onclick = function(){}}
sle3.onclick = function(){Bing.click();Bing.focus();Bing.onclick = function(){}}
sle4.onclick = function(){Baiduyun.click();Baiduyun.focus();Baiduyun.onclick = function(){}}
sle5.onclick = function(){Taobao.click();Taobao.focus();Taobao.onclick = function(){}}
sle6.onclick = function(){Tieba.click();Tieba.focus();Tieba.onclick = function(){}}


