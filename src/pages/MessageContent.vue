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
      	  	 			<p>交通拥堵停车难、雨洪内涝“城市看海”、管线事故“拉链路”……伴随着城市的发展，一系列影响市民生活的“城市病”也随之而来，而地上“问题”的背后，实际是地下空间建设尚待完善的短板。</p>
      	  	 			<p>在我国建立资源节约型环境友好型社会的大背景下，在
      	  	 			   <a href="https://www.maikeji.cn/technologies/5abf0674263ee31e66393603" rel="noopener noreferrer" target="_blank">
	      	  	 			   <span style="color: rgb(184, 49, 47);"> <strong>“上海面向2040建设卓越的全球城市” </strong></span>
      	  	 			   </a>的目标下，在这个城市治理已经告别“头痛医头脚痛医脚”的时代，探讨如何充分开发利用地下空间已经迫在眉睫。
      	  	 			 </p>
      	  	 			  <p><br></p>
      	  	 			 <p><img src="../assets/message/five.jpg" alt="" style="width: 723px;" class="fr-view fr-dib"></p>
      	  	 			 <p>今年年底前，国内首个城市地下基础设施技术服务平台将正式发布，这一公共服务平台是上海市科委面向全市开放的创新服务举措</p>
      	  	 			 <p><br></p>
      	  	 			 <p><strong><span style="color: rgb(0, 0, 0); font-size: 18px;"><strong><span style="color: rgb(0, 0, 0); font-size: 18px;">前期由上海市政工，</span></strong>程设计研究总院（集团）有限公司</span></strong></p>
      	  	 			 <p>（下称市政总院）牵头承建并提供技术支持和承担主要运营工作。</p>
      	  	 			 <p>组建“平台”一方面有助于推动相关地下基础设施的发展，另一方面也是落实国家相关政策的需要。近年来，国家新型城镇化规划(2014－2020年)提出建设“集约紧凑型”城市开发模式；</p>
      	  	 			 <p><img src="../assets/message/six.jpg" alt="" style="width: 723px;" class="fr-view fr-dib"></p>
      	  	 			 <p style="text-align: center;"><span style="font-size: 12px;">迈科技运维后台记录，对部分保密信息进行遮盖处理</span></p>
      	  	 			 <p><br></p>
      	  	 			 <p><strong><span style="font-size: 18px; color: rgb(0, 0, 0);">乌鲁木齐高铁站南广场地下空间工程</span></strong></p>
      	  	 			 <p>市政总院有责任在行业内发挥与地位相匹配的积极作用，坚持履行引领行业责任，引领行业的发展。</p>
      	  	 			 <p><br></p>
      	  	 			 <p><img src="../assets/message/sevent.jpg" alt="" style="width: 723px;" class="fr-view fr-dib"></p>
      	  	 			 <p>这也完全符合“十三五”时期，市政总院提出的将以“互联网+技术创新服务”为导向，整合集成上下游技术资源，为公共基础设施开发提供关键技术研发服务，为行业内企业技术创新提供支撑服务，提升企业和行业服务能级，营造和谐的共生环境。</p>
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
      	  	 			  <li class="relate-list-head">
      	  	 				<span class="title">{{ri.title}}</span>
      	  	 				<a class="link-more">{{more}}</a>
      	  	 			</li> 
      	  	 			<li>
      	  	 				<a  class="relate-list-item" v-for = 's in ri.text' :key="s">
      	  	 					<i class="prefix"></i>
      	  	 				    <p class="textP">{{s}}</p>      
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
				title:'媒体聚焦 | 上海市政总院：专业服务平台助力创新发展',
				preamble:'发布日期：2016-12-01   资讯来源：解放日报   浏览次数：1869 ',
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
                    text:['建好地下管廊减少“马路拉链”','国务院办公厅关于加强 城市地下管线建设管理的指导意见','突出重点、技术突破、激活市场 ——解读推进城市地下综合管廊建设《指导意见》','国务院办公厅关于推进城市地下综合管廊建设的指导意见']
	            },{
                    title:'为您推荐',
                    text:['关于做好城市洪涝灾害防范工作的通知','住房城乡建设部关于印发海绵城市专项规划编制暂行规定的通知']
	            }]
         	}
         }
	}
</script>
<style scoped>
    #infoPage *, :after,:before{
    	box-sizing: border-box;
	    margin: 0;
    }
    #infoPage ul>li{
    	list-style: none;
    }
     #infoPage table {
        border-spacing: 0;
        border-collapse: collapse; 
    }
	 #infoPage tr,tbody{
	    display: table-row;
		vertical-align: inherit;
		border-color: inherit;
	 }
     #infoPage td, th {
	    padding: 0;
	    display: table-cell;
	    vertical-align: inherit;
	}
	 #infoPage h1,h2,h3{
		 margin-top: 20px;
         margin-bottom: 10px;
	}
	 #infoPage button {
		text-transform: none;
	    overflow: visible;
	}
	  #infoPage p{
		 margin: 0 0 10px;
	} 
     #infoPage a{
    	display: inline;
    	color: #707070;
	    text-decoration: none;
    }
	 #infoPage{
		padding-bottom: 50px;
    	word-spacing: 3px;
    	line-height: 1.42857143;
        color: #333;
	    margin: 0 auto;
	    max-width: 1240px;
	    width: 100%;
        box-sizing: border-box;
	}
	 #infoPage .item-catalog-container{
		margin-bottom: 50px;
	}
     #infoPage .item-catalog-container{
	    padding-top:30px;
		padding-left:10px;
	    margin-bottom: 35px;
	    width: 100%;
	}
	 #infoPage .item-catalog-container .catalog-item{
		display: inline-block;
	}
	 #infoPage .item-catalog-container .catalog-item a{
		display: inline-block;
		/* margin-left: 10px; */
	    margin-right: 5px;
	    font-size: 14px;
	    color: #707070;
	}
	 #infoPage .side-layout-container .side-left{
        width: 794px;  
		/* border: 2px solid red;  */
        vertical-align: top;
		/* padding-right:90px; */
	}
	 #infoPage .side-layout-container .side-left .title{
		margin-top: 0;
	    font-size: 28px;
	    font-weight: 700;
	    color: #333;
	}
	 #infoPage .side-layout-container .side-left .preamble{
		margin-top: 38px;
	    margin-bottom: 38px;
	    font-size: 18px;
	    color: #999;
	}
	 #infoPage .side-layout-container .side-left .m-cover{
		margin-bottom: 46px;
	    height: 490px;
	    background-color: #fff;
	    background-size: cover;
	    background-position: 50%;
	    background-repeat: no-repeat;
	}
	 #infoPage .side-layout-container .side-left .details{
		margin-bottom: 25px;
	    padding-bottom: 70px;
	    border-bottom: 1px solid #ddd;
	    font-size: 16px;
	}
	 #infoPage .side-layout-container .side-left .details p{
		 width: 794px;   
	 }
	 /* #infoPage .fr-view {
	    text-indent: 0;
	}
	 #infoPage .fr-view strong {
	    font-weight: 700;
	} */
	 #infoPage .side-layout-container .side-left .tag-container{
		height: 28px;
        line-height: 28px;
        /* border: 1px solid blue; */
	}
	 #infoPage .side-layout-container .side-left .func-btn-container{
		float: right;
		width: 40px;
		margin-right: 20px;
	}
	 #infoPage .side-layout-container .side-left .func-btn-container .favorite-icon-button{
		padding: 0;
		width: 24px;
		height: 24px;
		border: none;
		background-color: transparent;
	}
	 #infoPage .side-layout-container .side-left .func-btn-container .fa-star-o{
	    color: #1f86ed;
		font-size: 18px;
	}
	 #infoPage .side-layout-container .side-left .tag-container>a:first-child{
		margin-left: 0;
	}
	 #infoPage .side-layout-container .side-left .tag-container>a{
		display: inline-block;
	    margin-left: 12px;
	}
	
	 #infoPage .side-layout-container .side-left .tag-container .m-icon {
	    margin-right: 7px;
        color: #a9a9a9; 
	} 
	 #infoPage .side-layout-container .side-left .tag-container .m-icon .fa-weixin{
		color: #3aa838;
	}
	 #infoPage .share-container{
		position: relative;
	    display: -ms-inline-flexbox;
	    display: inline-flex;
	    -ms-flex-align: center;
	    align-items: center;
	    min-width: 96px;
	}
	 #infoPage .pull-right {
	    float: right!important;
	}
	 #infoPage .icon-weixin:before {
	    content: "\E857";
	}
	 #infoPage .share-container:hover>.dropdown-menu{
		display: block;
	}
	 #infoPage .share-container .share-body {
	    left: -13px;
	    width: 121px;
	    min-width: 0;
	    padding: 10px;
	    z-index: 1;
	}
	 #infoPage .pull-right>.dropdown-menu {
	    right: 0;
	    left: auto;
	}
	 #infoPage .dropdown-menu {
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
	 #infoPage .dropdown-menu .qrcode-caption{
        margin-top: 5px;
		margin-bottom: 0;
		width: 100%;
		text-align: center;
		font-size: 12px;
	}
	 #infoPage .fa-weixin:hover .dropdown-menu{
		display: block;
	}
	 #infoPage .side-layout-container .side-left .btn-useful-container{
	    margin-top: 50px;
        text-align: center;
	}
	 #infoPage .side-layout-container .side-left .consult-edu-modal-outer{
		margin-left: 50px;
        display: inline-block;
	}
	 #infoPage .side-layout-container .side-left .btn-useful{
		width: 150px;
	    height: 50px;
	    line-height: 35px;
	    font-size: 18px;
	    letter-spacing: 1.2px;
	}
	 #infoPage .btn-primary-reverse{
		background-color: #fff;
	    border-color: #1f86ed;
	    border:1px solid #1f86ed;
	    color: #1f86ed;
	}
	 #infoPage .btn-primary-reverse:hover {
	    background-color: #1f86ed;
	    border-color: #204d74;
	    color: #fff;
	}
	 #infoPage .btn-primary, .btn-primary:focus {
	    background-color: #1f86ed;
	    border-color: #1f86ed;
	    color: #fff;
	}
	 #infoPage .btn-primary:hover{
		color: #fff;
	    background-color: #337ab7;
	    border-color: #2e6da4;
	}
	 #infoPage .btn {
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
	 #infoPage .side-layout-container .side-left .fr-view img.fr-dib{
		margin: 5px auto;
	    display: block;
	    float: none;
	    /*vertical-align: top;*/
	}
	 #infoPage .side-layout-container .side-left .other-list{
		display: flex;
		justify-content: space-between;
	}
	 #infoPage .side-layout-container .side-left .other-list-container{
		margin-top: 30px;
	}
	 #infoPage .side-layout-container .side-left .other-list-container .subtitle{
		margin-bottom: 15px;
		color: #333;
		font-weight: 700;
		font-size:18px;
	}
	 #infoPage .side-layout-container .side-left  .other-list-item{
		width: 250px;
	} 
	 #infoPage .side-layout-container .side-left  .other-list-item .m-cover{
		margin-bottom: 5px;
		height: 140px;		
	}
	  #infoPage .side-layout-container .side-left  .other-list-item .title{
		font-size: 14px;
		color: #333;
		display: block;
		font-weight: 700;
	    margin: 0 0 10px;
		/* border:1px solid red;  */
	} 
	 #infoPage .side-layout-container td.side-column-divider{
        width: 90px;  
    	box-sizing: border-box;	
		/* background-color: red;	 */
	}
     #infoPage .side-layout-container .side-right{
        width: 356px; 
        max-width: 356px;
        vertical-align: top;
	}
	  #infoPage .side-layout-container .side-right .relate-list{
	 	margin-bottom: 80px;
	 }
	  #infoPage .side-layout-container .side-right .relate-list-head{
	 	margin-bottom: 20px;
	    height: 30px;
	    line-height: 30px;
	 }
	   #infoPage .side-layout-container .side-right .relate-list-item{
        display: flex;
	    padding-top: 8px;
	    padding-bottom: 8px;
	    border-bottom: 1px solid #ddd;
	  }
	   #infoPage .side-layout-container .side-right .relate-list-head .title{
	  	font-size: 20px;
	    font-weight: 700;
	    color: #333;
	 }
	  #infoPage .side-layout-container .side-right .relate-list-head .link-more{
	  	float: right;
	    color: #1f86ed;
	    font-size: 16px;
	    display: block;
	 }
	 #infoPage .side-layout-container .side-right .relate-list-item>.prefix{
        margin-top: 11px;
	    margin-right: 8px;
	    width: 8px;
	    height: 8px;
	    border-radius: 8px;
	    background-color: #1f86ed;
	 }
	 #infoPage .side-layout-container .side-right .relate-list-item>.textP{
		display: block;
	    flex-grow: 1;
		margin-bottom: 0;
		width: 326px;
		line-height: 1.8;
		font-size: 14px;
		color: #666;
		word-break: break-all; 
	  }
</style>
