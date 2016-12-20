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
	$(".buy").on("tap",function(e){
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
			"num":""+num
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
					num+=1;
					result = true;
				}
				
			}
			if(!result){
			productlist.push({
			"id":$(this).parent().parent().attr("id"),
			"url":$(this).parent().prev().find("img").attr("src"),
			"name":$(this).prev().prev().prev().prev().html(),
			"price":$(this).prev().children().eq(0).html(),
			"num":""+num
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


				 //调用微信接口，地图功能
				 $("#mapbutton").on("tap",function(){
			console.log(1);
			var latitude = 0;
		var longitude = 0;
			wx.getLocation({
		    type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
		    success: function (res) {
		        var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
		        var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
		        var speed = res.speed; // 速度，以米/每秒计
		        var accuracy = res.accuracy; // 位置精度
		    }
		});
			wx.openLocation({
		    latitude: latitude, // 纬度，浮点数，范围为90 ~ -90
		    longitude: longitude, // 经度，浮点数，范围为180 ~ -180。
		    name: '', // 位置名
		    address: '', // 地址详情说明
		    scale: 1, // 地图缩放级别,整形值,范围从1~28。默认为最大
		    infoUrl: '' // 在查看位置界面底部显示的超链接,可点击跳转
		});
})
				 
			});
		});
		
	});
}
	
	