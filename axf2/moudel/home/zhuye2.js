	function home(){
	// 获取数据
	$.getJSON("json/home.json",function(data){
		var fooddata = data;
		$("#tmp").load("tmp/eat.html",function(){
			var str = baidu.template("eat", fooddata);
			$("#shuju").html(str);
			$(this).find("#eat").remove();
	//图片轮播
	var mySwiper = new Swiper('.swiper-container', {
	autoplay: 1000,//可选选项，自动滑动(时间:毫秒)直到手动滑动为止
	loop : true,//循环
	pagination : '.swiper-pagination',//分页器
   });	
	//主页购物车部分
	var m=0;
	//有个冲突的地方，后期解决吧
	$(".home-buy").on("tap",function(e){
		e = e||window.event;
		m++;
		var s = $(this).parent().prev().find("img").clone();
		$(this).parent().parent().append(s);
		var x1 = $(this).parent().prev().offset().left;
		var y1 = $(this).parent().prev().offset().top;
		var x2 = $("#bubble").offset().left;
		var y2 = $("#bubble").offset().top;
		// 要加上px
		$("#ani").html("@keyframes fly{from{left:"+x1+"px;top:"+y1+"px;width:1.24rem;height:1.24rem;border-radius:50%}to{left:"+x2+"px;top:"+y2+"px;width:10px;height:10px}}");

		s.css({
			"position":"absolute",
			"left":x1+"px",
			"top":y1+"px",
			"animation":"fly linear 1s"
		});
		$(".bubble").html(m);
		$(".bubble").css("animation","change 1s");
		// 将点击的对象传入localStorage
		var shoppinglist = localStorage.getItem("shoppinglist"),
			num=1;
		if(localStorage.length==0){
			var jsonstr = {
			"productlist":[{
			"id":$(this).parent().parent().attr("id"),
			"url":$(this).parent().prev().find("img").attr("src"),
			"name":$(this).prev().prev().prev().prev().html(),
			"price":$(this).prev().children().eq(0).html(),
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


		 
		


		// 删除克隆的对象
		var t=setInterval(f1,1000);
				 function f1(){
				 	s.remove();
				 	$(".bubble").css("animation","");
				 	clearInterval(t);
				 }
			});
		});
		
	});
}
	
	