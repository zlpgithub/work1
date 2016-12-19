
define(["text!./market.html","$css!./shansong.css","./shansong2.js"], function(homePage){
	return{
		init: function(){
		// if($(".market").children().size()>0) return;
		$(".market").html(homePage).show().siblings("div").hide();
		market();
		}
	}

});
