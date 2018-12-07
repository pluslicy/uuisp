<!--专家详细页面-->
<template>
  <div class="thinkTankContent">
    <div  class="top-pic">
    	<div class="top-subnav">
    	<ul>
    		<li @click="changeMain">首页></li>
    		<li @click="changeOne">智库></li>
    		<li>专家详情></li>
    	</ul>
    	</div><br>
    	<div class="top-pic-1">
    		<img style="width:950px;height:200px" src="https://www.maikeji.cn/images/bg-header-expert.jpg" alt="">
    		<div class="top-pic-2">
    			<img style="width:150px;height:150px;border-radius:50%" src="https://res4.maikeji.cn/FlcdTlvZyfwZe8gLMBqMPwTagWoa" alt="">
    		</div>
    	</div><br>
    	<br>
    	<br>
    	<br>
    	<div class="talent">
    		<ul>
    			<li style="color:#333333;font-size:20px;"><b>钱峰</b></li>
    			<li style="font-size:16px;">研究员&nbsp;&nbsp;|&nbsp;&nbsp;上海交通大学</li>
    		</ul>
    	</div><br>
    	<div class="wenzhang">
    		<ul>
    			<li style="font-size:18px">概况</li>
    			<li style="font-size:14px">实验室简要介绍</li>
    			<li style="font-size:18px">代表成果</li>
    			<li style="font-size:14px">突出研究成果</li>
    			<li style="font-size:18px">教学工作</li>
    			<li style="font-size:14px">本科生：《微生物学与免疫学》</li>
    			<li style="font-size:14px">研究生：《免疫药理学》</li>
    		</ul>
    	</div><br>
    	<div class="place">
    		<ul>
    			<li style="font-size:18px">研究领域</li>
    			<li>（1）巨噬细胞和嗜中性粒细胞活化的分子机制与新型药物靶标。</li>
    			<li>（2）细菌感染、哮喘、肺纤维化等呼吸性疾病发病机理与分子机制。</li>
    			<li>（3）恶性肿瘤发生发展的病理分子机制与药物靶标。</li>
    			<li>（4）新型药物筛选体系建立与高通量药物筛选。</li>
    		</ul>
    	</div><br>
    	<div class="thing">
    		<ul>
    			<li style="font-size:18px">大事记</li>
    			<li>（1）巨噬细胞和嗜中性粒细胞活化的分子机制与新型药物靶标。</li>
    			<li>（2）细菌感染、哮喘、肺纤维化等呼吸性疾病发病机理与分子机制。</li>
    			<li>（3）恶性肿瘤发生发展的病理分子机制与药物靶标。</li>
    			<li>（4）新型药物筛选体系建立与高通量药物筛选。</li>
    		</ul>
    	</div><br>
    	<div class="lunwen">
    		<ul>
    			<li style="font-size:18px">论文</li>
    			<li>1 Role for platelet glycoprotein Ib-IX and effects of its inhibition in endotoxemia-induced thrombosis, thrombocytopenia, and mortality.Hong Yin, Alesander Zakharov, Weidong Xu, Adam Corken, Alexander Zakharov, Feng Qian, Sasha Pavlovic, Alekasandar Krbanjevic, Alexander Lyubimov, Zaijie J. Wang, Xiaoping Du.Arterioscler Thromb Vasc Biol.</li><br>
    			<li>2 A critical role for the guanine nucleotide exchange factor P-Rex1 in platelet secretion and aggregation.Feng Qian, Guy C. Le Breton, Jia Chen, Jing Deng, John W. Christman, Dianqing Wu, Richard D. Ye.Arterioscler Thromb Vasc Biol.</li><br>
    			<li>3 MAP Kinase Phosphatase 5 protests against sepsis-induced acute lung injury.Feng Qian*, Jing Deng, Benjamin N. Gantner, Chen Dong, John W. Christman, Richard D Ye..American Journal of Physiology-Lung Cellular and Molecular Physiology.</li><br>
    			<li>4 The Akt1 isoform is required for optimal IFN-b transcription through direct phosphorylation of b-catenin.Benjamin N Gantner, Huali Jin, Feng Qian, Nissim Hay, Bin He, Richard D Ye.J Immunol.</li><br>
    			<li>5 Protective role of reactive oxygen species in endotoxin-induced lung inflammation through modulation of IL-10 expression.Jing Deng, Xuerong Wang, Feng Qian, Stephen M. Vogel, Lei Xiao, Ravi Ranjan, Hyesuk Park, Manjula Karpurapu, Richard D. Ye, Gye Young Park, John W. Christman.J Immunol.</li><br>
    			<li>6 A critical role for P-Rex1 in endothelial junction disruption and vascular hyper-permeability.Ram Naikawadi, Ni Cheng, Stephen M. Vogel, Feng Qian, Dianqing Wu, Asrar B. Malik, Richard D Ye.Circulation Research.</li><br>
    			<li>7 TRPM2 regulation of membrane potential modulates NADPH oxidase-derived ROS production in phagocytes.Anke Di, Xiao-Pei Gao, Feng Qian, Takeshi Kawamura, Jin Han, Claudie Hecquet, Richard D. Ye, Stephen M. Vogel, Asrar B. Malik.Nature Immunology.</li><br>
    			<li>8 Notch-1 signaling facilitates surviving expression in human non-small cell lung cancer cells.Yuqing Chen, Dianming Li, Hongli Liu, Huanbai Xu, Honghua Zheng, Feng Qian, Wei Li, Chengling Zhao, Zhenhua Wang, Xiaojing Wang.Cancer Biol Ther.</li><br>
    			<li>9 Polymerization of MIP-1 chemokine (CCL3 and CCL4) and clearance of MIP-1 by insulin-degrading enzyme.Min Ren, Qing Guo, Liang Guo, Martin Lenz, Feng Qian, Rory R. Koenen, Hua Xu, Alexander B. Schilling, Christian Weber, Richard D. Ye, Aaron R. Dinner, Wei-Jen Tang.EMBO J.</li><br>
    			<li>10 A non-redundant role for MKP5 inlimiting ROS production and preventing LPS-induced vascular injury.Feng Qian, Jing Deng, Ni Cheng, Emily J. Welch, Yongliang Zhang, Asrar B. Malik, Richard A. Flavell, Chen Dong, Richard D. Ye.EMBO J.</li><br>
    			<li>11 Phosphatase of regenerating liver-3 localizes to cyto-membrane and is required for B16F1 melanoma cell metastasis in vitro and in vivo.Ran Song, Feng Qian, Yu-Pei Li, Xia Sheng, Shao-Xian Cao, Qiang Xu.PLoS ONE.</li><br>
    			<li>12 PRL-3 siRNA inhibits the metastasis of B16-BL6 mouse melanoma cells in vitro and in vivo.Feng Qian, Yu-Pei Li, Xia Sheng, Zi-Chao Zhang, Ran Song, Wei Dong, Shao-Xian Cao, Zi-Chun Hua, Qiang Xu.Mol. Med.</li><br>
    			<li>13 Identification of a new metabolite of Astilbin,3’-O-Methylastilbin, and its immunosuppressive activity against contact dermatitis.Jianming Guo, Feng Qian, Jianxin Li, Qiang Xu, Ting Chen.Chinical Chemistry.</li><br>
    			<li>14 Nitric oxide inhibits T cell adhesion and migration through down-regulating β1 integrin expression in immunological liver injured mice.Yang Sun, Jianli Liu, Feng Qian, Qiang Xu.Intl. Immunopharmacol.</li><br>
    			<li>15 Interaction between integrin α5 and fibronectin is required for metastasis of B16F10 melanoma cells.Feng Qian, Zi-Chao Zhang, Xue-Feng Wu, Yu-Pei Li, Qiang Xu.Biochem. Biophys. Res. Commun.</li>
    		</ul>
    	</div><br><br>
		<div class="an">
			<ul>
				<li>新型药物</li>
				<li>呼吸性疾病发病机理与分子机制</li>
				<li>高同量药物</li>
			</ul>
		</div>
    </div>
    <div class="pageone">
    	<div style="padding-left: 15px;font-size:16px;margin-top:10px" class="server">
    		<b>专家推荐服务</b>
    	</div>
    	<div class="nide">
    		10000+深度合作专家 提供专业咨询
    	</div>
    	
    		<input class="insert-1" type="text" value="您的姓名">
    	
    	
    		<input class="insert-2"  type="text" value="  +86 ^">
    		<input class="insert-3"  type="text" value="请输入你的手机号">
    	
    	
    		<input class="insert-4"  type="text" value="请输入你的验证码">
    		<div class="test">
    			获取验证码
    		</div>
    		<input class="insert-5" type="text" value="请描述你的需求">	
    	
    	
    	<div class="telep">
    		帮我联系
    	</div><br>
    	<div class="see">
    		<ul>
    			<li style="font-size:20px;color:#1f86ed;font-weight:bolder;">相关专家</li>
    			<li style="color:#1f86ed">查看更多></li>
    		</ul>
    	</div><br><br>
    	<div class="zhuangjia-list-1">
    		<div class="number">
    			1
    		</div>
    		<div class="twtw">
    			<img style="width:65px;height:65px;border-radius:50%" src="https://res4.maikeji.cn/FkaZPt9VwXX9zk5soF9Kd8f7RQOn" alt="">
    		</div>
    	</div><br>
    	<div class="loaders">
    		<ul>
    			<li>朱英国</li>
    			<li>教授|武汉大学</li>
    		</ul>
    	</div><br>
    	<div class="loaders-1">
			<ul>
				<li>水稻育种...</li>
				<li>雄性不育...</li>
			</ul>
    	</div>
    	<div class="loaders-3">
    		2
    	</div>
    	<div class="loaders-4">
    		<img style="width:65px;height:65px;border-radius:50%"  src="https://res4.maikeji.cn/FmVPEqzp9_7jBZpBDt4to1jI3EEr" alt="">
    	</div>
    	<div class="loaders-2">
    		<ul>
    			<li>金良</li>
    			<li>高级工程师</li>
    			<li>重庆大学</li>
    		</ul>
    	</div>
    	<div class="loaders-5">
			<ul>
				<li>植物遗传...</li>
				<li>遗传发育...</li>
			</ul>
    	</div>
    	<div class="easy">
    		3
    	</div>
    	<div class="easy-1">
    		<img style="width:65px;height:65px;border-radius:50%"  src="https://res4.maikeji.cn/FtGkY3HVJFAb6R6PK4tUzMZEd7Ai" alt="">
    	</div>
    	<div class="easy-2">
    		<ul>
    			<li>岳邦毅</li>
    			
    		</ul>
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
			changeOne(){
				this.$router.push('/thinkTank')
			},
			changeMain(){
				this.$router.push('/')
			}
		}
	}
</script>
<style>
.thinkTankContent{
	width:1240px;
	
	position: relative;
	margin:0 auto;

}
.top-pic{
	width:950px;

}
	.top-subnav>ul>li{
		display: inline-block;
		margin-top:1.2em;
		
	}
	.top-subnav>ul>li{
		cursor:pointer;
	}
	.top-pic-1{
		width:950px;
		height:200px;
		background-color:white;
		position:relative;
	}
	.top-pic-2{
		top:120px;
		left:420px;
		position: absolute;
		width:150px;
		height:150px;
		background-color: teal;
		border-radius: 50%
	}
	.talent{
		text-align:center;
	}
	.wenzhang{
		margin-left: 150px;
		line-height: 30px;
	}
	.place{
		margin-left: 150px;
		line-height: 30px;
	}
	.thing{
		margin-left: 150px;
		line-height: 30px;
	}
	.lunwen{
		margin-left: 150px;
		line-height: 20px;

	}
	.lunwen>ul>li{
		font-size:16px;
	}
	.an{
		color:#627fc1;
		text-align: center;
		margin-bottom:1.5em;
	}
	.an>ul>li{
		display:inline-block;
		width:200px;
		border:1px solid #1f86ed;
		border-radius: 5px;
		padding-top:5px;
		padding-bottom:5px;
		background-color: rgb(244, 248, 253);

	}
	.an>ul>li:hover{
		cursor:pointer; 
		background-color:;
	}
	.pageone{
		position:absolute;
		
		width:290px;
		height:2055px;
		right:0;
		top:55px;
		background-color: white
	}

	.insert-1{
		position:absolute;
		width:240px;
		height:30px;
		left:10px;
		top:70px;
		color: rgb(204, 204, 204);
		
	}
	.insert-2{
		position:absolute;
		width:60px;
		height:30px;
		left:10px;
		top:120px;
		color:#555555;
	}
	.insert-3{
		position:absolute;
		width:170px;
		height:30px;
		left:80px;
		top:120px;
		color: rgb(204, 204, 204);
	}
	.insert-4{
		position:absolute;
		width:170px;
		height:30px;
		left:10px;
		top:170px;
		color: rgb(204, 204, 204);
		
	}
	.test{
		text-align:center;
		position:absolute;
		right:18px;
		top:170px;
		background-color:#2e96e6;
		padding:8px;
		color:white;
		
	}
	.insert-5{
		position:absolute;
		width:260px;
		height:130px;
		left:10px;
		top:230px;
		color: rgb(204, 204, 204);
		
	}
	.nide{
		margin-top:10px;
		margin-left:15px;
		color:#99b3cd;
		
	}
	.telep{
		position:absolute;
		line-height:50px;
		text-align:center;
		color:white;
		left:15px;
		background-color:#2e96e6;
		height:50px;
		width:260px;
		top:380px;
		border-radius:5px;
	}
	.telep:hover{
		cursor:pointer;
	}
	.see{
		text-align:center;
	}
	.see>ul>li{
		float:left;
		width:140px;
		margin-top:380px;
	} 
	.see>ul>li:hover{
		cursor:pointer; 
	}
	
	.number{
		position:absolute;
		width:30px;
		height:30px;
		background-color:#80bcf6;
		border-radius:50%;
		top:530px;
		left:30px;
		text-align:center;
		color:white;
		line-height: 30px;
		font-size:14px;
		
	}
	.twtw{
		width:65px;
		height:65px;
		background-color:pink;
		border-radius:50%;
		left:80px;
		top:510px;
		position:absolute;
	}
	.loaders{
		position:absolute;
		left:170px;
		top:520px;
		line-height:25px;
		color:#80bcf6;
	}
	.loaders:hover{
		cursor:pointer;
	}
	.loaders-1{
		text-align:center;
		position:absolute;
		top:610px;
		left:10px;

	}
	.loaders-1>ul>li{
		display:inline-block;
		width:130px;
		border:1px solid #80bcf6;
		background-color:#f4f8fd;
		border-radius:5px;
	}
	.loaders-1>ul>li:hover{
		cursor:pointer;
	}
	.loaders-2{
		text-align:center;
		position:absolute;
		left:170px;
		top:660px;
		line-height:25px;
		color:#80bcf6;
	} 
	.loaders-2>ul>li:hover{
		cursor:pointer;
	}
	.loaders-3{
		position: absolute;
		width:30px;
		height:30px;
		background-color:#80bcf6;
		border-radius:50%;
		
		top:690px;
		left:30px;
		text-align:center;
		color:white;
		line-height: 30px;
		font-size:14px;
	}
	.loaders-4{
		width:65px;
		height:65px;
		background-color:pink;
		border-radius:50%;
		left:80px;
		top:670px;
		position:absolute;


	}
	.loaders-5{
		position:absolute;
		text-align:center;
		top:730px;
	}
	.loaders-5>ul>li{
		display:inline-block;
		width:120px;
		border:1px solid #80bcf6;
		background-color:#f4f8fd;
		border-radius:5px;
		margin-left:10px;
		margin-top:30px;
	}
	.loaders-5>ul>li:hover{
		cursor:pointer;
	}
	.easy{
		width:30px;
		height:30px;
		background-color:#80bcf6;
		border-radius:50%;
		position:absolute;
		top:820px;
		left:30px;
		text-align:center;
		color:white;
		line-height: 30px;
		font-size:14px;
	}
	.easy-1{
		width:65px;
		height:65px;
		background-color:pink;
		border-radius:50%;
		left:80px;
		top:800px;
		position:absolute;

	}
	.easy-2{
		text-align:center;
		position:absolute;
		left:170px;
		top:820px;
		line-height:25px;
		color:#80bcf6;
	}
	.easy-2>ul>li:hover{
		cursor:pointer;
	}
</style>
