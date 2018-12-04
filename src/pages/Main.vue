<!-- 首页 -->
<template>
	<div class="main">
		<div class="right_top_float">
			<div class="header">
				<!-- <el-menu :default-active="activeIndex" class="el-menu-demo">
					<el-menu-item index="1">热门技术</el-menu-item>
					<el-menu-item index="1">热门活动</el-menu-item>
					<el-menu-item index="1">热门资讯</el-menu-item>
				</el-menu> -->
					<a href=""><div>热门技术</div></a>
					<a href=""><div>热门活动</div></a>
					<a href=""><div>热门资讯</div></a>
			</div>
			<div class="contanter"></div>
			<div class="footer"></div>
		</div>
		<div class="message">
			<!-- <div class="text">
				<div class="text-icon">
					<i class="el-icon-bell"></i>
				</div>
			    <el-carousel height="50px" arrow="never" interval="2500">
			      <el-carousel-item v-for="item in 10" :key="item">
			        <span>{{ item }}</span>
			      </el-carousel-item>
			    </el-carousel>
			</div> -->
		</div>
		<div class="nav">
			<ul>
				<li v-for="item in nav">
					<div class="left">
						<div class="title">
							{{item.title}}
						</div>
						<p class="text">
							{{item.text}}
						</p>
					</div>
					<div class="right">
						<i class="fa fa-bars"></i>
					</div>
				</li>
			</ul>
		</div>
		<div class="content">
			<div class="head">
				<h1>汇聚全球技术 助力企业升级</h1>
				<p>2000+成熟技术项目正在推广中</p>
				<div class="content-nav">
					<ul>
						<li><a href="">化学化工</a><span>/</span></li>
						<li><a href="">能源电力</a><span>/</span></li>
						<li><a href="">环境工程</a><span>/</span></li>
						<li><a href="">材料科技</a><span>/</span></li>
						<li><a href="">生农医药</a><span>/</span></li>
						<li><a href="">机械电子</a><span>/</span></li>
						<li><a href="">全部></a></li>
					</ul>
				</div>
			</div>
			<div class="body-one">
					<div class="product" v-for="item in product">
						<div class="shade">
							<div class="tel">
								<i class="fa fa-phone"></i>&nbsp;联系技术方
							</div>
							<div class="use">
								适用于:{{item.use}}
							</div>
							<div class="read">
								<div class="readtime">浏览量:{{item.readtime}}</div>
								<div class="infotime">咨询量:{{item.infotime}}</div>
							</div>
						</div>
						<img :src="item.image" alt="">
						<div class="wape">
							<div class="presentation">
							<h3>{{item.title}}</h3>
							<p>{{item.description}}</p>
						</div>
						<div class="product-message">
							<div class="site">{{item.site}}</div>
							<div class="stage">{{item.stage}}</div>
						</div>
					</div>
						</div>
			</div>
		</div>
		<div class="content">
			<div class="head">
				<h1>行业顶尖专家 资深技术顾问</h1>
				<p>10000+合作技术方 更有全网专家信息可检索</p>
				<div class="content-nav">
					<ul>
						<li><a href="">医药科学</a><span>/</span></li>
						<li><a href="">化学化工</a><span>/</span></li>
						<li><a href="">工程技术</a><span>/</span></li>
						<li><a href="">农业科学</a></li>
					</ul>
				</div>
			</div>
			<div class="body-two">
			</div>
		</div>
		<div class="content">
			<div class="head">
				<h1>行业热门活动 技术交流盛会</h1>
				<div class="content-nav">
					<ul>
						<li><a href="">化学化工</a><span>/</span></li>
						<li><a href="">能源电力</a><span>/</span></li>
						<li><a href="">环境工程</a><span>/</span></li>
						<li><a href="">材料科技</a><span>/</span></li>
						<li><a href="">生农医药</a><span>/</span></li>
						<li><a href="">机械电子</a><span>/</span></li>
						<li><a href="">全部></a></li>
					</ul>
				</div>
			</div>
			<div class="body"></div>
		</div>
	</div>
</template>
<script>
  export default {
    data() {
      return {
        nav:[{
        	title:"找技术",
        	text:"2000+成熟技术项目",
        },{
        	title:"问专家",
        	text:"10000+深度合作专家",
        },{
        	title:"报活动",
        	text:"行业精英共同交流",
        },{
        	title:"学创新",
        	text:"探讨企业创新发展",
        }],
        product:[{
        	image:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543835761405&di=73b0def380ce7a1dd65b01fc09c4530d&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F0b7b02087bf40ad182fac5ab5a2c11dfa9ecce58.jpg",
        	title:"可多次脱模的高性价比橡胶轮胎脱模剂",
        	description:"脱模剂是一种在轮胎硫化时介于胶囊和轮胎之间的功能性物质，起到润滑、隔...",
        	site:"中国",
        	stage:"生试阶段",
        	use:"通用|工程塑料、天然|合成橡胶、表面处理、功能材料",
        	readtime:12,
        	infotime:5
        },{
        	image:"https://ss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=e6cb69522534349b6b066885f9eb1521/91ef76c6a7efce1b5ef04082a251f3deb58f659b.jpg",
        	title:"有机硅助剂－流平剂",
        	description:"本技术方案是国家有机硅重点实验室研发团队提供，产品基本能达到德国某公...",
        	site:"中国",
        	stage:"生试阶段",
        	use:"树脂",
        	readtime:22,
        	infotime:12
        },{
        	image:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543835816131&di=79e7fe01d09998f058f75e8011c4e719&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Fb999a9014c086e062550d0020f087bf40bd1cbfb.jpg",
        	title:"食品中违禁物残留检测",
        	description:"国际上食品安全最权威的仲裁测定方法，产品价格是进口的25%左右，打破...",
        	site:"中国",
        	stage:"生试阶段",
        	use:"仪器仪表及工业自动化",
        	readtime:15,
        	infotime:2
        },{
        	image:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543835853066&di=26a3fe3688b20557129c2d70b137a636&imgtype=0&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F8ad4b31c8701a18ba6e9c102932f07082838fe79.jpg",
        	title:"绿色环保低成本的LED光催化有机合成技术",
        	description:"LED光催化合成技术，是仿植物的光合作用来合成有机产品，以极低的成本...",
        	site:"中国",
        	stage:"中试阶段",
        	use:"新型高分子材料、功能材料、医药|生物工程、光学",
        	readtime:42,
        	infotime:14
        }]
      };
    },
    methods: {
     
    }
  }
</script>
<style>
	ul{
		list-style: none;
	}
	a{
		color: #666;
		text-decoration: none;
	}
	.right_top_float{
		padding: 0 15px;
		width: 340px;
		height: 280px;
		background-color:rgba(0,0,0,80%);
	}
	.right_top_float > .header{
		display: flex;
		justify-content: space-between;
		height: 49px;
		border-bottom: 1px solid #fff;
	}

	.right_top_float > .header div{
		color: #fff;
		height: 49px;
		line-height: 50px;
		width: 70px;
	}
	.message{
		min-width: 1240px;
		height: 50px;
		background-color:#808080;
	}
	.message > .text{
		position: relative;
		padding:0 20px;
		height: 50px;
		width: 450px;
		margin:0 auto;
	}
	.message > .text span{
		display: inline-block;
		color: #fff;
		height: 50px;
		line-height: 50px;
	}
	.message > .text ul{
		display: none;
	}
	.message > .text .text-icon{
		color: #fff;
		position: absolute;
		width:20px;
		height: 50px;
		line-height: 50px;
		font-size: 20px;
		left: -20px;
	}
	.nav{
		box-sizing: border-box;
		min-width: 1240px;
		height: 150px;
		background-color: #F5F5F5;
		padding: 20px 0;
	}
	.nav > ul{
		display: flex;
		justify-content: space-around;
		width: 1240px;
		height: 110px;
		margin: 0 auto;
	}
	.nav > ul > li{
		box-sizing: border-box;
		width:240px;
		background-color: #fff;
		cursor: pointer;
	}
	.nav > ul > li:hover{
		box-shadow: 0px 0px 2px #333;
	}
	.nav .left{
		float: left;
		height: 60px;
		width: 140px;
		margin: 25px 0 0 20px;
	}
	.nav .left > div{
		font-size: 20px;
		font-weight: bold;
		margin-bottom: 5px;
	}
	.nav .right{
		box-sizing: border-box;
		height: 60px;
		line-height: 50px;
		width: 60px;
		margin:25px 0 0 170px;
	}
	.nav .right > i{
		font-size: 48px;
		color: #4BDCC6;
	}
	.content{
		padding-top: 80px;
	}
	.content > .head{
		text-align: center;	
	}
	.content > .head h1{
		margin-bottom: 20px;
	}
	.content-nav{
		margin-top: 30px;
	}
	.content-nav ul{
		display: flex;
		justify-content: center;

	}
	.content-nav span{
		margin:0 .5em;
	}
	.body-one{
		display: flex;
		justify-content: space-around;
	}
	.shade{
		position: absolute;
		background-color: #333;
		background:rgba(0,0,0,0.6);
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		padding:80px 20px 0 20px;
		display: none;
	}
	.shade .use,.shade .read{
		color: #fff;
		font-weight: bolder;
		font-size: 16px;
		height:100px;
	}
	.shade .read{
		display: flex;
		justify-content: space-between;
	}
	.shade .tel{
		position: absolute;
		right: 0;
		left: 0;
		bottom: 0;
		height: 80px;
		line-height: 80px;
		text-align: center;
		color: #F1B74C;
		font-size: 20px;
		border-top:2px solid #fff;
	}
	.product{
		position: relative;
		cursor: pointer;
		width: 280px;
		height: 315px;
		margin-top: 20px;
		padding-bottom: 10px;
		border:1px solid #ccc;
	}
	.product img{
		width: 280px;
		height: 160px;
		margin-bottom: 10px;
	}
	.product .wape{
		padding: 0 1em;
	}
	.product h3{
		font-size: 20px;
		height: 55px;
		margin-bottom: 10px;
	}
	.product:hover{
		box-shadow: 2px 2px 2px #ccc;
	}
	.product:hover .shade{
		display: block;
	}
	.product:hover h3{
		color: #1E87ED;
	}
	.product-message{
		display: flex;
		justify-content: space-between;
		margin-top: 10px;
	}
	.product-message > .site{
		font-size: 16px;
	}
	.product-message > .stage{
		width: 64px;
		height: 24px;
		line-height: 24px;
		text-align: center;
		color: #1F86EF;
		background-color: #C6E8FE;
		border-radius: 5px;
	}

</style>