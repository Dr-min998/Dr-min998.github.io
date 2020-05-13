$(document).ready(function(){
	setTimeout(()=>{
		$('#disp01').remove();
	},4000);
	setTimeout(()=>{
		$('#body_div').show();
	},3650);
	setTimeout(()=>{
		$('.pl_down').css("height","5rem");
	},5050);
});

window.onscroll= function(){
	var t = document.documentElement.scrollTop||document.body.scrollTop;
	var scrollup = document.getElementById('get_top');
	if(t>=180){
		scrollup.style.display="block";
		$('.pl_down').hide();
		$('.bgi').hide();
	}else{
		scrollup.style.display="none";
		$('.pl_down').show();
		$('.bgi').show();
	}
}
var flag01=0;
function fly_page(){
	if (flag01==0) {
		$('#get_top span').show();
		flag01=1;
	} else{
		$('#get_top span').hide();
		flag01=0;
	}
}
