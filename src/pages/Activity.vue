
<!-- 首页 -->
<template>
	<div class="Activity">
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
				<a href=""></a>
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
					
				</div>
				<div class="eight">
					<ul>
						<a href=""><li>第二届平湖市科技企业投融资对接会</li></a>
						<a href=""><li>活动时间：2018.12.01-2018.12.31</li></a>
						<a href=""><li>简介：科技赋能，激发创新活力，诚邀各位参加第二届平湖市科技投融资对接会</li></a>
						<a class="seventh" href=""><button>我要报名</button></a>
					</ul>
				</div>
			</div>
			<div class="fifth-pic">
				<div class="nine">
					
				</div>
				<div class="ten">
					<ul>
						<a href=""><li>2019第十一届上海国际化工技术装备展览会</li></a>
						<a href=""><li>活动时间：2019.8.21-2019.8.23</li></a>
						<a href=""><li>简介：2019第十一届上海国际化工技术装备展览会开始报名啦</li></a>
						<a class="eightth" href=""><button>我要报名</button></a>
					</ul>
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
		top:50px;
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
</style>
