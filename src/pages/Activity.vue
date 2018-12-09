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
    		<ul class="bootPage">
    			 <li class="item-first" @click="changeFirstPage">首页</li>
    			<li class="list-css list-bootPage" @click="changeItem(0)">行业资讯</li>
    			<li class="list-css" @click="changeItem(1)">政策法规</li>
    			<li class="list-css"@click="changeItem(2)">文献资料</li>
    			<li class="list-css" @click="changeItem(3)">资讯服务</li>
    			<li class="list-css" @click="changeItem(4)">软件服务</li>
    			<li class="list-css" @click="changeItem(5)">检测服务</li>
    			<li class="list-css" @click="changeItem(6)">创新创业</li>
    			
    		</ul>
    	</div><br>
    	<div class="nav-1">
    		<div class="nav-1-1">
    			<img style="width:310px;height:180px" src="http://www.uuisp.cn/images/upload/userPhoto/study_1.jpg" alt="">
    		</div>
    		<div class="nav-1-2">
    			<ul>
    				<li id="filter">第四届"两岸城市轨道交通/捷运发展论坛"</li>
    				<li>活动时间：2018.12.09-2018.12.09</li>
    				<li>发布机构：中国交通运输协会</li>
    				<!-- <a href=""> -->
                        <button  @click="changePage">我要报名</button>
                    <!-- </a> -->
    			</ul>
    		</div>
    		 
    	</div><br>
        <div style="border-bottom:1px solid #ccc" class="bottpm"></div>
    	<div class="nav-2">
    		<div class="nav-2-1">
    			<img style="width:310px;height:180px" src="http://www.uuisp.cn/images/upload/userPhoto/study_1.jpg" alt="">
    		</div>
    		<div class="nav-2-2">
    			<ul>
    				<a id="one" href=""><li>第十二届轨道交通年会</li></a>
    				<a href=""><li>活动时间：2018.12.11-2018.12.13</li></a>
    				<a href=""><li>发布机构：中国智能交通协会</li></a>
    				<button  @click="changePage">我要报名</button>
    			</ul>
    		</div>
    	</div><br>
        <div style="border-bottom:1px solid #ccc" class="bottpm"></div>
    	<div class="nav-3">
    		<div class="nav-3-1">
    			<img style="width:310px;height:180px"  src="http://www.uuisp.cn/images/upload/userPhoto/study_1.jpg" alt="">
    		</div>
    		<div class="nav-3-2">
    			<ul>
    				<a id="two" href=""><li>第八届管道技术与非开挖国际技术研讨会</li></a>
    				<a href=""><li>活动时间：201812.11-2018.12.31</li></a>
    				<a href=""><li>发布机构：中国地质大学（武汉）中美联合非开挖工程研究中心</li></a>
    				<button  @click="changePage">我要报名</button>
    			</ul>
    		</div>
    	</div><br>
        <div style="border-bottom:1px solid #ccc" class="bottpm"></div>
    	<div class="nav-4">
    		<div class="nav-4-1">
    			<img style="width:310px;height:180px"  src="http://www.uuisp.cn/images/upload/userPhoto/study_1.jpg" alt="">
    		</div>
    		<div class="nav-4-2">
    			<ul>
    				<a id="three" href=""><li>2017(第六届)国际桥梁与隧道大会</li></a>
    				<a href=""><li>活动时间：201812.11-2018.12.31</li></a>
    				<a href=""><li>发布机构：防水排水专业委员会，上海市隧道工程轨道交通设计研究院</li></a>
    				<button  @click="changePage">我要报名</button>
    			</ul>
    		</div>
    	</div><br>
        <div style="border-bottom:1px solid #ccc" class="bottpm"></div>
    	<div class="nav-5">
    		<div class="nav-5-1">
    			<img style="width:310px;height:180px"  src="http://www.uuisp.cn/images/upload/userPhoto/study_1.jpg" alt="">
    		</div>
    		<div class="nav-5-2">
    			<ul>
    				<a id="four" href=""><li>2019届第十一届上海国际化工技术装备展览会</li></a>
    				<a href=""><li>活动时间：活动时间：201812.11-2018.12.31</li></a>
    				<a href=""><li>简介：2019届第十一届上海国际化工技术装备展览会开始报名啦</li></a>
    				<button  @click="changePage">我要报名</button>
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
    		培训交流
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
        changeItem(n){
            $(".list-css").eq(n).addClass('list-bootPage').siblings().removeClass('list-bootPage')
        },
        changeFirstPage(){
            this.$router.push('/')
        }
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
		margin-top:2em;
        height:50px;
        line-height:50px;
    }
	.container .list > ul > li{
        cursor:pointer;
        float: left;
        line-height: 2em;
        margin-left:3.5em;
        padding:0.1em .5em;
        margin-top:.7em;
    }
    .container .list-bootPage{
       
        border: 1px solid #4DAFED;
        background-color: #E3F1FF;
        color:#0A539A;
    }

	.container .item-first{
		
		font-weight:bolder;
	}
	.container .list-bootPage {
       
        border:1px solid #4dafed;
        background-color: #e3f1ff;
        text-align:center;
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
  .container  button:hover{
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