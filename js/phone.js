$(document).ready(function(){
	setTimeout(()=>{
		$('.dbody').fadeOut(()=>{
			$('.dbody-after').show();
		});
	},2100)
});
function jjj(index){
	let nub=`nfc${index}`;
	$('.nf-center').fadeOut('.5s',()=>{
		$("."+nub).fadeIn();
	});
	if (index==3) {
		$('.user1').show(()=>{
			let date = new Date();
			let hour=date.getHours();
			let min=date.getMinutes();
			if (min<10) {
				$('#time1').text(hour+":0"+min);
			} else{
				$('#time1').text(hour+":"+min);
			}
		});
	}
}
