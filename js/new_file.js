function login(){
	document.getElementById('login1').style.display="none";
	document.getElementById('loginbg').style.display="none";
	document.getElementById('main').style.display="block";
	document.getElementById('massage1').style.display="block";
	setTimeout('mas1()',700);
}
function mas1(){
	document.getElementById('massage2').style.display="block";
	setTimeout('mas2()',700);
}
function mas2(){
	document.getElementById('massage3').style.display="block";
	setTimeout('mas3()',700);
}
function mas3(){
	document.getElementById('massage4').style.display="block";
	setTimeout('mas4()',700);
}
function mas4(){
	document.getElementById('massage5').style.display="block";
	setTimeout('mas5()',700);
}
function mas5(){
	document.getElementById('massage6').style.display="block";
	document.getElementById('a11').style.display="block";
}
function mas6(){
	document.getElementById('ques').style.display="block";
	document.getElementById('quesar').style.display="block";
	document.getElementById('a11').style.display="none";
}
function anws(){
	var name=document.getElementById('text1').value;
	// if (name==null&&name=="") {
	// 	document.getElementById('tipss').innerHTML="不能为空";
	// 	return false;
	// }
	if (name!="张文斌") {
		document.getElementById('tipss').innerHTML="错了哦,试试自己？";
		return false;
	}
	if (name=="张文斌") {
		document.getElementById('ques').style.display='none';
		document.getElementById('quesar').style.display='none';
		document.getElementById('massage7').style.display='block';
	}
}
function noanws(){
	document.getElementById('ques').style.display='none';
	document.getElementById('quesar').style.display='none';
	setTimeout('mas6()',1750);
}
