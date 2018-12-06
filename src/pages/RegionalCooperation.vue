<!--区域合作页面  xuge-->
<template>
  <div class="regional">
    <!-- 迈科技合作站 -->
    <div class="station-banner">
      <div class="station-content-container">
        <div class="subtitle-a">
          <hr>
          <span>
            让我们携手 
            打开企业创新的蓝海市场
          </span>
          <hr>
        </div>
        <div class="subtitle-b">
          共同驱动中国产业技术创新升级
        </div>
        <div class="station-introduction">
          <div class="station-introduction-title">
            <span>迈科技合作站介绍</span>
            <br>
            <span>cooperation station introduction</span>
          </div>
          <div class="word">
            迈科技作为企业一站式技术创新服务平台，将携手地方有资源、有实力且有志投身为国家创新发展，产业转型服务的合作伙伴，全力促成地方企业转型升级，作为创新服务生态的深度参与者与执行者，以迈科技平台为载体，面向当地政府、企业主、高净值人群等提供全方位企业创新，产业转型的服务，打造符合地方特色的创新发展道路。
          </div>
        </div>
      </div>
    </div>
    <!-- 区域技术成果转移转化服务方案 -->
    <div class="station-content-container">
      <div class="station-title-bar">
        <span>区域技术成果转移转化服务方案</span>
        <span>
          <hr>
          <span>Regional technology transfer service</span>
          <hr>
        </span>
      </div>
      <ul class="station-tag-group">
        <div class="triangle"></div>
        <li>
          <span index='0' class="tag-btn active">
            <i class="fa fa-desktop"></i>
            <br>
            <span>调查研究及立项</span>
          </span>
        </li>
        <li>
          <span index='0' class="tag-btn">
            <i class="fa fa-desktop"></i>
            <br>
            <span>调查研究及立项</span>
          </span>
        </li>
        <li>
          <span index='0' class="tag-btn">
            <i class="fa fa-desktop"></i>
            <br>
            <span>调查研究及立项</span>
          </span>
        </li>
        <li>
          <span index='0' class="tag-btn">
            <i class="fa fa-desktop"></i>
            <br>
            <span>调查研究及立项</span>
          </span>
        </li>
      </ul>
    </div>
    <!-- 地方特色技术创新方案调研 -->
    <div class="station-products-wrap">
      <div class="station-products-box">
        <!-- <ul style="left:-1240px;"> -->
        <ul style="left:0px;">
          <li class="station-products tb">
            <h3>地方特色技术创新方案调研</h3>
            <div class="introduction">
              <div style="padding-top:30px;">
                围绕区域的产业、企业、服务机构等展开调研，依托迈科技成熟的生态体系，提出技术转移服务体系建设思路、运行机制和市场模式。设计符合地方特色的科技成果转移转化方案，打造区域技术创新服务的特色生态系统。
              </div>
            </div>
            <div class="station-pr-img">
              <img src="../assets/regional/1-1.png" alt="">
              <img src="../assets/regional/1-2.png" alt="">
              <img src="../assets/regional/1-3.png" alt="">
            </div>
          </li>
          <li class="station-products ta">
            <div class="station-products-l">
              <dl>
                <dd>
                  <div index="0" class="active content-tag">
                    <span>线上技术转移平台</span>
                  </div>
                  <div index="1" class="content-tag">
                    <span>技术人才数据库</span>
                  </div>
                  <div index="2" class="content-tag">
                    <span>产业数据监控及分析</span>
                  </div>
                  <div index="3" class="content-tag">
                    <span>线下技术展示馆</span>
                  </div>
                </dd>
              </dl>
            </div>
            <div class="station-products-r"></div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 合作站支持 -->
    <div class="station-content-container">
      <div class="station-title-bar">
        <span>合作站支持</span>
        <span>
          <hr>
          <span>Support for cooperation station</span>
          <hr>
        </span>
      </div>
      <ul class="station-support">
        <li>
          <div>
            <div>品牌赋能</div>
            <p>科技品牌授权，市场资源支持等。</p>
          </div>
        </li>
        <li>
          <div>
            <div>品牌赋能</div>
            <p>科技品牌授权，市场资源支持等。</p>
          </div>
        </li>
        <li>
          <div>
            <div>品牌赋能</div>
            <p>科技品牌授权，市场资源支持等。</p>
          </div>
        </li>
        <li>
          <div>
            <div>品牌赋能</div>
            <p>科技品牌授权，市场资源支持等。</p>
          </div>
        </li>
      </ul>
    </div>
    <!-- 现有合作站点 -->
    <section>
      
    </section>
  </div>
</template>
<script type="text/javascript">
  export default {
    data(){
      return {

      }
    },
    mounted:function(){
    },
    methods:{

    }
  }
</script>
<style scoped>

  /*迈科技合作站*/
  .regional .station-banner{
    height: 840px;
    padding-top: 220px;
    background-image: url("../assets/regional/banner.jpg");
    background-repeat: no-repeat;
    background-position: 50%;
  }
  .regional .station-banner .station-content-container{
    width: 1240px;
    margin: 0 auto;
  }
  .regional .station-banner .station-content-container .subtitle-a{
    height: 40px;
    line-height: 40px;
    width: 910px;
    margin: 0 auto 40px;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }
  .regional .station-banner .station-content-container .subtitle-a hr{
    width:150px;
    height:0px;
    box-sizing: content-box;
    margin-top: 20px;
    margin-bottom: 20px;
    border: 0;
    border-top: 1px solid #eee;
  }
  .regional .station-banner .station-content-container .subtitle-a span{
    font-size: 32px;
    color:#fff;
  }
  .regional .station-banner .station-content-container .subtitle-b{
    height: 50px;
    margin-bottom: 90px;
    font-size: 46px;
    color: #fad62f;
    font-weight: 700;
    text-align: center;
  }
  .regional .station-banner .station-content-container .station-introduction{
    width:1240px;
    height: 290px;
    padding-top: 40px;
    background-color: rgba(0,0,0,.3);
    border-radius: 10px;
  }
  .regional .station-banner .station-content-container .station-introduction .station-introduction-title{
    font-weight: 700;
    text-align: center;
  }
  .regional .station-introduction .station-introduction-title span{
    font-size: 14px;
    color: #70b4fd;
  }
  .regional .station-introduction .station-introduction-title span:first-of-type{
    font-size: 30px;
    color: #fff;
  }
  .regional .station-banner .station-content-container .station-introduction .word{
    font-size: 20px;
    line-height: 40px;
    color: #fff;
    padding: 25px 65px 0;
    text-indent: 2em;
  }
  /*区域技术成果转移转化服务方案 */
  .regional .station-content-container{
    width: 1240px;
    margin:0 auto;
  }
  .regional .station-content-container .station-title-bar {
    text-align: center;
    height: 100px;
  }
  .regional .station-content-container .station-title-bar>span:first-of-type {
    font-size: 36px;
    color: #000;
  }
  .regional .station-content-container .station-title-bar>span:nth-of-type(2){
    color: #000;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: center;
    justify-content: center;
    height: 40px;
    line-height: 40px;
  }
  .regional .station-content-container .station-title-bar>span:nth-of-type(2) hr{
    width: 40px;
    height: 0px;
    margin:20px 15px 20px 15px;
    border-top: 1px solid #000;
    box-sizing: content-box;
  }
  .regional .station-content-container .station-title-bar>span:nth-of-type(2) span{
    color: #1f86ed;
    font-size: 18px;
  }
  .regional .station-content-container .station-tag-group{
    height: 125px;
    display: -ms-flexbox;
    display: flex;
    margin: 40px 0 0;
    position: relative;
  }
  .regional .station-content-container .station-tag-group .triangle{
    position: absolute;
    border-bottom: 15px solid #f5f5f6;
    border-top: 15px solid transparent;
    border-right: 15px solid transparent;
    border-left: 15px solid transparent;
    bottom: 0;
    left: 140px;
  }
  .regional .station-content-container .station-tag-group li{
    flex: 1;
    height: 100%;
    text-align: center;
  } 
  .regional .station-content-container .station-tag-group .triangle{
    position: absolute;
    border-bottom: 15px solid #f5f5f6;
    border-top: 15px solid transparent;
    border-right: 15px solid transparent;
    border-left: 15px solid transparent;
    bottom: 0;
    left: 140px;
  }
  .regional .station-content-container .station-tag-group li .tag-btn{
    cursor: pointer;
    vertical-align: top;
  }
  .regional .station-content-container .station-tag-group li .tag-btn.active{
    color: #1f86ed;
  }
  .regional .station-content-container .station-tag-group li .tag-btn:hover{
    color: #1f86ed;
  }
  .regional .station-content-container .station-tag-group i{
    font-size: 50px;
  }   
  .regional .station-content-container .station-tag-group span span{
    font-size: 14px;
    line-height: 38px;
    font-weight: 700;
    transition: .5s; 
  }

  /*地方特色技术创新方案调研*/
  .regional .station-products-wrap{
    background-color: #f5f5f6;
    height: 520px;
    padding-top: 20px;
  }
  .regional .station-products-wrap .station-products-box{
    height: 475px;
    width: 1240px;
    margin: 0 auto;
    border: 2px solid #dfdfdf;
    position: relative;
    overflow: hidden;
    background-color: #fafbfc;
    background-image: url("../assets/regional/products-bg.png");
    background-position: 100% 100%;
    background-repeat: no-repeat;
  }
  .regional .station-products-wrap .station-products-box>ul{
    position: absolute;
    left: 0px;
    width: 4960px;
    margin: 0;
  }
  .regional .station-products-wrap .station-products-box>ul li{
    float:left;
    box-sizing: border-box;
  }
  .regional .station-products-wrap .station-products-box>ul .tb{
    height: 475px;
    width: 1240px;
    padding: 25px 92px;
  }
  .regional .station-products-wrap .station-products-box h3{
    font-size: 18px;
    margin: 0 0 25px;
    font-weight: 500;
    line-height: 1.1;
  }
  .regional .station-products-box>ul .station-products.tb>.introduction{
    height: 162px;
    font-size: 16px;
    margin-bottom: 28px;
    line-height: 90px;
    padding: 20px 25px;
    color: #999;
    border: 1px dotted #0c4d8b;
  }
  .regional .station-products-box>ul .station-products.tb>.introduction div{
    display: inline-block;
    text-indent: 2em;
    line-height: 30px;
    padding-top: 30px;
  }
  .regional .station-products-box>ul .station-products.tb>.station-pr-img{
    margin-bottom: 30px;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
  }
  .regional .station-products-box>ul .station-products.tb>.station-pr-img img{
    width: 290px;
    height: 185px;
    vertical-align: middle;
    border:none;
    box-sizing: border-box;
  }
  .regional .station-products-wrap .station-products-box>ul .ta{
    height: 475px;
    width: 1240px;
  }
  .regional .station-products-wrap .station-products-box>ul .ta .station-products-l{
    width: 262px;
    padding-top: 40px;
    padding-left: 35px;
    height:100%;
    background: linear-gradient(180deg,#0c4d8b,#81acca);
    float:left;
  }
  .regional .station-products-wrap .station-products-box>ul .ta .station-products-l dl{
    color: #fff;
    margin-bottom: 40px;
  } 
  .regional .station-products-wrap .station-products-box>ul .ta .station-products-l dl dd{
    height: 110px;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-pack: justify;
    justify-content: space-between;
    font-size: 14px;
    text-align: right;
  }
  .regional .station-products-wrap .station-products-box>ul .ta .station-products-l dl dd>div{
    height: 32px;
    line-height: 32px;
    margin-bottom: 30px;
  }
  .regional .station-products-wrap .station-products-box>ul .ta .station-products-l dl dd>div span{
    cursor: pointer;
    float: right;
    padding-right: 30px;
    padding-left: 18px;
    border-radius: 15px 0 0 15px;
  }
  .regional .station-products-wrap .station-products-box>ul .ta .station-products-l dl dd>div.active span{
    background-color: #fff;
    color: #0c4d8b;
  }
  .regional .station-products-wrap .station-products-box>ul .ta .station-products-l dl dd>div:hover span{
    background-color: #fff;
    color: #0c4d8b;
  }
  /*合作站支持*/
  .regional .station-content-container{
    padding-top: 50px;
    width: 1240px;
    margin: 0 auto;
  }
  .regional .station-content-container .station-title-bar{
    text-align: center;
    height: 100px;
    box-sizing: border-box;
  }
  .regional .station-content-container .station-title-bar>span:first-of-type{
    font-size: 36px;
    color: #000;
  }
  .regional .station-content-container .station-title-bar>span:nth-of-type(2){
    color: #000;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: center;
    justify-content: center;
    height: 40px;
    line-height: 40px;
  }
  .regional .station-content-container .station-title-bar>span hr{
    width: 40px;
    border-top-color: #000;
    margin:20px 15px 20px 15px;
    border: 0;
    border-top: 1px solid #eee;
    height: 0;
    box-sizing: content-box;
  }
  .regional .station-content-container .station-title-bar>span span{
    color: #1f86ed;
    font-size: 18px;
    box-sizing: border-box;
    margin: 0;
  }
  .regional .station-content-container .station-support{
    height: 345px;
    margin-top: 20px;
    margin-bottom: 50px;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
    box-sizing: border-box;
  }
  .regional .station-content-container  .station-support li:first-of-type {
    background-image: url("../assets/regional/support-1.png");
  }
  .regional .station-content-container  .station-support li:nth-of-type(2) {
    background-image: url("../assets/regional/support-2.png");
  }
  .regional .station-content-container  .station-support li:nth-of-type(3) {
    background-image: url("../assets/regional/support-3.png");
  }
  .regional .station-content-container  .station-support li:nth-of-type(4) {
    background-image: url("../assets/regional/support-4.png");
  }
  .regional .station-content-container  .station-support li{
    height: 100%;
    /*padding-top: 245px;*/
    width: 262px;
    overflow: hidden;
    background-size: 100%;
    background-position: 50%;
    position:relative;
  }
  .regional .station-content-container  .station-support li>div{
    height: 345px;
    padding: 0 48px;
    /*transition: .5s;*/
    background-color: rgba(14,90,165,.8);
    color: #fff;
    position:absolute;
    top:245px;
  }
  .regional .station-content-container  .station-support li>div>div{
    height: 100px;
    line-height: 100px;
    text-align: center;
    font-size: 26px;
    font-weight: 700;
  }
  .regional .station-content-container  .station-support li>div>p{
    font-size: 20px;
    line-height: 40px;
    margin: 0 0 10px;
  }
  .regional .station-content-container  .station-support li:hover{
    background-size:300px 400px;
    transition:background-size .5s;
  }
  .regional .station-content-container  .station-support li:hover div{
    top:0px;
    transition:top .5s;
  }
  .regional section{
    padding-top: 70px;
    background-image: url("../assets/regional/bg-1.jpg");
    background-repeat: no-repeat;
    background-position: top;
    height:2500px; 
  }
 
    
</style>
