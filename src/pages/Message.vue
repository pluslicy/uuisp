<!-- 资讯 -->
<template>
	<div class="message">
		<div class="message-container" id="infoMessage">
			<div class="message-section-1 card" v-for = 'list in listItem' :key="list">
				<div class="title overflow-hidden">
					{{list.one}}●<span class="emphasis">企业案例 </span>解读
				</div>
				<div class="list-container section-left" >
					<ul class="list" >
						  <li class="list-item" >
							   <a href="/edu/articles/5be53b5c544f9b50f781da8a" class="" target="_blank" v-for = 'item in list.list' :key="item">
								     <p class="title overflow-hidden">{{item.title}}</p>
								     <p class="text overflow-hidden">{{item.content}}</p>
							   </a>
						  </li>
						  <li class="list-caption">
							   <a href="/edu/articles?column=%E4%BC%81%E4%B8%9A%E6%A1%88%E4%BE%8B" class="btn btn-primary"> 进入专栏</a>
						  </li>
					</ul>
				</div>
				<a href="#" class="m-cover section-right" :style="list.bgImg" >
					<div class="m-cover-caption overflow-hidden">{{list.imgText}}</div>
				
				</a>
			</div>
			
		</div>

	</div>
</template>
<script>
    const one = require("../assets/message/one.jpg");
    const two = require('../assets/message/two.jpg');
    const three = require('../assets/message/three.jpg');
    const four = require('../assets/message/four.jpg');
	export default{
		data(){
            return {
               listItem:[{
               	   one:'转型',
           	   	   two:'企业案例',
                   three:'解读',
                   list:[{
	               	   title:'高效！“自助”技术对接，达成合作仅用2天！',
	               	   content:'徐州某企业通过迈科技平台联系技术方自主对接成功，目前双方正就建厂、引进新设备等事宜展开合作。'
	               },{
	               	   title:'【迈科技】以市场为导向，专业科技服务让成果“转”更快',
	               	   content:'在迈科技的服务下，项目打开了新的应用场景市场，目前已经完成小试、中试的应用，技术产品在多家知名企业使用，获得阶段性进展。'
	               },{
	               	   title:'【迈科技】德清丨精准匹配，企业对接中科院技术降本增效',
	               	   content:'9月20日，迈科技为德清县当地企业对接了中国科学院长春应用化学研究院高分子物理与化学国家重点实验室。'
	               },{
	               	   title:'一块化妆镜如何靠技术升级迎接这个“美颜时代”？',
	               	   content:'化妆镜都技术升级了，你呢？'
	               }],
	               arrImg:one,
	               bgImg:{
		               backgroundImage:"url("+one+")"
		           },
	               imgText:"高效！“自助”技术对接，达成合作仅用2天！"
               },{
                   one:'讲堂',
           	   	   two:'科技服务',
                   three:'指导',
                   list:[{
	               	   title:'高效！“自助”技术对接，达成合作仅用2天！',
	               	   content:'徐州某企业通过迈科技平台联系技术方自主对接成功，目前双方正就建厂、引进新设备等事宜展开合作。'
	               },{
	               	   title:'【迈科技】以市场为导向，专业科技服务让成果“转”更快',
	               	   content:'在迈科技的服务下，项目打开了新的应用场景市场，目前已经完成小试、中试的应用，技术产品在多家知名企业使用，获得阶段性进展。'
	               },{
	               	   title:'【迈科技】德清丨精准匹配，企业对接中科院技术降本增效',
	               	   content:'9月20日，迈科技为德清县当地企业对接了中国科学院长春应用化学研究院高分子物理与化学国家重点实验室。'
	               },{
	               	   title:'一块化妆镜如何靠技术升级迎接这个“美颜时代”？',
	               	   content:'化妆镜都技术升级了，你呢？'
	               }],
	               arrImg:two,
	               bgImg:{
		               backgroundImage:"url("+two+")"
		           },
	               imgText:"一图看懂2018年国家重点研发计划重点专项公示和进展状态"
               },{
               	   one:'洞悉',
           	   	   two:'行业热点',
                   three:'观察',
                   list:[{
	               	   title:'高效！“自助”技术对接，达成合作仅用2天！',
	               	   content:'徐州某企业通过迈科技平台联系技术方自主对接成功，目前双方正就建厂、引进新设备等事宜展开合作。'
	               },{
	               	   title:'【迈科技】以市场为导向，专业科技服务让成果“转”更快',
	               	   content:'在迈科技的服务下，项目打开了新的应用场景市场，目前已经完成小试、中试的应用，技术产品在多家知名企业使用，获得阶段性进展。'
	               },{
	               	   title:'【迈科技】德清丨精准匹配，企业对接中科院技术降本增效',
	               	   content:'9月20日，迈科技为德清县当地企业对接了中国科学院长春应用化学研究院高分子物理与化学国家重点实验室。'
	               },{
	               	   title:'一块化妆镜如何靠技术升级迎接这个“美颜时代”？',
	               	   content:'化妆镜都技术升级了，你呢？'
	               }],
	               arrImg:three,
	               bgImg:{
		               backgroundImage:"url("+three+")"
		           },
	               imgText:"最贵iphone发布，7nm的半导体工艺极限，为什么现在又被突破了？"
               },{
                   one:'动态',
           	   	   two:'迈科技新闻',
                   three:'一览',
                   list:[{
	               	   title:'高效！“自助”技术对接，达成合作仅用2天！',
	               	   content:'徐州某企业通过迈科技平台联系技术方自主对接成功，目前双方正就建厂、引进新设备等事宜展开合作。'
	               },{
	               	   title:'【迈科技】以市场为导向，专业科技服务让成果“转”更快',
	               	   content:'在迈科技的服务下，项目打开了新的应用场景市场，目前已经完成小试、中试的应用，技术产品在多家知名企业使用，获得阶段性进展。'
	               },{
	               	   title:'【迈科技】德清丨精准匹配，企业对接中科院技术降本增效',
	               	   content:'9月20日，迈科技为德清县当地企业对接了中国科学院长春应用化学研究院高分子物理与化学国家重点实验室。'
	               },{
	               	   title:'一块化妆镜如何靠技术升级迎接这个“美颜时代”？',
	               	   content:'化妆镜都技术升级了，你呢？'
	               }],
	               arrImg:four,
	               bgImg:{
		               backgroundImage:"url("+four+")"
		           },
	               imgText:"长治市副市长石建旺、山西省发改委副主任尚日红等领导一行来访迈科技"
               }],
	           
            }
		},
		methods:{

		}
	}
</script>
<style scoped>
    *, :after,:before{
    	box-sizing: border-box;
	    margin: 0;
    }
    ul>li{
    	list-style: none;
    }
    a{
    	display: block;
    	color: #337ab7;
	    text-decoration: none;
    }
    .message{
        margin: 0 auto;
	    /*max-width: 1240px;*/
	    /*width: 100%;*/
	    /*background-color: red;*/
	    /*box-sizing: border-box;*/
    	font-size: 14px;
	    line-height: 1.42857143;
	    color: #333;
    }
    .message{
        padding-bottom: 100px;
        background-color: #f5f5f6;
	    font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
	    font-size: 14px;
	    line-height: 1.42857143;
	    color: #333;
    }
	/*.message-container{
		margin: 0 auto;
	    max-width: 1240px;
	    width: 100%;
	    background-color: red;
	    box-sizing: border-box;
	}*/
	#infoMessage .message-section-1{
	    margin-top: 100px;
	    padding: 64px 70px;
	    height: 490px;
	    position: relative;
	    border: 1px solid #cecfcf;
	}
	#infoMessage .message-section-1:hover{
		/*cursor: pointer;*/
		border-color: rgba(31,134,237,.5);
        box-shadow: 0 0 12px #1f86ed;
	}
	#infoMessage .message-section-1>.title{
		position: absolute;
	    left: 70px;
	    top: -40px;
	    width: 364px;
	    height: 68px;
	    line-height: 68px;
	    border: 1px solid #1f86ed;
	    background-color: #1f86ed;
	    color: #fff;
	    font-size: 24px;
	    text-align: center;
	}
	#infoMessage .message-section-1>.title:hover{
		border-color: rgba(31,134,237,.5);
        box-shadow: 0 0 8px #1f86ed;
	}
	#infoMessage .message-section-1 .title .emphasis{
		font-size: 30px;
	}
	#infoMessage .message-section-1 .list-container{
		box-sizing: border-box;
		position: relative;
	    padding: 18px;
	    width: 526px;
	    height: 360px;
	    background-color: #f6f6f6;
	    /*border: 1px solid red;*/
	}
	#infoMessage .message-section-1 .list-container .list-item .title{
		margin-bottom: 10px;
	    padding-left: 6px;
	    height: 20px;
	    line-height: 20px;
	    font-size: 18px;
	    border-left: 2px solid #00b8db;
	    color: #333;
	}
	#infoMessage .message-section-1 .list-container .list-item .title:hover{
		cursor: pointer;
		color: #1f86ed;
		text-decoration:underline;
	}
	#infoMessage .message-section-1 .list-container .list-item .text{
		margin-bottom: 25px;
	    width: 100%;
	    font-size: 14px;
	    color: #666;
	}
	#infoMessage .message-section-1 .list-container .list{
	    padding: 0;
	}
	#infoMessage .message-section-1 .list-container .list-caption{
		position: absolute;
	    right: 18px;
	    bottom: 18px;
	}
	#infoMessage .message-section-1 .list-container .list-caption .btn{
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
	    border: 1px solid transparent;
	    border-radius: 4px;
	}
	#infoMessage .btn-primary:focus{
        background-color: #1f86ed; */
	    border-color: #1f86ed;
	    color: #fff;
	}
	#infoMessage .btn-primary{
        color: #fff;
	    background-color: #337ab7;
	    border-color: #2e6da4;
	}
	#infoMessage .message-section-1 .section-left{
		float: left;
	}
	#infoMessage .message-section-1 .m-cover{
		position: relative;
	    width: 476px;
	    height: 360px;
	    background-color: #a0a0a0;
	}
	#infoMessage .m-cover{
		background-color: #1f86ed;
	    background-size: cover;
	    background-position: 50%;
	    background-repeat: no-repeat;
	}
	.message .message-section-1 .section-right{
		float: right;
	}
	#infoMessage .message-section-1  .m-cover-caption{
        position: absolute;
	    bottom: 0;
	    padding: 0 20px;
	    width: 100%;
	    height: 60px;
	    line-height: 59px;
	    font-size: 16px;
	    background-color: rgba(0,0,0,.7);
	    color: #fff;
	}
	.message .overflow-hidden{
		white-space: nowrap;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    word-break: break-all;
	}
	.message .card{
	    padding: 18px;
	    background-color: #fff;
	    border: .5px solid #eee;
	    box-shadow: 0 0 0.5px rgba(0,0,0,.2);
	}
</style>