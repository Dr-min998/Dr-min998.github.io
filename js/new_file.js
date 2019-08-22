$(document).ready(function(){
	setTimeout(()=>{
		$('.loading').fadeOut('slow',()=>{
			$('.dbody1').slideUp('slow',()=>{
				$('.fuck').show('slow',()=>{
					$('.fuck').css("z-index","0");
				});
			});
		});
	},2560)
});
let gg=false;
function mytoggle(){
	$('.toggled').slideToggle('slow');
	$('.centers img').css("width","3rem");
	$('.fuck').css("top","28%");
	if (gg==false) {
		gg=true;
	} else{
		$('.centers img').css("width","5.1rem");
		$('.fuck').css("top","50%");
		gg=false;
	}
	$('.centers p').toggle();
}
function show1(val){
	$('.fuck').css("z-index","-1");
	$('.ed').show('fast');
	$('.edInner').show('fast');
	switch (val){
		case 1:$('.edInner').html('<img src="img/832972464.png" >');
			break;
		case 2:$('.edInner').html('<img src="img/1189729288.png" >');
			break;
		case 3:$('.edInner').html('<img src="img/1728478816.png" >');
			break;
		case 4:$('.edInner').html('<p id="tapp"></p><br><span>本网页所属：Dr.min</span>');already();
			break;
		default:
			break;
	}
}
function clo(){
	$('.fuck').css("z-index","0");
	$('.ed').hide('fast');
}
var hhii=1;

function already(){
					var nowTime=new Date();
					let year1=nowTime.getFullYear();
					let month1=nowTime.getMonth()+1;
					let day1=nowTime.getDate();
					let h1=nowTime.getHours();
					let min1=nowTime.getMinutes();
					let sec1=nowTime.getSeconds();
					var begain =new Array();
					begain[0]=2019;
					begain[1]=8;
					begain[2]=2;
					begain[3]=17;
					begain[4]=32;
					begain[5]=24;
					if (sec1>=begain[5]) {
						var sec2=sec1-begain[5];
					} else{
						var sec2=60+sec1-begain[5];
						min1--;
					}
					if (min1>=begain[4]) {
						var min2=min1-begain[4];
					} else{
						var min2=60+min1-begain[4];
						h1--;
					}
					if (h1>=begain[3]) {
						var h2=h1-begain[3];
					} else{
						var h2=24+h1-begain[3];
						day1--;
					}
					var month3=30;
					var day2=0;
					if (year1>2019) {
						var yy=year1-begain[0];
						if (yy<=4) {
							if (year1%4!=0) {
								day2=day2+(yy*365);
							} else{
								day2=day2+(yy*365);
								day2++;
							}
						} else {
							day2=day2+(yy*365);
							let yd=yy%4;
							day2=day2+yd;
						}
						if (day1>=begain[2]) {
							var day2=day2+day1-begain[2];
							if(month1==2){
								day2=day2-2;
								var month3=28;
							}else if (month1==1||month1==3||month1==5||month1==7||month1==8||month1==10||month1==12) {
								day2++;
								var month3=31;
							}
						} else{
							var day2=day2+30+day1-begain[2];
							if(month1==2){
								day2=day2-2;
								var month3=28;
							}else if (month1==1||month1==3||month1==5||month1==7||month1==8||month1==10||month1==12) {
								day2++;
								var month3=31;
							}
							month1--;
						}
						if (month1>=begain[1]) {
							var month2=month1-begain[1];
							day2=day2+(month3*month2);
						} else{
							var month2=12+month1-begain[1];
							day2=day2+(month3*month2);
							year1--;
						}
					} else {
						if(month1==9||month1==11){
							var ai=1;
						} else {
							var ai=0;
						}
						var yy=0;
						if (day1>=begain[2]) {
							var day2=day1-begain[2];
						} else{
							var day2=31+day1-begain[2]-ai;
							month1--;
						}
						var month2=month1-begain[1];
						day2=day2+(30+ai)*month2;
						ai=0;
					}
					if (sec2<10) {
						$('#tapp').text('本网站已开设: '+day2+'天'+h2+'小时0'+sec2+"秒" );
					} else{
						$('#tapp').text('本网站已开设: '+day2+'天'+h2+'小时'+sec2+"秒" );
					}
					hhii++;
					if (hhii<=30) {
						setTimeout("already()",1000);
					} else{
						return;
					}
}
