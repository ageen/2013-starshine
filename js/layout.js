var fut = 0;
jQuery(function($){
		$("#mydown").click(function () { 
				$('#top2').css({"left":(($(document).width())/2-(parseInt(980)/2))+"px"}).animate({top:(document.documentElement.scrollTop||document.body.scrollTop)}, 500);fut = 0;
		});
		$("#myup").click(function () { 
				$('#top2').animate({top:(document.documentElement.scrollTop||document.body.scrollTop)-127}, 100);fut = -127;
		});
})