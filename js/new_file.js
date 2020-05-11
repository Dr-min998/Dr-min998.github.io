$(document).ready(function(){
	setTimeout(()=>{
		$('#disp01').remove();
	},4000);
	setTimeout(()=>{
		$('#body_div').show();
	},3650);
});

window.onscroll= function(){
	var t = document.documentElement.scrollTop||document.body.scrollTop;
	var scrollup = document.getElementById('get_top');
	if(t>=180){
		scrollup.style.display="block";
	}else{
		scrollup.style.display="none";
	}
}
