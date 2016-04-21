$(function(){
	// nav 效果
	$('.header_nav li').hover(function(){
		$('span',this).css('height','3px');
		$(this).find("span").show();
		$('span',this).stop().animate({
			left:'0',
			width:'100%',
			right:'0'
		},1000);
		var posi_lft=$(this).position().left+($(this).width()-$("#ico").width())/2;

		$("#ico").stop().css({top:$(this).height()}).show().animate({
			left:posi_lft
		},900);
	},function(){
		$('span',this).stop().animate({
			left:'50%',
			width:'0'
			},50).find("span").hide();
		
		$("#ico").stop().hide().animate({
			left:"0px",display:"none"
		},1);
	
	});
})