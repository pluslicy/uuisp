<!--资讯详细页面-->
<template>
  <div id="infoPage" class="messageContent holy-grail">
      <div class="item-catalog-container">
      	    <div class="catalog-item" v-for="h in head" :key="h">
      	   	  <a href="/" class="nuxt-link-active">{{h}}</a>
      	   	  <span class="divider">&gt;</span>
      	   </div> 
      </div>
      <table class="side-layout-container">
      	  <tbody>
      	  	 <tr>
      	  	 	<td class="side-left">
      	  	 		<h2 class="title">{{title}}</h2>
      	  	 		<p class="preamble">{{preamble}}</p>
      	  	 		<div class="m-cover" :style="infoImg"></div>
      	  	 		<div class="details fr-view">
      	  	 			<p>徐州某环保科技有限公司主营水性涂料，为了谋求新发展，公司提出了拓展产品线和业务的的要求。公司负责人梁总也为此一直寻找优质的技术项目，最后通过搜索找到了迈科技。</p>
      	  	 			<p>maikeji.cn上汇聚大量的技术信息资源，梁总根据自身企业所在领域进行筛选后，很快找到了自己“心仪”的项目——
      	  	 			   <a href="https://www.maikeji.cn/technologies/5abf0674263ee31e66393603" rel="noopener noreferrer" target="_blank">
	      	  	 			   <span style="color: rgb(184, 49, 47);"> <strong>“低成本高质量的水性工业防腐涂料工艺（点击即可查看）” </strong></span>
      	  	 			   </a>。该项目系技术方自主上传，一直在迈科技平台进行推广，接受企业的合作咨询。
      	  	 			 </p>
      	  	 			 <p><br></p>
      	  	 			 <p><img src="../assets/message/five.jpg" alt="" style="width: 723px;" class="fr-view fr-dib"></p>
      	  	 			 <p>该技术工艺十分符合油改水企业，可以提供水免除锈三合一涂料，针对目前水性工业漆一些弊端进行了技术改良，并且相比同类产品能有效降低生产成本30%。</p>
      	  	 			 <p><br></p>
      	  	 			 <p><strong><span style="color: rgb(0, 0, 0); font-size: 18px;"><strong><span style="color: rgb(0, 0, 0); font-size: 18px;">短短2天，</span></strong>从电话咨询到实地考察</span></strong></p>
      	  	 			 <p>6月2日，梁总电话联系技术方，进行了初步接触。</p>
      	  	 			 <p>6月4日，迈科技技术创新经理对咨询服务进行跟进服务，梁总告诉迈科技，他在咨询后迅速去了技术方工厂进行实地调研。通过考察其认为该项目风险小，且有量产案例，十分看好，并且技术方也表示可以帮助建厂，双方一拍即合，达成初步合作意向。</p>
      	  	 			 <p><img src="../assets/message/six.jpg" alt="" style="width: 723px;" class="fr-view fr-dib"></p>
      	  	 			 <p style="text-align: center;"><span style="font-size: 12px;">迈科技运维后台记录，对部分保密信息进行遮盖处理</span></p>
      	  	 			 <p><br></p>
      	  	 			 <p><strong><span style="font-size: 18px; color: rgb(0, 0, 0);">合作建厂，项目确认启动</span></strong></p>
      	  	 			 <p>今年11月，迈科技服务回访，“技术方的工程师就在我们这儿呢，刚刚聊完。”梁总对项目表示十分有信心，并告知迈科技目前双方正积极就建厂、引进新设备等事宜做进一步的确认。</p>
      	  	 			 <p><br></p>
      	  	 			 <p><img src="../assets/message/sevent.jpg" alt="" style="width: 723px;" class="fr-view fr-dib"></p>
      	  	 			 <p>迈科技充分发挥出平台“自助式”的服务优势，maikeji.cn在其中不仅仅通过信息展示，帮助技术方推广项目，更提供了一种让技术双方对接更简单的方式，解决技术需求方找项目遇到的“3W”问题——</p>
      	  	 			 <p><strong>哪里找项目（Where）？</strong></p>
                         <p>迈科技平台，多渠道送达。</p>
                         <p>PC网站maikeji.cn、每日更新公众号（微信搜索迈科技）、全国首个技术对接小程序（迈科技精选）</p>
                         <p><strong>找什么项目（What）？</strong></p>
                         <p>根据自身所属行业搜索技术关键词，找到感兴趣的项目。</p>
                         <p>还有创新经理精准服务，为您的企业规划创新发展思路。</p>
                         <p><strong>项目联系谁（Who）？</strong></p>
                         <p>点击即可直接联系技术方。</p>
                         <p>欢迎来电咨询，提供定制创新服务。</p>
                         <p><br></p>
      	  	 			 <p><img src="../assets/message/eight.jpg" alt="" style="width: 723px;" class="fr-view fr-dib"></p>

      	  	 		</div> 
      	  	 		<div class="tag-container">
      	  	 			<a href="/edu/articles?text=%E8%BF%88%E7%A7%91%E6%8A%80%E6%A1%88%E4%BE%8B" class="">
      	  	 			   <span class="m-icon"><i class="fa fa-tag"></i></span><span class="tag">迈科技案例</span>
      	  	 			</a>
      	  	 			<a href="/edu/articles?text=%E8%BF%88%E7%A7%91%E6%8A%80%E6%9C%8D%E5%8A%A1" class="">
      	  	 			   <span class="m-icon"><i class="fa fa-tag"></i></span><span class="tag">迈科技服务</span>
      	  	 			</a>
      	  	 			<div class="share-container pull-right">
      	  	 				分享到：
      	  	 				<span class="dropdown-toggle m-icon"><i class="fa fa-weixin"></i></span>
                            <div class="dropdown-menu share-body">
                               <img src="../assets/message/nine.png">
                               <p class="qrcode-caption">打开微信"扫一扫"</p>
                            </div>
      	  	 			</div>
						<div class="func-btn-container clearfix">
							<button title="收藏" class="favorite-icon-button"><i class="fa fa-star-o"></i></button>
						</div>
					    <div class="pull-right" style="margin-right: 40px;">浏览量：787</div>
      	  	 		</div>
      	  	 		<div class="btn-useful-container">
      	  	 		    <button type="button" class="btn btn-primary btn-useful"><i class="iconfont icon-zan"></i>有用(1)</button>
		                <div class="consult-edu-modal-outer">
		                     <div><button type="button" class="btn btn-primary-reverse btn-useful">转型指导</button></div>
		                </div>
			        </div>
					 <div class="other-list-container" id="other">
				        <h4 class="subtitle">其他人在看</h4>
						<ul class="other-list">
							<li class="other-list-item" v-for="o in otherInfo" :key="o"> 
								<a href="#" class="" target="_blank">
								    <div class="m-cover" :style="o.otherImg"></div>
									<p class="title">{{o.text}}</p></a>
							</li>
						</ul>
					</div>				 
      	  	 	</td>
      	  	 	<td class="side-column-divider"></td>
      	  	 	<td class="side-right">
      	  	 		 <ul class="relate-list" v-for = 'ri in column' :key="ri">
      	  	 			<!-- 栏目浏览头部信息 -->
      	  	 			<li class="relate-list-head">
      	  	 				<span class="title">{{ri.title}}</span>
      	  	 				<a href="#" class="link-more">{{more}}</a>
      	  	 			</li>
      	  	 			<li>
      	  	 			    <!-- 栏目浏览下的的具体内容 -->
      	  	 				<a href="#" class="relate-list-item" v-for = 's in ri.text' :key="s">
      	  	 					<i class="prefix"></i>
      	  	 					<p class="text">{{s}}</p>
      	  	 				</a>
      	  	 			</li>
      	  	 		</ul> 
      	  	 	</td>
      	  	 </tr>
      	  </tbody>
      </table>
  </div>
</template>
<script>
    const one = require("../assets/message/one.jpg");
	const three = require("../assets/message/three.jpg");
	const four = require("../assets/message/four.jpg");
	export default{
         data(){
         	return {
				head:['首页','创新学院','企业案例','详情'],
                infoImg:{
	               backgroundImage:"url("+one+")"
	            },
				title:'高效！“自助”技术对接，达成合作仅用2天！',
				preamble:'导言：徐州某企业通过迈科技平台联系技术方自主对接成功，目前双方正就建厂、引进新设备等事宜展开合作。',
				otherInfo:[{
					otherImg:{
						backgroundImage:"url("+three+")",
					},
				    text:'长治市副市长石建旺、山西省发改委副主任尚日红等领导一行来访迈...'                    
				},{
					otherImg:{
						backgroundImage:"url("+four+")"
					},
					text:'长治市副市长石建旺、山西省发改委副主任尚日红等领导一行来访迈...'    
				},{}],
	            more:'查看更多',
	            column:[{
                    title:'栏目浏览',
                    text:['【迈科技】以市场为导向，专业科技服务让成果“转”更快','【迈科技】德清丨精准匹配，企业对接中科院技术降本增效','一块化妆镜如何靠技术升级迎接这个“美颜时代”？','深耕家底，山东滨州让老产业“逆生长']
	            },{
                    title:'为您推荐',
                    text:['长治市副市长石建旺、山西省发改委副主任尚日红等领导一行来访迈科技','【精选】小程序优质上线，10000张优惠券大放送']
	            }]
         	}
         }
	}
</script>
<style scoped>
    #infoPage,.messageContent,*, :after,:before{
    	box-sizing: border-box;
	    margin: 0;
    }
    #infoPage,.messageContent ul>li{
    	list-style: none;
    }
     #infoPage,.messageContent table {
    	border-spacing: 0;
        border-collapse: collapse;
    }
     #infoPage,.messageContent, td, th {
	    padding: 0;
	    display: table-cell;
        vertical-align: inherit;
	}
	 #infoPage,.messageContent h1,h2,h3{
		 margin-top: 20px;
         margin-bottom: 10px;
	}
	 #infoPage,.messageContent button {
		text-transform: none;
	    overflow: visible;
	}
	 #infoPage,.messageContent p{
		 margin: 0 0 10px;
	}
     #infoPage,.messageContent a{
    	display: inline;
    	color: #707070;
	    text-decoration: none;
    }
	 #infoPage,.messageContent{
		padding-bottom: 50px;
    	word-spacing: 3px;
    	line-height: 1.42857143;
        color: #333;
	}
	 /* #infoPage{
	    margin: 0 auto;
	    max-width: 1240px;
	    width: 100%;
	    background-color: red;
	} */
	 #infoPage,.messageContent .item-catalog-container{
		margin-bottom: 50px;
	}
	 #infoPage,.messageContent .item-catalog-container{
	    margin-top: 30px;
	    margin-bottom: 28px;
	    width: 100%;
	}
	.messageContent .item-catalog-container .catalog-item{
		display: inline-block;
	}
	.messageContent .item-catalog-container .catalog-item a{
		display: inline-block;
		margin-left: 10px;
	    margin-right: 5px;
	    font-size: 14px;
	    color: #707070;
	}
	.messageContent .side-layout-container .side-left{
        width: 794px;
	}
	.side-layout-container .side-left{
       vertical-align: top;
	}
	.messageContent .side-layout-container .side-left .title{
		margin-top: 0;
	    font-size: 28px;
	    font-weight: 700;
	    color: #333;
	}
	.messageContent .side-layout-container .side-left .preamble{
		margin-top: 38px;
	    margin-bottom: 38px;
	    font-size: 18px;
	    color: #999;
	}
	.messageContent .side-layout-container .side-left .m-cover{
		margin-bottom: 46px;
	    height: 490px;
	    background-color: #fff;
	    background-size: cover;
	    background-position: 50%;
	    background-repeat: no-repeat;
	}
	.messageContent .side-layout-container .side-left .details{
		margin-bottom: 25px;
	    padding-bottom: 70px;
	    border-bottom: 1px solid #ddd;
	    font-size: 16px;
	}
	.messageContent .fr-view {
	    text-indent: 0;
	}
	.messageContent .fr-view strong {
	    font-weight: 700;
	}
	.messageContent .side-layout-container .side-left .tag-container{
		height: 28px;
        line-height: 28px;
        /* border: 1px solid blue; */
	}
	.messageContent .side-layout-container .side-left .func-btn-container{
		float: right;
		width: 40px;
		margin-right: 20px;
	}
	.messageContent .side-layout-container .side-left .func-btn-container .favorite-icon-button{
		padding: 0;
		width: 24px;
		height: 24px;
		border: none;
		background-color: transparent;
	}
	.messageContent .side-layout-container .side-left .func-btn-container .fa-star-o{
	    color: #1f86ed;
		font-size: 18px;
	}
	.messageContent .side-layout-container .side-left .tag-container>a:first-child{
		margin-left: 0;
	}
	.messageContent .side-layout-container .side-left .tag-container>a{
		display: inline-block;
	    margin-left: 12px;
	}
	
	.messageContent .side-layout-container .side-left .tag-container .m-icon {
	    margin-right: 7px;
        color: #a9a9a9; 
	} 
	.messageContent .side-layout-container .side-left .tag-container .m-icon .fa-weixin{
		color: #3aa838;
	}
	.messageContent .share-container{
		position: relative;
	    display: -ms-inline-flexbox;
	    display: inline-flex;
	    -ms-flex-align: center;
	    align-items: center;
	    min-width: 96px;
	}
	.messageContent .pull-right {
	    float: right!important;
	}
	.messageContent .icon-weixin:before {
	    content: "\E857";
	}
	.messageContent .share-container:hover>.dropdown-menu{
		display: block;
	}
	.messageContent .share-container .share-body {
	    left: -13px;
	    width: 121px;
	    min-width: 0;
	    padding: 10px;
	    z-index: 1;
	}
	.messageContent .pull-right>.dropdown-menu {
	    right: 0;
	    left: auto;
	}
	.messageContent .dropdown-menu {
	    position: absolute;
	    top: 100%;
	    left: 0;
	    z-index: 1000;
	    display: none;
	    float: left;
	    min-width: 160px;
	    padding: 5px 0;
	    margin: 2px 0 0;
	    font-size: 14px;
	    text-align: left;
	    list-style: none;
	    background-color: #fff;
	    background-clip: padding-box;
	     border: 1px solid #ccc;  
	     border: 1px solid rgba(0,0,0,.15);  
	    border-radius: 4px;
	    box-shadow: 0 6px 12px rgba(0,0,0,.175); 
	} 
	.messageContent .dropdown-menu .qrcode-caption{
        margin-top: 5px;
		margin-bottom: 0;
		width: 100%;
		text-align: center;
		font-size: 12px;
	}
	.messageContent .fa-weixin:hover .dropdown-menu{
		display: block;
	}
	.messageContent .side-layout-container .side-left .btn-useful-container{
	    margin-top: 50px;
        text-align: center;
	}
	.messageContent .side-layout-container .side-left .consult-edu-modal-outer{
		margin-left: 50px;
        display: inline-block;
	}
	.messageContent .side-layout-container .side-left .btn-useful{
		width: 150px;
	    height: 50px;
	    line-height: 35px;
	    font-size: 18px;
	    letter-spacing: 1.2px;
	}
	.messageContent .btn-primary-reverse{
		background-color: #fff;
	    border-color: #1f86ed;
	    border:1px solid #1f86ed;
	    color: #1f86ed;
	}
	.messageContent .btn-primary-reverse:hover {
	    background-color: #1f86ed;
	    border-color: #204d74;
	    color: #fff;
	}
	.messageContent .btn-primary, .btn-primary:focus {
	    background-color: #1f86ed;
	    border-color: #1f86ed;
	    color: #fff;
	}
	.messageContent .btn-primary:hover{
		color: #fff;
	    background-color: #337ab7;
	    border-color: #2e6da4;
	}
	.messageContent .btn {
	    display: inline-block;
	    padding: 6px 12px;
	    margin-bottom: 0;
	    font-size: 14px;
	    font-weight: 400;
	    line-height: 1.42857143;
	    text-align: center;
	    white-space: nowrap;
	    vertical-align: middle;
	    -ms-touch-action: manipulation;
	    touch-action: manipulation;
	    cursor: pointer;
	    -webkit-user-select: none;
	    -moz-user-select: none;
	    -ms-user-select: none;
	    user-select: none;
	    background-image: none;
	    border: 1px solid  #1f86ed;
	    border-radius: 4px;
	}
	.messageContent .side-layout-container .side-left .fr-view img.fr-dib{
		margin: 5px auto;
	    display: block;
	    float: none;
	    /*vertical-align: top;*/
	}
	.messageContent .side-layout-container .side-left .other-list{
		display: flex;
		justify-content: space-between;
	}
	.messageContent .side-layout-container .side-left .other-list-container{
		margin-top: 30px;
	}
	.messageContent .side-layout-container .side-left .other-list-container .subtitle{
		margin-bottom: 15px;
		color: #333;
		font-weight: 700;
		font-size:18px;
	}
	.messageContent .side-layout-container .side-left  .other-list-item{
		width: 250px;
	} 
	.messageContent .side-layout-container .side-left  .other-list-item .m-cover{
		margin-bottom: 5px;
		height: 140px;		
	}
	 .messageContent .side-layout-container .side-left  .other-list-item .title{
		font-size: 14px;
		color: #333;
		display: block;
		font-weight: 700;
	    margin: 0 0 10px;
		/* border:1px solid red;  */
	} 
	.messageContent .side-layout-container .side-column-divider{
        width: 90px;
        background:red;
	}
    .messageContent .side-layout-container .side-right{
        width: 356px;
        max-width: 356px;
        vertical-align: top;
	}
	 .messageContent .side-layout-container .side-right .relate-list{
	 	margin-bottom: 80px;
	 }
	 .messageContent .side-layout-container .side-right .relate-list-head{
	 	margin-bottom: 20px;
	    height: 30px;
	    line-height: 30px;
	 }
	  .messageContent .side-layout-container .side-right .relate-list-item{
        display: flex;
	    padding-top: 8px;
	    padding-bottom: 8px;
	    border-bottom: 1px solid #ddd;
	  }
	  .messageContent .side-layout-container .side-right .relate-list-head .title{
	  	font-size: 20px;
	    font-weight: 700;
	    color: #333;
	 }
	 .messageContent .side-layout-container .side-right .relate-list-head .link-more{
	  	float: right;
	    color: #1f86ed;
	    font-size: 16px;
	    display: block;
	 }
	.messageContent,#infoPage .side-layout-container .relate-list-item .prefix{
        margin-top: 11px;
	    margin-right: 8px;
	    width: 8px;
	    height: 8px;
	    border-radius: 8px;
	    background-color: #1f86ed;
	 }
</style>
