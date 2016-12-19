<?php
require_once "jssdk.php";
// appId  和 秘钥
$jssdk = new JSSDK("wx96022b9e2f37e2f4", "acca5fc1063b72de55bdcc89313c7e13");
$signPackage = $jssdk->GetSignPackage();
?>

<html>
	<head>
		<title>首页</title>
		<meta charset = "utf-8">
		<meta name = "viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">
		<link rel="stylesheet" type="text/css" href="css/swiper.min.css">
		<script type="text/javascript" src="js2/jquery-1.11.2.js"></script>
		<script type="text/javascript">
			var _$ = $.noConflict();
		</script>
		<script type="text/javascript" src="js1/zepto.js"></script>
		<script type="text/javascript" src="js1/touch.js"></script>
		<script type="text/javascript" src="js1/baiduTemplate.js"></script>
		<script type="text/javascript" src="js1/jquery.lazyload.min.js"></script>
		<script type="text/javascript" src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
		<!-- data-main 指定主程序入口 通常指定当前目录下的js文件 其他模块中的路径会参照主程序入口路径（路径问题）  -->
		<script data-main = "port.js" type="text/javascript" src = "js2/require.js"></script>
		
		
		<style type="text/css">
		*{
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
html{
	font-size: 100px;
}
body{
	font-family: "microsoft yahei,微软雅黑";
	font-size: 0.14rem;
	background: #efefef;
}
ul,ol{
	list-style: none;
}
a{
	text-decoration: none;
}
img{
	/*删除图片默认的下边距*/
	vertical-align: top;
}
		/*底部*/
.footer{
	display: block;
	position: fixed;
	left: 0;
	/*加上一个right：0会成为充满的状态*/
	right: 0;
	bottom: 0;
	background-color: rgba(246,246,246,0.95);
	display: flex;

}
.footer li{
	flex:1;
}
.footer a{
	color: #000;
	display: block;
	/*width: 100%;*/
	background: url(img/shouye.png) no-repeat center 0.06rem;
	background-size: auto 0.25rem;
	text-align: center;
	font-size: 0.15rem;
	padding-top: 0.4rem;
	position: relative;
}
.footer li:nth-of-type(2) a{
	background: url(img/shan.png) no-repeat center 0.06rem;
	background-size: auto 0.25rem;
}
.footer li:nth-of-type(3) a{
	background: url(img/gou.png) no-repeat center 0.06rem;
	background-size: auto 0.25rem;
}
.footer li:nth-of-type(4) a{
	background: url(img/wode.png) no-repeat center 0.06rem;
	background-size: auto 0.25rem;
}
/*小红泡*/
.bubble{
	background-color: #f40;
    color: #fff;
    width: 0.23rem;
    height: 0.23rem;
    line-height: 0.23rem;
    text-align: center;
    font-size: 0.13rem;
    position: absolute;
    border-radius: 50%;
    left: 65%;
    top: 0;
}
@keyframes change{
	from{
		width: 0.3rem;
	    height: 0.3rem;
	}
	to{
		width: 0.23rem;
    	height: 0.23rem;
	}
}
.footer2{
	height: 0.64rem;
}
		</style>
		<style type="text/css" id="ani"></style>
	</head>
	<body>
		<div class = "main">
			<div class = "home"></div>
			<div class = "market"></div>
			<div class = "order"></div>
			<div class = "mine"></div>
		</div>
		<ul class="footer">
			<li><a href="#home">首页</a></li>
			<li><a href="#market">闪送超市</a></li>
			<li>
			<div class="bubble" id="bubble">1</div>
			<a href="#order">购物车</a>
			</li>
			<li><a href="#mine">我的</a></li>
		</ul>
	<ul class="footer2"></ul>	
	</body>
	<script type="text/javascript">
	document.documentElement.style.fontSize = innerWidth/4.14 +"px";
    window.onresize =function(){
      document.documentElement.style.fontSize = innerWidth/4.14 + "px";
    }
	</script>
	<script type="text/javascript">
		 wx.config({
    debug: true,
    appId: '<?php echo $signPackage["appId"];?>',
    timestamp: <?php echo $signPackage["timestamp"];?>,
    nonceStr: '<?php echo $signPackage["nonceStr"];?>',
    signature: '<?php echo $signPackage["signature"];?>',
     jsApiList: [
        
      ]
  });
	</script>
</html>