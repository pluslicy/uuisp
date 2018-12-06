<!--活动详细页面-->
<template>
  <div class="activityContent">
    <div  class="activity-1">
    	<div class="nat">
    		<ul>
    			<a style="color:black" href=""><li>首页 ></li></a>
    			<a style="color:black" href=""><li>活动 ></li></a>
    			<a style="color:black" href=""><li>活动详情 ></li></a>
    		</ul>
    	</div>
    	<div class="rout">
    		<div class="router-1">
    			<img style="margin-left:25px;margin-top:25px" src="https://res4.maikeji.cn/FhQtJGLFWeMtBaA9uiCZYasWDsYD" alt="">
    		</div>
    		<div class="router-2">
    			<ul>
    				<a style="color:#7aa5b6;font-size:25px" href=""><li>第二届平湖市科技企业投融资对接会</li></a>
    				<a style="color:#898989;font-size:18px" href=""><li>活动时间：2018.12.01-2018.12.31 </li></a>
    				<a style="color:#898989;font-size:18px" href=""><li>活动地点：浙江·平湖</li></a>
    				<a href=""><button>我要报名</button></a>
    			</ul>
    		</div>
    	</div>
    </div>
    <div class="card">
    	<div class="card-1">
    		<ul>
    			<li>活动简介</li>
    			<li>科技赋能，激发创新活力，诚邀各位参加第二届平湖市科技企业投融资对接会</li>
    		</ul>
    	</div><hr>
    	<div class="card-2">
    		<ul>
    			<a style="color:#1f86ed;font-size:30px;" href=""><li>活动详情</li></a>
    			<a style="color:black;font-weight: bolder;"  href=""><li>一、活动概况</li></a>
    			<a style="color:black;" href=""><li><span style="color:black;font-weight: bolder;">活动时间</span>：2018年12月（拟）</li></a>
    			<a style="color:black;" href=""><li><span style="color:black;font-weight: bolder;">活动地点</span>：浙江平湖圣雷克大酒店</li></a>
    			<a style="color:black;" href=""><li><span style="color:black;font-weight: bolder;">活动规模</span>：100人左右</li></a>
    		</ul>
    	</div><br>
    	<div class="card-3">
    		<ul>
    			<li>二、组织机构</li>
    			<li><span style="color:black;font-weight: bolder;">主办单位：</span>平湖市科技局、平湖市财政局、平湖市金融办</li>
    			<li><span style="color:black;font-weight: bolder;">承办单位：</span>绿合投资、招商银行平湖支行</li>
    			<li><span style="color:black;font-weight: bolder;">协办单位：</span>中国高新区科技金融信息服务平台、平湖科协或青企协、平湖工商联（拟）</li>
    			<li><span style="color:black;font-weight: bolder;">支持单位：</span>深圳证券信息有限公司、迈科技</li>
    		</ul>
    	</div><br>
    	<div class="card-4">
    		<ul>
    			<li style="color:black;font-weight: bolder;" >三、论坛议程</li>
    			<li>1、14:00-14:05</li>
    			<li>主持人开场</li>
    			<li>2、14:05-14:10 </li>
    			<li>领导致辞：钱勇彪副市长（拟</li>
    			<li>3、14:10—16:40</li>
    			<li>项目路演及交流</li>
    			<li>4、16:40-17:00</li>
    			<li>自由交流 </li>
    			<li>5、17:00-19:30 </li>
    			<li>嘉宾晚宴</li>
    		</ul>
    	</div><br>
    	<div class="card-5">
    		<ul>
    			<li style="color:black;font-weight: bolder;">四、参会机构</li>
    			<li>组织部（人才办）、发改局、科技局、经信局、人社局、财政局、金融办相关负责人，各镇街道科技助理员、路演企业代表、其他投资机构、平湖企业家等。</li>
    		</ul>
    	</div><br>
    	<div class="card-6">
    		<ul>
    			<li style="color:black;font-weight: bolder;">五、拟邀点评机构</li>
    			<li>亚商资本、金沙江联合资本、红杉资本、华睿投资等</li>
    			<li>点击下方报名按钮，将会有工作人员与您联系。</li>
    		</ul>
    	</div>
    	<div class="last-btn">
    		报名参加
    	</div>
    </div>
  </div>
</template>
<script>
	
</script>
<style>
.activityContent{
	margin:0 auto;
	width:1240px;
	background-color:#eeeeee;
	height:1590px;
}
.activity-1{
	background-color:white;
}

	.nat>ul>a>li{
		display:inline-block;
		width:80px;
	}
	.nat>ul>a>li:hover{
		color:#1f86ed;
		cursor:pointer;
	}
	.rout{
		width:1240px;
		height:300px;
		background-color: white;
		position:relative;
	}
	.router-2{
		position:absolute;
		left:470px;
		top:25px;
		line-height:65px;
	}
	button{
		width:100px;
		height:40px;
		border-radius:10px;
		background-color:#1f86ed;
		color:white;
		font-size:15px;
	}
    button:hover{
	 background-color: rgb(40, 96, 144);
	 color:white;
	 cursor:pointer;
   }
	.card{
		width:925px;
		height:1276px;
		background-color:white;
	}
	.card-1>ul>li{

		line-height:50px;
	}
	.card-1>ul>li:first-child{
		font-size:30px;
		color:#1f86ed;
	}
	.card-1>ul>li:nth-child(2){
		color: rgb(51, 51, 51);
	}
	.card-2>ul>a>li{
		line-height:40px;
	}
	.card-3>ul>li{
		line-height: 40px
	}
	.card-3>ul>li:first-child{
		color:black;
		font-weight: bolder;
	}
	.card-4>ul>li{
		line-height: 30px
	}
	.card-5>ul>li{
		line-height: 30px
	}
	.card-6>ul>li{
		line-height: 30px
	}
	.last-btn{
		width:200px;
		height:50px;
		background-color:#1f86ed;
		border-radius: 5px;
		margin-top:70px;
	}
	.last-btn{
		text-align:center;
		line-height:50px;
		font-size:18px;
		color:white;
	}
	.last-btn:hover{
		cursor:pointer;
		background-color: rgb(40, 96, 144);
	}
</style>
