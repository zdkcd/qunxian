$(function(){
	// nav 效果
	// $('.header_nav li').hover(function(){
	// 	$('span',this).css('height','3px');
	// 	$(this).find("span").show();
	// 	$('span',this).stop().animate({
	// 		left:'0',
	// 		width:'100%',
	// 		right:'0'
	// 	},1000);
	// 	var posi_lft=$(this).position().left+($(this).width()-$("#ico").width())/2;

	// 	$("#ico").stop().css({top:$(this).height()}).show().animate({
	// 		left:posi_lft
	// 	},900);
	// },function(){
	// 	$('span',this).stop().animate({
	// 		left:'50%',
	// 		width:'0'
	// 		},50).find("span").hide();
		
	// 	$("#ico").stop().hide().animate({
	// 		left:"0px",display:"none"
	// 	},1);
	
	// });


	$(".gt").mouseover(function(){
		
		$(".all").empty().append($(this).next("ul").clone().css({display:"block"}));
		$(".all").css({"padding-left":($(this).offset().left)+"px"});
		$(".all").stop().animate({"margin-top":"0px"},1000);
	})
$(".nav_de").mouseleave(function(){
			$(".all").stop().animate({"margin-top":"-30px"},1000);
		})




// server
	
	var service_people=[
 	{
 		"icon":"fuwu1.png",
 		"img":"ba-1.png",
 		"img_icon":"sericer_icon1.png",
 		"titles":"[尊享360°免费预约接送]",
 		"de":"预约进馆 免费接送！"
 	},
 	{
 		"icon":"fuwu2.png",
 		"img":"ba-2.png",
 		"img_icon":"sericer_icon2.png",
 		"titles":"[专业技师传统打造方法]",
 		"de":"携手国内专业红木家具师、设计师，精细打造独一无二的红木家具。"
 	},
 	{
 		"icon":"fuwu4.png",
 		"img":"sss4.jpg",
 		"titles":"[享一站式尊贵礼遇]",
 		"img_icon":"sericer_icon4.png",
 		"de":"全程以“6S皇家贵宾服务”标准，从售前先行赔付全程一对一私密管家服务，为客户打造绿色服务通道，实现客户价值终身管理。"
 	},
 	{
 		"icon":"fuwu5.png",
 		"img":"sss5.jpg",
 		"img_icon":"sericer_icon5.png",
 		"titles":"[配送“头等舱”]",
 		"de":"首倡全国送货安装。采用国际最前沿的服务标准，提供包装--运输--保险--安装--维护全程专业服务。"
 	},
 	{
 		"icon":"fuwu3.png",
 		"img":"sss3.jpg",
 		"img_icon":"sericer_icon3.png",
 		"titles":"[尊享360°私密贴心服务]",
 		"de":"免费接送、闽睿私房菜品尝等尊贵服务。"
 	}
 ]
 $(".server .hover_pe").mouseover(function(){
 	var ind=$(this).attr("data_id").charAt(6);
 	var u=$(".server .hover_pe_show").attr("data_id");
 	ind=parseInt(ind)-1
 	var i=service_people[ind];
 	$(".server .hover_pe_h").attr("src","/templetes/qunxian/images/server/"+i.icon);
 	$(".server .hover_pe_show").attr("src","/templetes/qunxian/images/server/"+i.img);
 	$(".server .hover_pe_ti").find("p").eq(0).text(i.titles);
 	$(".server .hover_pe_ti").find("p").eq(1).text(i.de);
 	$(".server .hover_pe_show").attr("data_id",$(this).attr("data_id"));
 	$(this).attr("data_id",u);
 	var nd=$(this).attr("data_id").charAt(6);
 	nd=parseInt(nd)-1
 	var is=service_people[nd];
 	$(this).attr("src","/templetes/qunxian/images/server/"+is.img_icon)
 })

})