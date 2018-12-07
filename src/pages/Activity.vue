<template>
  <div class="Activity">
    <div class="container">
        <div class="warrperr">
    	<div class="title">
    		<h1>行业热门活动</h1>
    	</div>
    	<div class="text">
    		<h2>汇聚各大产业最新、 最热、 最前沿 的盛会</h2>
    	</div>
    </div>
    	<div class="list">
    		<ul>
    			<a id="item-first" href=""><li>活动类型</li></a>
    			<a id="item-second"href=""><li><span>不限</span></li></a>
    			<a href=""><li>展会论坛</li></a>
    			<a href=""><li>互动沙龙</li></a>
    			<a href=""><li>项目路演</li></a>
    			<a href=""><li>培训讲座</li></a>
    			<a href=""><li>走访考察</li></a>
    			<a href=""><li>线上分享</li></a>
    			
    		</ul>
    	</div><br>
    	<div class="nav-1">
    		<div class="nav-1-1">
    			<img style="width:310px;height:180px" src="https://res4.maikeji.cn/FssbvCnaFfUFW8ScbkpJ4cdxqXHl" alt="">
    		</div>
    		<div class="nav-1-2">
    			<ul>
    				<li id="filter">与资本零距离|创合会"商学院好项目"第十期路演会</li>
    				<li>活动时间：2018.12.09-2018.12.09</li>
    				<li>简介：迈科技 创合会强强联合，携手百家投资机构，助力创业者精准对接，实现创业梦想</li>
    				<!-- <a href=""> -->
                        <button  @click="changePage">我要报名</button>
                    <!-- </a> -->
    			</ul>
    		</div>
    		 
    	</div><br>
        <div style="border-bottom:1px solid #ccc" class="bottpm"></div>
    	<div class="nav-2">
    		<div class="nav-2-1">
    			<img style="width:310px;height:180px" src="https://res4.maikeji.cn/FvB-7IMYN14zo1DbhfrOwVwx5IgD" alt="">
    		</div>
    		<div class="nav-2-2">
    			<ul>
    				<a id="one" href=""><li>【讲座】吴晓波带你解读《避免失败》</li></a>
    				<a href=""><li>活动时间：2018.12.11-2018.12.13</li></a>
    				<a href=""><li>简介：先报名享受会员优惠，赠送超值服务</li></a>
    				<a href=""><button>我要报名</button></a>
    			</ul>
    		</div>
    	</div><br>
        <div style="border-bottom:1px solid #ccc" class="bottpm"></div>
    	<div class="nav-3">
    		<div class="nav-3-1">
    			<img style="width:310px;height:180px"  src="https://res4.maikeji.cn/FhQtJGLFWeMtBaA9uiCZYasWDsYD" alt="">
    		</div>
    		<div class="nav-3-2">
    			<ul>
    				<a id="two" href=""><li>第二届平湖市科技投融资接对接会</li></a>
    				<a href=""><li>活动时间：201812.11-2018.12.31</li></a>
    				<a href=""><li>简介：科技赋能，激发创新活力，诚邀各位参加第二届平湖市科技投融资接对接会</li></a>
    				<a href=""><button>我要报名</button></a>
    			</ul>
    		</div>
    	</div><br>
        <div style="border-bottom:1px solid #ccc" class="bottpm"></div>
    	<div class="nav-4">
    		<div class="nav-4-1">
    			<img style="width:310px;height:180px"  src="https://res4.maikeji.cn/Fhk0j9OoOT8IaQsP2pzjodCyS_0Q" alt="">
    		</div>
    		<div class="nav-4-2">
    			<ul>
    				<a id="three" href=""><li>让技术与市场来一场真正的对话|迈科技公益大讲堂</li></a>
    				<a href=""><li>活动时间：201812.11-2018.12.31</li></a>
    				<a href=""><li>简介：不让优质项目买没，真正让技术发挥价值</li></a>
    				<a href=""><button>我要报名</button></a>
    			</ul>
    		</div>
    	</div><br>
        <div style="border-bottom:1px solid #ccc" class="bottpm"></div>
    	<div class="nav-5">
    		<div class="nav-5-1">
    			<img style="width:310px;height:180px"  src="https://res4.maikeji.cn/Fk1kiY55VQDnvqHwxjfnOj8hm2Wm" alt="">
    		</div>
    		<div class="nav-5-2">
    			<ul>
    				<a id="four" href=""><li>2019届第十一届上海国际化工技术装备展览会</li></a>
    				<a href=""><li>活动时间：活动时间：201812.11-2018.12.31</li></a>
    				<a href=""><li>简介：2019届第十一届上海国际化工技术装备展览会开始报名啦</li></a>
    				<a href=""><button>我要报名</button></a>
    			</ul>
    		</div>
    	</div>
    	<div class="page">
    		<em style="background-color:#1f86ed;color:white;">1</em>
    		<em>2</em>
    		<em>3</em>
    		<em>4</em>
    		<em>5</em>
    		<em>6</em>
    		<em>...</em>
    		<em>27</em>
    		<em>下一页</em>
    	</div>
    </div>
    <div class="pop" style="border:1px solid #ccc">
    	<div class="top-1">
    		活动回顾
    	</div><br>
    	<div class="top-2">
    		<img style="width:240px;height:180px;" src="https://res4.maikeji.cn/FpJ8zik8TTGnqipwgNp8m9UdKEtG" alt="">
    	</div>
    	<div class="top-3">
    		需求征集中，第三方招聘中...
    	</div><br>
    	<div class="top-4">
    		<img style="width:240px;height:180px;" src="https://res4.maikeji.cn/FkMmpPsTZit5R3ThgUm8LTOL2qpU" alt="">
    	</div>
    	<div class="top-5">
    		【公开课】|首届长三角洲
    	</div>
    	<div class="top-6">
    		<img style="width:240px;height:180px;"  src="https://res4.maikeji.cn/FoPw9hs-MHTkKhurchvgU0XmaXec" alt="">
    	</div>
    	<div class="top-7">
    		有机工业废水如何处理  看看
    	</div>
    	<div class="top-8">
    		<img style="width:240px;height:173px;" src="https://www.maikeji.cn/images/wx-qrcode.jpg" alt="">
    	</div>
    </div>
  </div>
</template>
<script>
	export default{
        data(){
            return{

            }
        },
        methods:{
            changePage (){
                this.$router.push('/activity/content')
        },
            }
        }
    
</script>
<style>
.Activity{
	position:relative;
    width:1240px;
    margin:0 auto;
}
.container{
	width:990px;
    position:relative;
}
.container .warrperr{
    position:absolute;
    top:-250px;
    z-index:1000;
    left:40%;
}

	.container .title{
		text-align:center;
		font-size:20px;
		color:white;

	}
	
	.container .text{
		text-align:center;
		font-size:15px;
		color:white;
	}
	.container .list{
		background-color:#ededed;
		height:50px;
		line-height: 50px;


	}
	.container .list>ul>a>li{
        margin-left:15px;
		display:inline-block;
		width:100px;
		
        color:black;

	}
	.container #item-first{
		
		font-weight:bolder;
	}
	.container #item-second span{
		background-color:lightblue;
		padding:5px 20px 5px 20px;
		border:1px solid #4dafed;
	}
	.container .nav-1{
		position:relative;
	}
	
	
	.container .nav-1-2{
		position:absolute;
		left:330px;
		top:0px;
		line-height:45px;
	}
	.container #filter{
		color:black;
		font-size:18px;
	}
	 .container button{
		width:110px;
		height:35px;
		border-radius:4px;
		background-color:#1f86ed;
		color:white;
		font-size:14px;
        border: 1px solid #1f86ed;
	}
  .container a button:hover{
	background-color: rgb(40, 96, 144);
	color:white;
    cursor:pointer;
 }
 .container .nav-2{
 	position:relative;
 }
.container .nav-2-2{
		position:absolute;
		left:330px;
		top:0px;
		line-height:45px;
        color:black;
}
.container #one{
		color:black;
		font-size:18px;
}
.container .nav-3{
	position:relative;
}
.container .nav-3-2{
		position:absolute;
		left:330px;
		top:0px;
		line-height:45px;
}
.container .nav-4{
	position:relative;
}
.container .nav-4-2{
		position:absolute;
		left:330px;
		top:0px;
		line-height:45px;	
}
.container #two{
		color:black;
		font-size:18px;
}
.container #three{
		color:black;
		font-size:18px;
}
.container #four{
        color:black;
        font-size:18px;
}
.container .nav-5{
	position:relative;
}
.container .nav-5-2{
		position:absolute;
		left:330px;
		top:0px;
		line-height:45px;	
}
.container .page {
	margin-left:500px;
    margin-bottom:1.5em;

}
.container em{
	font-size:16px;
	color:#1f86ed; 
	padding-left:14px;
    padding-right:14px;
    padding-top:8px;
    padding-bottom:8px;
    border:2px solid #d6d6d6;
	border-radius:2px;
    line-height:10px;
}
.container:hover{
   
	cursor:pointer;
}
.pop{
	width:240px;
	height:950px;
	
	position:absolute;
	right:0px;
	top:16px;

}

.top-1{
	margin-top:-16px;
	text-align:center;
	line-height:50px;
	font-size:18px;
	background-color:#ededed;
}
.top-3{
	text-align:center;
	line-height:50px;
	font-size:18px;
	background-color:#ededed;
	color:white;
}
.top-5{
	text-align:center;
	line-height:50px;
	font-size:18px;
	background-color:#ededed;
	color:white;
}
.top-7{
	text-align:center;
	line-height:50px;
	font-size:18px;
	background-color:#ededed;
	color:white;
}

</style>