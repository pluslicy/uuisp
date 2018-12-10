<!-- 首页 -->
<template>
	<div class="ThinkTank">
		<div class="cencent">
			<div class="warperrr">
			<div class="biaoti">
				<h1>有问题&nbsp;&nbsp;找专家</h1>
			</div><br>
			<div class="fubiao">
				Link   Technology   to   Industry
			</div><br><br>
			</div>
			<div class="input" style="text-align:center;vertical-align:middel;">
				<input  style="width:610px;height:40px;font-size:18px; color:#ccc;" type="text" placeholder="寻找你的专家顾问">
				<i>搜&nbsp;&nbsp;&nbsp;&nbsp;索</i>
			</div><br>
			<br>
			<br>
			

			<div class="zhuanjia">
				<i>入&nbsp;驻&nbsp;专&nbsp;家</i>
			</div><br>
			<br>
			<br>
			<div class="title-1">
				知名学者、产业专家，为您技术升级转型之路出力
			</div><br>
			<br>
			<br>
			<div class="title-2">
				<i>医药科学&nbsp;&nbsp;&nbsp;</i><i>化学化工&nbsp;&nbsp;&nbsp;</i><i>工程技术&nbsp;&nbsp;&nbsp;</i><i>农业科学</i>
			</div><br>
			<br>
			<br>
			<br>
			<div class="pic">
				<div class="pic-1">
					<div class="model">
						<ul>
							<li @click="changePageOne"><i style="border:1px solid white; padding:10px">新型药物</i>&nbsp;&nbsp;&nbsp;&nbsp;<i style="border:1px solid white;padding:10px">呼吸性疾病</i></li>

						</ul>
						
					</div>
				
					<img style="width:300px;height:330px;margin-left:15px" src="https://res4.maikeji.cn/FlcdTlvZyfwZe8gLMBqMPwTagWoa" alt="">
						
					<div style="width:300px;height:80px;background-color: white" class="name">
						<ul>
							<li><b>施仲衡</b> 研究员</li>
							<li>上海交通大学|药学院</li>
						</ul>
					</div>
				</div>
				<div class="pic-2">
					<div class="model-1">
						<ul>
							<li @click="changePageOne"><i style="border:1px solid white; padding:10px">药物化学</i>&nbsp;&nbsp;&nbsp;&nbsp;<i style="border:1px solid white;padding:10px">慢性疼痛药</i></li>
						</ul>
					</div>
					<img style="width:300px;height:330px" src="https://res4.maikeji.cn/Fjfipb1pUJxqzNm12bdiE-ZDx4HO"  alt="">
					<div style="width:300px;height:80px;background-color: white" class="name-1">
						<ul>
							<li><b>钱七虎</b> 教授，博导</li>
							<li>上海交通大学|药学院</li>
						</ul>
					</div>
				</div>
				<div class="pic-3">
					<div class="model-3">
						<ul>
							<li><li @click="changePageOne"><i style="border:1px solid white; padding:10px">尼古丁</i>&nbsp;&nbsp;&nbsp;&nbsp;<i style="border:1px solid white;padding:10px">食品</i></li></li>
						</ul>
					</div>
					<img style="width:300px;height:330px" src="https://res4.maikeji.cn/Fs88q36P3SlCS025FiNIOK9_sAqg" alt="">
					<div style="width:300px;height:80px;background-color: white" class="name-3">
						<ul>
							<li><b>俞明健</b> 教授</li>
							<li>上海交通大学|生命与科学技术学院</li>
						</ul>
					</div>
				</div>
				<div class="pic-4">
					<div class="model-4">
						<ul>
							<li><li><li @click="changePageOne"><i style="border:1px solid white; padding:10px">药物输送</i>&nbsp;&nbsp;&nbsp;&nbsp;<i style="border:1px solid white;padding:10px">新型药品</i></li></li></li>
						</ul>
					</div>
					<img style="width:300px;height:330px;" src="https://res4.maikeji.cn/Fn6QnLSS8ORdQdT3C4eMC2ngB6NW"  alt="">
					<div style="width:300px;height:80px;background-color: white" class="name-4">
						<ul>
							<li><b>陈志龙</b> 教授</li>
							<li>上海交通大学|药学院</li>
						</ul>
					</div>
				</div>
			</div><br><br><br>
			<div class="morethan">
				查看更多医药科学类专家
			</div><br>
			</div>
			<br>
			<br>
			<div class="sizing">
			<div class="help">
				合作机构
			</div><br>
		
			<br>
			<div class="toget">
				汇聚国内外顶尖高校和科研院所的优质技术力量
			</div><br><br>
			<a href=""><div class="boot">
				<img style="width:1240px;height:600px" src="../assets/think/second.png" alt="">
			</div></a>
			<br><br>
			<div class="look">
				查看更多合作机构
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
			 changePageOne (){
                this.$router.push('/thinkTank/ThinkTank')
        },
		}
	}
</script>
<style>
 .ThinkTank{
	
	background-color:#ebe9ea;

}
.sizing{
	background-color: white;


}
i{
	font-style:normal;
}
.ThinkTank{
	position:relative;
	width:1240px;
	margin:0 auto;
	background-color:#ebe9ea;
	
}
.ThinkTank .warperrr{
	position:absolute;
	top:-300px;
	z-index:1000;
	left:40%;
}
	.ThinkTank .biaoti{
		text-align:center;
		font-size:16px;
		color:white;
	}
	.ThinkTank .fubiao{
		text-align:center;
		font-size:26px;
		color:#a9dbfe;
		font-weight:lighter;
	}
	.ThinkTank .input{
		position:absolute;
		top:-150px;
		z-index:1000;
		left:310px;
	}
	.ThinkTank .input i{
		margin-left:-5px;
		background-color:#156fb8;
		padding:12px 13px 12px 20px;
		color:white;
		font-size:18px;
	}
	.ThinkTank .input i:hover{
		cursor:pointer;
		background-color:#395a77;
	}
	.ThinkTank .zhuanjia {
		text-align:center;
		
	}
	.ThinkTank .zhuanjia i{
		font-weight: lighter;
		font-size:40px;
		color:#333333;
	}
	.ThinkTank .title-1{
		text-align:center;
		color:#333333;
	}
	.ThinkTank .title-2{
		text-align:center;
		font-size:28px;
		font-weight:bolder;
	}
	.ThinkTank .title-2 i:hover{
		color:#156fb8;
		cursor:pointer;
	}
	.ThinkTank .pic{
		position:relative;
	}
	
	
.ThinkTank .pic .pic-1{
	position:absolute;
		left:-15px;
		
}
	.ThinkTank .pic .pic-2{
		position:absolute;
		left:312px;
		

	}
	.ThinkTank .pic .pic-3{
		position:absolute;
		left:626px;
		
	}
	.ThinkTank .pic .pic-4{
		position:absolute;
		left:940px;
		

	}
	.ThinkTank .name{
		text-align:center;
		line-height:40px;
		font-size:16px;
		margin-left:15px;
		

	}
	.ThinkTank .name-1{
		text-align:center;
		line-height:40px;
		font-size:16px;

	}
	.ThinkTank .name-2{
		text-align:center;
		line-height:40px;
		font-size:16px;
	}
	.ThinkTank .name-3{
		text-align:center;
		line-height:40px;
		font-size:16px;
	}
	.ThinkTank .name-4{
		text-align:center;
		line-height:40px;
		font-size:16px;
		margin-top:-3px;

	}
	.ThinkTank .pic-1{
		position:relative;
	}
	.ThinkTank .model{
		left:15px;
		color:white;
		line-height:410px;
		text-align:center;
		position:absolute;
		width:300px;
		height:410px;
		background:rgba(0,0,0,0.5);
		 display:none; 
	}
	.ThinkTank .pic-1:hover .model{
		display:block;
		cursor:pointer;
	}
	.ThinkTank .model-1{
		color:white;
		line-height:410px;
		text-align:center;
		position:absolute;
		width:300px;
		height:410px;
		background:rgba(0,0,0,0.5);
		display:none;
	}
	.ThinkTank .pic-2:hover .model-1{
		display:block;
		cursor:pointer;
	}
	.ThinkTank .model-3{
		color:white;
		line-height:410px;
		text-align:center;
		position:absolute;
		width:300px;
		height:410px;
		background:rgba(0,0,0,0.5);
		display:none;
	}
	.ThinkTank .pic-3:hover .model-3{
		display:block;
		cursor:pointer;
	}
	.ThinkTank .model-4{
		color:white;
		line-height:410px;
		text-align:center;
		position:absolute;
		width:300px;
		height:410px;
		background:rgba(0,0,0,0.5);
		display:none;

	}
	.ThinkTank .pic-4:hover .model-4{
		display:block;
		cursor:pointer;
	}
	.ThinkTank .morethan{
		text-align:center;
		font-size:25px;
		color:#156fb8;
		margin-top:500px;
		text-decoration:underline;
	}
	.ThinkTank .help{
		text-align:center;
		font-size:40px;
		color:#333333;
		padding-top:30px;
	}
	.ThinkTank .toget{
		text-align:center;
		color:black;
	}
	.ThinkTank .boot{
		width:1240px;
		height:600px;
		background-color: white;
		margin:0 auto;

	}
	
	.ThinkTank .look{
		text-align:center;
		font-size:25px;
		color:#156fb8;
		text-decoration:underline;
		margin-bottom:2em;

	}
	
	
</style>