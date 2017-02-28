$(document).ready(function(){


	//加载完成后自动触发
	var nowShow = $("#1");
	$("#down").animate({opacity:'1.0'},800,function(){
		nowShow.animate({opacity:'1.0'})
	});
	


	//点击下箭头时触发
	$("#down").click(function(){
		if (nowShow.next().html()) {//判断下一个div存在
			
			nowShow.animate({opacity:'0'},600,function(){
				nowShow.animate({opacity:'1.0'})
			});//这里不用next我也不知道为什么。。但是这样写能过
			

			//判断上箭头是否显示
			var upOpacity = $("#up").css('opacity');//换成attr获取opacity是无效的
			if ( upOpacity == 0 ){
				$("#up").animate({opacity:'1.0'});
			}
			nowShow = nowShow.next();
			//到底时下箭头消失
			if (nowShow.next().html()) {
				$("#down").animate({opacity:'1.0'});
			}
			else{
				//alert();//调试用
				$("#down").animate({opacity:'0'});
			}
		}

	});
	



	//点击上箭头时触发
	$("#up").click(function(){
		if (nowShow.prev().html()) {//判断上一个div存在
			
			nowShow.animate({opacity:'0'},600,function(){
				nowShow.animate({opacity:'1.0'})
			});//这里不用prev我也不知道为什么。。但是这样写能过
			

			//判断下箭头是否显示
			var upOpacity = $("#down").css('opacity');//换成attr获取opacity是无效的
			if ( upOpacity == 0 ){
				$("#down").animate({opacity:'1.0'});
			}
			nowShow = nowShow.prev();
			//到顶时上箭头消失
			if (nowShow.prev().html()) {
				$("#up").animate({opacity:'1.0'});
			}
			else{
				//alert();//调试用
				$("#up").animate({opacity:'0'});
			}
		}

	});
	



});


