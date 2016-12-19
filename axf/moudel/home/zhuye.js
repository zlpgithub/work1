
define(["text!./home.html","$css!./zhuye.css","./zhuye2.js"], function(homePage){
 //闪送超市购物车部分
	return{
		init: function(){
		//为了不耗性能
		if($(".home").children().size()>0) {
			$(".home").show().siblings("div").hide();
			return
		};
		$(".home").html(homePage).show().siblings("div").hide();
		home();
		}
		
	}
	
});

