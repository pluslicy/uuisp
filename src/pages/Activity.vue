<!-- 首页 -->
<template>
	<div class="Activity">
		
		<h1>行业热门活动</h1>
		<h2>汇聚各大产业最新、最热、最前沿的盛会</h2>
	<div class="title">
		<ul class="title-nav">
			<a id="first" href=""><li>活动类型</li></a>
			<a href=""><li>不限</li></a>
			<a href=""><li>展会论坛</li></a>
			<a href=""><li>互动沙龙</li></a>
			<a href=""><li>项目路演</li></a>
			<a href=""><li>培训讲座</li></a>
			<a href=""><li>走访考察</li></a>
			<a href=""><li>培训讲座</li></a>
			<a href=""><li>其他</li></a>
		</ul>
	</div>
		<div class="first-pic">
			<div class="one">
				<img src="" alt="">
			</div>
			<div class="two">
				<ul>
					<a class="second"><li>创合汇"商学院好项目"第十期路演会|与资本零距离</li></a>
					<a href=""><li>活动时间：2018.12.09-2018.12.09</li></a>
					<a href=""><li>简介：迈科技，创和汇强强联合，携手百家投资机构，助力创业者进准对接，实现创业梦想</li></a>
					<a class="third"><button>我要报名</button></a>
				</ul>
			</div>
		</div>

		<div class="second-pic">
			<div class="three">
				<img src="" alt="">
			</div>
			<div class="four">
				<ul>
					<a id="one" href=""><li>让技术与市场来一场真正的对决|。迈科技公益大讲堂</li></a>
					<a href=""><li>活动时间：2018.07.01-2018.12.31</li></a>
					<a href=""><li>简介：不让优质项目埋没，真正让技术发挥价值</li></a>
					<a class="fifth" href=""><button>我要报名</button></a>
				</ul>
			</div>
		</div>
			<div class="third-pic">
				<div class="five">
					<img src="" alt="">
				</div>
				<div class="six">
					<ul>
						<a id="three" href=""><li>【讲座】吴晓波带你解读《避免失败》</li></a>
						<a href=""><li>活动时间：2018.12.11-2018.12.13</li></a>
						<a href=""><li>简介：现报名享受会员优惠，赠送超值服务</li></a>
						<a class="sixth" href=""><button>我要报名</button></a>
					</ul>
				</div>
			</div>	
		<div class="forth-pic">
				<div class="seven">
					<img src="" alt="">
				</div>
				<div class="eight">
					<ul>
						<a class="item" href=""><li>第二届平湖市科技企业投融资对接会</li></a>
						<a href=""><li>活动时间：2018.12.01-2018.12.31</li></a>
						<a href=""><li>简介：科技赋能，激发创新活力，诚邀各位参加第二届平湖市科技投融资对接会</li></a>
						<a class="seventh" href=""><button>我要报名</button></a>
					</ul>
				</div>
			</div>
			<div class="page">
				<ul>
					<a href=""><li>1</li></a>
					<a href=""><li>2</li></a>
					<a href=""><li>3</li></a>
					<a href=""><li>4</li></a>
					<a href=""><li>5</li></a>
					<a href=""><li>6</li></a>
					<a href=""><li>...</li></a>
					<a href=""><li>27</li></a>
					<a href=""><li>下一页</li></a>
				</ul>
			</div>
			<div class="right-nav">
				<a href=""><div class="act">活动回顾</div></a>
				<div class="chn">
					<img src="" alt="">
				</div>
				<a href=""><div class="need">
					需求征集中，第三届中国创新挑...
				</div></a>
				<div class="long">
					<img src="" alt="">
				</div>
				<a href=""><div class="meet">
					【公开课】首届长三角科技教...
				</div></a>
				<div class="lib">
					<img src="" alt="">
				</div>
				<a href=""><div class="water">
					有机工业废水如何处理？查看
				</div></a>
				<div class="que">
					活动咨询
				</div>
				<div class="desc">
					<img src="" alt="">
				</div>
			</div>

	</div>
</template>
<script>
	export default {
		data (){
			return{

			}
		}
	}
</script>
<style>
body{
       overflow: scroll;
       overflow-x: hidden;
        }
	ul li {
		list-style:none;
	}
	
	h1{
		margin-left: 500px;
		color:gold;
		font-size: 50px;
	}
	h2{
		margin-left: 460px;
		color:gold;
		font-size:20px;
	}
	

	.title{
		border:1px solid #ccc;
		width:730px;
		height:50px;
		background-color: #ededed;
		margin-left: 100px;
	}
	.title-nav a>li{
		float:left;
		width:80px;
		line-height:50px;
		text-align: center;
	}
	#first{
		font-weight:bolder;
		color:black;
	}
	.title-nav a>li:hover{
		
		color:blue;
	}
	.one{
		width: 300px;
		height: 150px;
		border:1px solid black;
		margin-left: 100px;
		background-color:teal;
	}
	.first-pic{
		position:relative;
		top:50px;

	}
	.two{
		position: absolute;
		right:350px;
		bottom:50px;
	}

	.second{
		font-size:20px;
		color:black;
	}
	.third button{
		background-color:blue;
		width: 100px;
		height:30px;
		border-radius: 10px;
		color:white;
	}
	.second-pic{
		position:relative;
		top:120px;
	}
	.three{
		margin-top:-20px;
		margin-left:100px;
		width: 300px;
		height: 150px;
		border:1px solid black;
		background-color:orange;
	}
	.four{
		top:20px;
		position: absolute;
		right:440px;

	}
	.fifth button{
		background-color:blue;
		width: 100px;
		height:30px;
		border-radius: 10px;
		color:white;
	}
	#one{
		color:black;
		
		font-size:20px;
	}
	.third-pic{
		position:relative;
		top:90px;
		clear:both;
		display:block;

	}
	.five{
		position:absolute;
		top:80px;
		left:100px;
		width: 300px;
		height: 150px;
		border:1px solid black;
		background-color:pink;
	}
	.six{
		position:absolute;
		right:560px;
		top:100px;
	}
	.sixth button{
		background-color:blue;
		width: 100px;
		height:30px;
		border-radius: 10px;
		color:white;
	}
	#three{
		font-size:20px;
		color:black;
	}
	.forth-pic{
		position:relative;
		top:120px;
		clear:both;
		display:block;
	}
	.seven{
		position:absolute;
		width: 300px;
		height: 150px;
		border:1px solid black;
		background-color:gold;
		top:260px;
		left:100px;
	}
	.eight{
		position:absolute;
		right:400px;
		top:300px;
	}
	.seventh button{
		background-color:blue;
		width: 100px;
		height:30px;
		border-radius: 10px;
		color:white;
	}
	.fifth-pic{
		position:relative;
		clear:both;
		display:block;
	}
	.nine{
		width: 300px;
		height: 150px;
		border:1px solid black;
		background-color:purple;
		position:absolute;
		top:440px;
		left:100px;
	}
	.ten{
		position:absolute;
		right:10px;
		top:500px;
		right:500px;
	}
	.eightth button{
		background-color:blue;
		width: 100px;
		height:30px;
		border-radius: 10px;
		color:white;
	}
.item{
	font-size:20px;
	color:black;
}
.page{
	position:relative;
	bottom:-550px;
	left:450px;
}
.page>ul>a>li{
	float:left;
	width:60px;
	font-size:15px;
	font-weight:bolder;

}
.page>ul>a>li:hover{
	color:blue;
}
.right-nav{
	width:280px;
	height:1000px;
	box-sizing:border-box;
	border:1px solid #ededed;
	position:absolute;
	right:50px;
	top:0;
}
.act{
	height:50px;
	text-align:center;
	font-size:20px;
	background-color: #ededed;
	line-height:50px;
}
.chn{
	width:280px;
	height:150px;
	background-color: pink;
	position:absolute;
	top:70px;
}
.need{
	width:280px;
	height:50px;
	background-color:#ededed;
	position:absolute;
	top:240px;
	line-height: 50px;
	text-align: center;
}
.long{
	width:280px;
	height:150px;
	background-color:lightblue;
	position:absolute;
	top:310px;
}
.meet{
	width:280px;
	height:50px;
	background-color:#ededed;
	position:absolute;
	top:480px;
	line-height:50px;
	text-align:center;
}
.lib{
	width:280px;
	height:150px;
	background-color:purple;
	position:absolute;
	top:550px;
}
.water{
	width:280px;
	height:50px;
	background-color:#ededed;
	position:absolute;
	top:720px;
	line-height:50px;
	text-align:center;

}
.que{
	width:280px;
	height:50px;
	background-color:#ededed;
	position:absolute;
	top:800px;
	line-height:50px;
	text-align:center;
}
.desc{
	width:280px;
	height:150px;
	background-color:lightblue;
	position:absolute;
	top:860px;
}
</style>