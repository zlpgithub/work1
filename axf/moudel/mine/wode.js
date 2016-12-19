define(["text!./mine.html","$css!./wode.css"], function(homePage){
	return{
		init: function(){
		// if($(".mine").children().size()>0) return;
		$(".mine").html(homePage).show().siblings("div").hide();
		}
	}
	
});