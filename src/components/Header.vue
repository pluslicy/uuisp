<!-- 
  author by zhengrong 
  2018年12月5日15:37:05 编辑主体内容
-->
<template>
  <div class="header">
    <div class="header-wrapper">
      <div class="header-nav">

        <div class="header-nav-left">
          <div class="nav-logo"></div>
          <div class="nav-main">
            <span class="nav-main-span">首页</span>  
          </div>
          <div class="nav-technology">
            <span class="nav-technology-span">技术</span>
          </div>
          <div class="nav-thinktank">
            <span class="nav-thinktank-span">技术</span>
            </div>
          <div class="nav-activity">
            <span class="nav-activity-span">活动</span>
          </div>
          <div class="nav-message">
            <span class="nav-message-span">咨询</span>
          </div>
        </div>

        <div class="header-nav-position"></div>

        <div class="header-nav-right">
          <div>
            <span>企业服务</span>
          </div>
          <div>
            <span>区域合作</span>
          </div>
          <div>
            <span>我是专家</span>
          </div>
          <div>
            <span>登录</span>
          </div>
          <div>
            <span></span>
          </div>
        </div>

      </div>

      <div class="header-content"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return{
      defaultNav:0,
    }
  },
  created() {
    
  },
  mounted() {
    if(this.defaultNav == 0){
      let navs = document.getElementsByClassName('nav-main-span')[0].setAttribute('style','border-bottom:2px solid #fff;font-weight:700;padding:2px;');
    }
  },
}
</script>

<style>
  .header{
    margin: 0;
    box-sizing: border-box;
    font-size: 16px;
    color: #fff;
    width: 100%;
    font-family: PingFang SC,Lantinghei SC,Microsoft Yahei,Hiragino Sans GB,Microsoft Sans Serif,WenQuanYi Micro Hei,sans;
  }
  .header .header-wrapper{
    /* height: 450px; */
    margin: 0 auto;
    position: relative;
    min-width: 1240px;
    width: 100%;
    background-color: #ccc;
  }
  .header-wrapper .header-nav{
    display: flex;
    position: relative;
    width: 100%;
  }
  .header-wrapper .header-nav>div{
    height: 70px;
  }
  .header-wrapper .header-nav .header-nav-left{
    flex: 360px;
    background-color: rgba(173, 216, 230, 0.5);
    position: relative;
    display: flex;
  }
  .header-wrapper .header-nav .header-nav-position{
    flex: 472px;
    background-color: rgba(255,0,0,0.7);
    opacity: 0;
  }
  .header-wrapper .header-nav .header-nav-right{
    flex: 408px;
    background-color: rgba(173, 216, 230, 0.5);
  }
  .header-wrapper .header-nav .header-nav-left .nav-logo{
    /* background-color: rgba(0,0,0,0); */
    background: url(https://maikeji.cn/images/header/logo.png);
    background-repeat: no-repeat;
    width: 50px;
    background-position:center; 
    margin-right:40px; 
  }
  .header-wrapper .header-nav .header-nav-left>div:not(:first-child){
    background:  rgba(255,0,0,0.5);
    line-height: 70px;
    flex:1;
    text-align: center;
  }
</style>

