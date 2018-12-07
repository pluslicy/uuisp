<!-- 首页 -->
<template>
	<div class="technology">
		<div class="insert">
				<h1 class="insert-text">汇聚全球技术 助力企业升级</h1>
				<div class="insert-input">
					<input type="text" placeholder="请输入想要的技术项目">
					<div class="button">搜   索</div>
				</div>
			</div>
		<div class="technology-warp">
			
			<div class="technology-first">
				<div class="technology-first-carousel">
					<ul>
						<li>
							<div class="tfc-technology">
		    				<div>
		    					<img src="https://res4.maikeji.cn/FgIhwvNzGxNJ5mEurIsvQw7euUBu" alt="">
		    				</div>
		    				<p>可多次脱模的高性价比橡胶轮胎脱模剂</p>
		    			</div>
						</li>
						<li>
							<div class="tfc-technology">
		    				<div>
		    					<img src="https://res4.maikeji.cn/FnjvrgRCSCRAWmouqdh6VPi2fALq" alt="">
		    				</div>
		    				<p>重金属污染耕地修复用重金属稳定剂</p>
		    			</div>
						</li>
						<li>
							<div class="tfc-technology">
		    				<div>
		    					<img src="https://res4.maikeji.cn/FvxZYg8M3sHP9W1muYdpOdd54d2X" alt="">
		    				</div>
		    				<p>有机硅助剂－流平剂</p>
		    			</div>
						</li>
					</ul>
				</div>
				<div class="screen">
					<ul class="territory">
						<li>所属领域</li>
						<li>不限</li>
						<li>能源电力</li>
						<li>环境工程</li>
						<li>化学化工</li>
						<li>科技材料</li>
						<li>生农医药</li>
						<li>机械电子</li>
					</ul>
					<ul class="territory">
						<li>应用行业</li>
						<li>不限</li>
						<li>环保行业</li>
						<li>化工新材料行业</li>
						<li>IT|通信|电子|互联网</li>
						<li>生产|加工|制造</li>
						<li>能源|电力</li>
						<li>其它</li>
					</ul>
					<ul class="territory">
						<li>成熟度</li>
						<li>不限</li>
						<li>小试</li>
						<li>生试</li>
						<li>中试</li>
					</ul>
					<ul class="territory">
						<li>来源地</li>
						<li>不限</li>
						<li>中国</li>
						<li>中国(香港)</li>
						<li>中国(台湾)</li>
						<li>美国</li>
						<li>德国</li>
						<li>英国</li>
						<li>日本</li>
						<li>俄罗斯</li>
					</ul>
					<ul class="territory">
						<li>合作标签</li>
						<li>不限</li>
						<li>股权融资合作</li>
						<li>市场渠道合作</li>
						<li>落地孵化合作</li>
					</ul>
				</div>
			</div>
			<div class="technology-content ">
				<div class="technology-nav">
					<div>默认</div>
					<span class="last-line"></span>

					<div>关注度&nbsp;<i class="fa fa-angle-down"></i></div>
					<div>发布时间&nbsp;<i class="fa fa-angle-down"></i></div>
				</div>
				<div class="technology-body">
					<div class="product" v-for="item in product" @click="toTechnologyContant">
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
					<div class="product-paging">
						<ul>
							<li v-for="item in 7">{{item}}</li>
							<li>...</li>
							<li>下一页</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="technology-recommend">
				<div class="recommend-title">迈科技推荐</div>
				<div class="recommend-product">
					<div class="product" v-for="item in recommendProduct" @click="toTechnologyContant">
						<div class="recommend-logo">推荐技术</div>
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
			<div class="related-service">
				<div class="service-title">相关服务推荐</div>
				<div class="service-content">
					<h1>寻找技术资源，实现创新升级</h1>
					<p>用我的专业，换你省心省力</p>
					<div class="find-btn">帮我找</div>
					<div class="service-img">
						<img src="https://maikeji.cn/images/recommend/technologies-list-image.jpg" alt="">
					</div>
					<div class="service-msg">可多次脱模的高性价比橡胶轮胎脱模剂</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				product:[{
        	image:"https://res4.maikeji.cn/FgIhwvNzGxNJ5mEurIsvQw7euUBu",
        	title:"可多次脱模的高性价比橡胶轮胎脱模剂",
        	description:"脱模剂是一种在轮胎硫化时介于胶囊和轮胎之间的功能性物质，起到润滑、隔...",
        	site:"中国",
        	stage:"生试阶段",
        	use:"通用|工程塑料、天然|合成橡胶、表面处理、功能材料",
        	readtime:12,
        	infotime:5
        },{
        	image:"https://res4.maikeji.cn/FnjvrgRCSCRAWmouqdh6VPi2fALq",
        	title:"有机硅助剂－流平剂",
        	description:"本技术方案是国家有机硅重点实验室研发团队提供，产品基本能达到德国某公...",
        	site:"中国",
        	stage:"生试阶段",
        	use:"树脂",
        	readtime:22,
        	infotime:12
        },{
        	image:"https://res4.maikeji.cn/Fj6oIUyEekYqDgWLqoPe6pt8VmJn",
        	title:"食品中违禁物残留检测",
        	description:"国际上食品安全最权威的仲裁测定方法，产品价格是进口的25%左右，打破...",
        	site:"中国",
        	stage:"生试阶段",
        	use:"仪器仪表及工业自动化",
        	readtime:15,
        	infotime:2
        },{
        	image:"https://res4.maikeji.cn/FvxZYg8M3sHP9W1muYdpOdd54d2X",
        	title:"绿色环保低成本的LED光催化有机合成技术",
        	description:"LED光催化合成技术，是仿植物的光合作用来合成有机产品，以极低的成本...",
        	site:"中国",
        	stage:"中试阶段",
        	use:"新型高分子材料、功能材料、医药|生物工程、光学",
        	readtime:42,
        	infotime:14
        },{
        	image:"https://res4.maikeji.cn/Fk-6BgdAGybk136VAE44vrwbVZaS",
        	title:"全自动轮毂打磨生产线",
        	description:null,
        	site:"中国",
        	stage:"中试阶段",
        	use:"大型设备|机电设备|重工业、仪器仪表及工业自动化、加工制造（原料加工|模具）",
        	readtime:4029,
        	infotime:14
        },{
        	image:"https://res4.maikeji.cn/FmQQe-ZADjIlc3uGAoVScXxrJdlK",
        	title:"欠驱动三指手爪系统",
        	description:null,
        	site:"中国",
        	stage:"中试阶段",
        	use:"仪器仪表及工业自动化、大型设备|机电设备|重工业",
        	readtime:4029,
        	infotime:14
        },{
        	image:"https://res4.maikeji.cn/FqZKIIPTWXB46zq3LFCuXQ2Fe5Zx",
        	title:"可节约空间的多叶光栅压电控制定位和驱动技术",
        	description:null,
        	site:"德国",
        	stage:"中试阶段",
        	use:"医疗|医疗设备|器械 ",
        	readtime:4029,
        	infotime:14
        },{
        	image:"https://res4.maikeji.cn/Fk8LX5Ck9zkV1j8PfrstHcy8vO0C",
        	title:"运用传统中医药药食同源理论开发的女性“颜值”药食同源产品",
        	description:null,
        	site:"中国",
        	stage:"生试阶段",
        	use:"医药|生物工程 ",
        	readtime:4029,
        	infotime:14
        }],
        recommendProduct:[{
        	image:"https://res4.maikeji.cn/FgIhwvNzGxNJ5mEurIsvQw7euUBu",
        	title:"可多次脱模的高性价比橡胶轮胎脱模剂",
        	description:"脱模剂是一种在轮胎硫化时介于胶囊和轮胎之间的功能性物质，起到润滑、隔...",
        	site:"中国",
        	stage:"生试阶段",
        	use:"通用|工程塑料、天然|合成橡胶、表面处理、功能材料",
        	readtime:12,
        	infotime:5
        },{
        	image:"https://res4.maikeji.cn/FnjvrgRCSCRAWmouqdh6VPi2fALq",
        	title:"有机硅助剂－流平剂",
        	description:"本技术方案是国家有机硅重点实验室研发团队提供，产品基本能达到德国某公...",
        	site:"中国",
        	stage:"生试阶段",
        	use:"树脂",
        	readtime:22,
        	infotime:12
        },{
        	image:"https://res4.maikeji.cn/Fj6oIUyEekYqDgWLqoPe6pt8VmJn",
        	title:"食品中违禁物残留检测",
        	description:"国际上食品安全最权威的仲裁测定方法，产品价格是进口的25%左右，打破...",
        	site:"中国",
        	stage:"生试阶段",
        	use:"仪器仪表及工业自动化",
        	readtime:15,
        	infotime:2
        }]
			}
		},
		methods:{
			// 跳转详情页
			toTechnologyContant(){
    		this.$router.push('/technology/content')
    	},
		}
	}
</script>
<style>
	ul{
		list-style: none;
	}
	div,span,li,p{
		box-sizing: border-box;
	}
	.technology{
		position: relative;
		background-color: #fff;
	}
	.technology .technology-warp{
		width: 1240px;
		margin:0 auto;
	}
	.technology .insert{
		position: absolute;
		z-index: 100;
		top:-350px;
		width: 100%;
		text-align: center;
		/*background-color: #ccc;*/
		padding: 1em	
	}
	.technology .insert-text{
		color: #fff;
	}
	.technology .insert-input{
		box-sizing: border-box;
		/*padding: 0px 10px;*/
		margin:3em auto;
		width: 900px;
		height: 50px;
	}
	.technology .insert-input > input{
		box-sizing: border-box;
		padding: 0 2em;
		margin:0;
		border: none;
		width: 800px;
		height: 50px;
		line-height: 50px;
		font-size: 18px;
	}
	.technology .insert-input > .button{
		cursor:pointer;
		float: right;
		background-color:#156FB8;
		color: #fff;
		font-size: 18px;
		margin:0;
		height: 50px;
		line-height: 50px;
		width: 100px;
		text-align: center;
	}
	.technology .insert-input > .button:hover{
		background-color: #286091;
	}
	.technology .technology-first{
		position: relative;
		margin-top: 2em;
	}
	.technology .technology-first >.technology-first-carousel{
		position: absolute;
		right: 0;
		top: 0;
		width: 260px; 
		height: 250px;
		overflow: hidden;
	}
	.technology .technology-first >.technology-first-carousel li{
		width: 260px; 
		height: 250px;		
	}
	.technology .technology-first li .tfc-technology div{
		width: 260px;
		height: 140px;
	}
	.technology .technology-first li .tfc-technology div img{
		width: 260px;
		height: 140px;
	}
	.technology .technology-first li .tfc-technology p{
		padding: 1em 0 1.5em 0;
		border: 1px solid #eeeeee;
		border-top: none;
		text-align: center;
	}
	.technology .technology-first >.technology-first-carousel li .tfc-technology:hover{
		cursor: pointer;
		color: #1f86ed;
		font-weight: bolder;
		box-shadow: 0 0 5px #eee;
	}
/*轮播*/
	.technology .technology-first >.technology-first-carousel ul{
		position: absolute;
		top: 0;
		right: 0;
		width: 260px; 
		height: 750px;
		/*轮播*/
		animation-name:technology-first-carousel;
		animation-duration:6s;
		animation-fill-mode: both;
		animation-direction: normal;
		animation-iteration-count: infinite;
		animation-timing-function: steps(3);
	}
/*轮播结束*/
	.technology .screen{
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		padding:15px 0 15px 30px ;
		height:300px;
		width:850px;
		background-color: #FAFAFA;
		border: 1px solid #efefef;
	}
	.technology .screen > ul > li{
		cursor:pointer;
		float: left;
		min-width: 4em;
		height: 2em;
		line-height: 2em;
		text-align: left;
		margin-left:1em;
	}
	.technology .screen > ul > li:first-child{
		cursor:auto;
		margin-left:0;
		font-weight: bolder;
		color: #333;
	}
	.technology .screen > ul > li:nth-child(2){
		text-align: center;
		width:20px;
		border: 1px solid #4DAFED;
		background-color: #E3F1FF;
		color:#0A539A
	}
	.technology .technology-nav{
		position: relative;
		margin-top: 1em;
		padding: 1em 1em 0 1em;
		/*border-bottom: 1px solid #efefef;*/
		overflow:hidden;
	}
	.technology .technology-nav > div{
		cursor:pointer;
		float: left;
		width: 100px;
		height: 3em;
		line-height: 3em;
		text-align: center;
		font-weight: bolder;
		border:1px solid #efefef;
		border-right:none;
	}
	.technology .technology-nav > div:last-child{
		border-right: 1px solid #efefef;
	}
	.technology .technology-nav > div:hover{
		color: #1F86ED
	}
	.technology .technology-nav > div:first-child{
		border-top:2px solid #1F86ED;
		border-bottom:none;
		color:#1F86ED;
	}
	.technology .technology-nav > span.last-line{
		display: inline-block;
		position: absolute;
		bottom: 0;
		left: 314px;
		right:14px;
		height: 1px;
		background-color: #efefef
	}
	.technology .technology-body{
		position: relative;
		display: flex;
		flex-wrap: wrap;
		justify-content:left;
		margin-bottom: 2em;
		padding: 0 2em 7em 2em;
	}
	.technology .shade{
		position: absolute;
		background:rgba(0,0,0,0.6);
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		z-index: 1;
		padding:80px 20px 0 20px;
		display: none;
	}
	.technology .shade .use,.shade .read{
		color: #fff;
		font-weight: bolder;
		font-size: 16px;
		height:100px;
	}
	.technology .shade .read{
		display: flex;
		justify-content: space-between;
	}
	.technology .shade .tel{
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
	.technology .product{
		position: relative;
		cursor: pointer;
		width: 280px;
		height: 315px;
		margin: 20px 1em 0 0;
		padding-bottom: 10px;
		border:1px solid #eee;
	}
	.technology .product img{
		width: 100%;
		height: 160px;
		margin-bottom: 10px;
	}
	.technology .product .wape{
		padding: 0 1em;
	}
	.technology .product h3{
		font-size: 20px;
		height: 55px;
		margin-bottom: 10px;
	}
	.technology .product:hover{
		box-shadow: 2px 2px 2px #efefef;
	}
	.technology .product:hover .shade{
		display: block;
	}
	.technology .product:hover h3{
		color: #1E87ED;
	}
	.technology .product-message{
		display: flex;
		justify-content: space-between;
		margin-top: 10px;
	}
	.technology .product-message > .site{
		position: absolute;
		bottom: 10px;
		left: 10px;
		font-size: 16px;
	}
	.technology .product-message > .stage{
		position: absolute;
		bottom: 10px;
		right: 10px;
		width: 64px;
		height: 24px;
		line-height: 24px;
		text-align: center;
		color: #1F86EF;
		background-color: #C6E8FE;
		border-radius: 5px;
	}
	.technology .product-paging{
		position: absolute;
		bottom: 0;
		right: 4em;
	}
	.technology .product-paging li{
		float: left;
		margin-right:1em;
		width: 3em;
		height: 3em;
		line-height: 3em;
		text-align: center;
		font-weight: bolder;
		font-size: 14px;
		border:2px solid #D6D6D6;
		color: #1F86ED;
	}
	.technology .product-paging li:last-child{
		width: 5em
	}
	.technology .product-paging li:first-child{
		color: #fff;
		background-color: #1F86ED;
		border: none;
	}
	.technology .product-paging li:first-child ~ li{
		cursor:pointer;
	}
	.technology .product-paging li:first-child ~ li:hover{
		background-color: #EFEFEF;
		color: #23527C
	}
	.technology .technology-recommend{
		position: relative;
		display: flex;
		flex-wrap: wrap;
		justify-content:left;
		margin-bottom: 2em;
		padding: 2em;
	}
	.technology .recommend-title{
		position: absolute;
		top: 0;
		left: 2em;
		width: 7em;
		text-align: center;
		color: #1f86ed;
		font-weight:bolder;
		font-size:16px;
		border-right: 5px solid #f7b52d;
		margin-bottom: 2em;
	}
	.technology .recommend-product{
		/*overflow: hidden;*/
		position: relative;
		display: flex;
		flex-wrap: wrap;
		justify-content:left;
	}
	.technology .recommend-logo{
		position: absolute;
		left: 1.5em;
		height: 4em;
		width: 4em;
		/*line-height: 4em;*/
		text-align: center;
		padding: .5em 1em;
		font-size: 16px;
		font-weight: bolder;
		background-color: rgba(211,95,0,0.8);
		color: #fff;
	}
	.technology .service-title{
		width: 9em;
		text-align: center;
		color: #1f86ed;
		font-weight:bolder;
		font-size:16px;
		border-right: 5px solid #f7b52d;
		margin-bottom: 2em;
	}
	.technology .service-content{
		position: relative;
		padding: 5em 175px 0 175px;
		height: 240px;
		background:url(https://maikeji.cn/images/recommend/technologies-list.gif);
	}
	.technology .service-content > h1{
		font-size: 36px;
		color: #fff;
	}
	.technology .service-content > p{
		margin-top: 10px;
		font-size: 24px;
		color: #fff;
	}
	.technology .service-content > div.find-btn{
		cursor: pointer;
		background-color: #ffd648;
		color: #333;
		font-size: 18px;
		font-weight: bolder;
		width: 6em;
		height: 2em;
		line-height: 2em;
		text-align: center;
		margin:1em 0;
		border-radius: 50px;
	}
	.technology .service-img{
		position: absolute;
		top:2em;
		right: 275px;
		width: 200px;
		height: 200px;
		background-color: #497fc1;
		padding: 5px;
		border-radius: 50%;

	}
	.technology .service-img > img{
		width: 190px;
		height: 190px;
		border-radius: 50%;
	}
	.technology .service-msg{
		position: absolute;
		top: 3em;
		right: 175px;
		width: 1em;
		line-height: 1.1em;
		font-size: 10px;
		color: #fff;
	}
	@keyframes technology-first-carousel{
			0%{
				top:0px;
			}
			100%{
				top:-750px;
			}
		}
</style>