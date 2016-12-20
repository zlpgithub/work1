define(["backbone"], function(Backbone){
	var Router = Backbone.Router.extend({
		routes:{
			// 右边是回调函数的名称
			"":"home",
			home: "home",
			market: "market",
			order: "order",
			mine: "mine"
		},
		home: function(){
			require(["./moudel/home/zhuye.js","./js1/swiper.min.js"],function(home){
					home.init();
			});
		},
		market: function(){
			require(["./moudel/market/shansong.js"],function(market){
					market.init();
			});
		},
		order: function(){
			require(["./moudel/cart/cart.js"],function(order){
				order.init();
				
			});
		},
		mine: function(){
			require(["./moudel/mine/wode.js"],function(mine){
				mine.init();
			});
		},
	});
	return new Router();
});