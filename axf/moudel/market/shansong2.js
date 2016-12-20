	function market(){
	//点击增加购物车数量
	//取数据
	$.getJSON("json/shansong.json",function(data){
	var fooddata = data;
	$("#tmp").load("tmp/market-tmp1.html",function(){
		var str = baidu.template("market-lis", fooddata);
		$("#lis").html(str);
		$(this).find("#market-lis").remove();
		//获取右边的数据,让第一次的页面出现
		$("#tmp").load("tmp/market-tmp2.html",function(){
				var str2 = baidu.template("market-figures",{list:fooddata.data.products[104749]});
				$("#figure").html(str2);
				$(this).find("#market-figures").remove();
				getanimation();
				// 懒加载
			_$(".main-right-bt img.lazy").lazyload({container:$("#figure")});
			});

		//左边框的黄边
		$(".market-main-left li").eq(0).addClass("left-line");
		$(".market-main-left li").on("tap",function(){
			$(".market-main-left li").removeClass("left-line");
			$(this).addClass("left-line");
			var ids = $(this).attr("id");
			$("#tmp").load("tmp/market-tmp2.html",function(){
				var str2 = baidu.template("market-figures",{list:fooddata.data.products[ids]});
				$("#figure").html(str2);
				$(this).find("#market-figures").remove();
				getanimation();
				
				// 懒加载
			_$(".main-right-bt img.lazy").lazyload({container:$("#figure")});
				});
				
			});
		});
	});
}

function getanimation(){
		//点击
		var m=0;
		$(".market-buy").on("tap",function(e){
			e = e||window.event;
			// $(".market-cancel").css("visibility","visible");
			// $(".market-count").css("visibility","visible");
			$(this).prev().prev().css("visibility","visible");
			$(this).prev().css("visibility","visible");
			m++;
			var s = $(this).parent().parent().prev().find("img").clone();
			var x1 = $(this).parent().parent().prev().offset().left;
			var y1 = $(this).parent().parent().prev().offset().top;
			$(this).parent().parent().parent().append(s);
			var x2 = $("#bubble").offset().left;
			var y2 = $("#bubble").offset().top;
			// 要加上px
			$("#ani").html("@keyframes fly{from{left:"+x1+"px;top:"+y1+"px;width:1.16rem;height:0.9rem;border-radius:50%}to{left:"+x2+"px;top:"+y2+"px;width:10px;height:10px}}");
			// $("#ani").html("@keyframes fly{from{left:"+x1+"px;top:"+y1+"px;border-radius:50%}to{left:"+x2+"px;top:"+y2+"px}}");
					s.css({
						"position":"absolute",
						"left":x1,
						"top":y1,
						"animation":"fly linear 2s"
					});
			$(".bubble").html(m);
			$(".market-count").html(m);
			// 删除克隆的对象
			var t=setInterval(f1,2000);
					 function f1(){
					 	s.remove();
					 	clearInterval(t);
					 }
			});

		//点击减号减少购物车数量
		$(".market-cancel").on("tap",function(){
		$(".market-count").html()<2 ? $(".market-cancel").css("visibility","hidden")&&$(".market-count").css("visibility","hidden")&&$(".bubble").html(0) : $(".market-count").html($(".market-count").html()-1) && $(".bubble").html($(".bubble").html()-1);
		});



		// 将点击的对象传入localStorage
		var shoppinglist = localStorage.getItem("shoppinglist"),
			num=1;
		if(localStorage.length==0){
			var jsonstr = {
			"productlist":[{
			"id":$(this).parent().parent().parent().attr("id"),
			"url":$(this).parent().parent().prev().find("img").attr("src"),
			"name":$(this).parent().prev().prev().prev().prev().html(),
			"price":$(this).parent().prev().children().eq(0).html(),
			"num":num
				}]
			};
			localStorage.setItem("shoppinglist",""+JSON.stringify(jsonstr));
		}
		else{
			var jsonstr = JSON.parse(shoppinglist.substr(0,shoppinglist.length));  
			var productlist = jsonstr.productlist;
			var result = false;
			for(var i=0;i<productlist.length;i++){
				if(productlist[i].id==$(this).parent().parent().attr("id")){
					//改变购物车中的物品的数量
					productlist[i].num=productlist[i].num+1;
					result = true;
				}
				
			}
			if(!result){
			productlist.push({
			"id":$(this).parent().parent().attr("id"),
			"url":$(this).parent().prev().find("img").attr("src"),
			"name":$(this).prev().prev().prev().prev().html(),
			"price":$(this).prev().children().eq(0).html(),
			"num":num
				});
			}
			localStorage.setItem("shoppinglist",""+JSON.stringify(jsonstr));
		}


}

	
	






	
	