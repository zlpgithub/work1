
define(["text!./cart.html","$css!./cart.css","./cart2.js"], function(homePage){
	return{
		init: function(){
		// if($(".order").children().size()>0) return;
		$(".order").html(homePage).show().siblings("div").hide();
		cart();
		}

	}
	
});
