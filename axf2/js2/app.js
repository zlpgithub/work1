require.config({
	// "./"：代表目前所在的目录  "../"：代表上一层目录  以"/"开头：代表根目录
	paths: {
		"jquery": "jquery-1.11.2",
		"text": "text",
		"backbone": "backbone",
		"underscore": "underscore",
		"$css": "css.js"
	}
});

// require(['jquery','backbone','router.js'],function($,Backbone){
//     Backbone.history.start();
// });

require(["jquery", "text!../tmp/home.html", "text!../tmp/market.html", "text!../tmp/order.html", "text!../tmp/mine.html"], function($, homePage, marketPage, orderPage, minePage){
	//默认显示首页
	$(".mainContent").html(homePage);
	//绑定底部菜单事件
	// $(".footer li").on("click", function(){
	// 	var index = $(this).index() + "";
	// 	switch(index){
	// 		case "0":
	// 			$(".mainContent").html(homePage);
	// 			break;
	// 		case "1":
	// 			$(".mainContent").html(marketPage);
	// 			break;
	// 		case "2":
	// 			$(".mainContent").html(orderPage);
	// 			break;
	// 		case "3":
	// 			$(".mainContent").html(minePage);
	// 			break;
	// 		default:
	// 			break;
	// 	}
	// });

	//使用requirejs动态加载不同模块
	$(".footer li").on("click", function(){
		var index = $(this).index() + "";
		switch(index){
			case "0":
				require(["../modules/home/home.js"]);
				break;
			case "1":
				$(".mainContent").html(marketPage);
				break;
			case "2":
				$(".mainContent").html(orderPage);
				break;
			case "3":
				$(".mainContent").html(minePage);
				break;
			default:
				break;
		}
	});
});