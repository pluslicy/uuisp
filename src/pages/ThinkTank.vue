<!-- 首页 -->
<template>
	<div class="thinkTank">
		<div class="container">
		<div class="cve">
			有问题 找专家
		</div><br>
		<div class="link">
			Link Technology to Industry
		</div><br>
<div class="mixed">
		<div class="inp" style="text-align:center;vertical-align:middel;">
			<input  style="width:600px;height:40px;font-size:18px; color:#ccc;"type="" value="寻找你的专家顾问">
			<div class="btn">
				<button style="width:100px;height:48px;position:absolute;left:845px;top:-48px;background-color:#156fb8;"><span style="color:white;font-size:20px">搜&nbsp;索</span></button>
			</div>
			</div>
		</div>
		<div class="home">
			<span>入驻专家</span>
		</div>
		<div class="load">
			<span style="color:#ccc">知名学者、产业专家，为您技术升级转型之路出力</span>
		</div><br>
		
		<div class="hote">
			<ul class="sub-nav">
				<a href=""><li>医药科学.</li></a>
				<a href=""><li>化学化工.</li></a>
				<a href=""><li>工程技术.</li></a>
				<a href=""><li>农业科学.</li></a>
			</ul>

		</div><br>
		<div class="expert">
			
			<ul id="medial">
				<li><img class="expert-1" src="https://res4.maikeji.cn/FlcdTlvZyfwZe8gLMBqMPwTagWoa" alt="">
					<div class="xxx"></div>
				</li>
				<li><img class="expert-1" src="https://res4.maikeji.cn/Fjfipb1pUJxqzNm12bdiE-ZDx4HO" alt="">
					<div class="xxx"></div>
				</li>
				<li><img class="expert-1" src="https://res4.maikeji.cn/Fs88q36P3SlCS025FiNIOK9_sAqg" alt="">
					<div class="xxx"></div>
				</li>
				<li><img class="expert-1" src="https://res4.maikeji.cn/Fn6QnLSS8ORdQdT3C4eMC2ngB6NW" alt="">
					<div class="xxx"></div>
				</li>
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
.container{
	width:80%;
	height:100%;
	
	margin:0 auto;
}
.mixed{
	width:100%;
	height:100%;
	margin:0 auto;
	background-color:red;
	position:relative;
	
	

}
.btn{
	position:absolute;
	right:1100px;
	margin:0 auto;

}


	.cve{
		text-align: center;
		font-size:30px;
		color:gold;
	}
	.link{
		text-align:center;
		color:lightblue;
		font-size:20px;
	}
	.home{
		text-align: center;
		font-size:30px;
		margin-top:30px;
		color:black;
	}
	.load{
		text-align: center;
		font-size:14px;
		margin-top:20px;
		color:black;
	}
	.hote{
		width:100%;
		height:100px;
		
		margin:0 auto;
		text-align:center;
	}
	.sub-nav>a>li{
		display:inline-block;
		width:160px;
		line-height: 100px;
		font-size:30px;
		font-weight:bolder;
		
		
		}
		.sub-nav>a>li:hover{
			color:#59a8d7;
		}
		.expert{
			width:100%;
			height:400px;
			position:relative;
			margin:0 auto;
			display:flex;
			
		}
		.expert>ul>li{
			display:inline-block;
			flex:1;
			position:relative;
		}
		.expert-1{
			width:260px;
			height:400px;
		}

		#medial{
			margin:0 auto;
		}
		.expert-1{
			
			width:260px;
			height:400px;
		}
		.xxx{
			width:260px;
			height:400px;
			 background: rgba(101, 101, 101, 0.4);

			position:absolute;
			left:0px;
				top:0;
			display:none; 
		}
		.expert:hover .xxx{
			display:block;
		}

</style>