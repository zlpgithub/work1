require.config({
	paths:{
		//js文件省略掉文件类型
		//"a": "./a"
		"jquery":["./js1/zepto","./js1/touch"],
		"backbone":"./js2/backbone",
		"underscore":"./js2/underscore",
		"text":"./js2/text",
		"$css":"./js2/css"
	}
});

require(['jquery','backbone','router.js'],function($,Backbone){
    Backbone.history.start();
});