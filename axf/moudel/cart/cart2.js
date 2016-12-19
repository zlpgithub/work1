		function cart(){
			//点击增加减少
//获取页面上的商品的个数
var m=$(".select").length,
	n=1;
$(".bubble").html(m);
//获取页面上的开始的商品总价格

	//获取local
	var shoppinglist = localStorage.getItem("shoppinglist");
		shoppinglist = JSON.parse(shoppinglist);
		$("#tmp").load("tmp/carttmp.html",function(){
			var str = baidu.template("carttmp", shoppinglist);
			$("#need").html(str); 

			//点击增加商品数量
$(".buy").on("tap",function(e){
	e = e||window.event;
	m++;
	n++;
	//购物车数量增加
	$(".bubble").html(m);
	//增加要买的东西
	$(this).prev().html(n);
	//总价格增加
	
});
//点击减少商品数量
$(".cancel").on("tap",function(){
		$(this).next().html()<2 ? $(this).parent().parent().parent().parent().parent().remove() : $(this).next().html($(this).next().html()-1);
		$(".bubble").html($(".bubble").html()-1);
});
//点击选中不选中
// 跟css放的位置有关系。。
$(".select").on("tap",function(){
	$(this).toggleClass("goods-no-selected");
	$(".select").hasClass("goods-no-selected") ? $("#selected-all").addClass("selected-no") : $("#selected-all").removeClass("selected-no");

});
//点击全选全不选
$("#selected-all").on("tap",function(){
	$(this).toggleClass("selected-no");
	$(this).hasClass("selected-no") ? $(".select").addClass("goods-no-selected"):$(".select").removeClass("goods-no-selected");
});
		});

		}