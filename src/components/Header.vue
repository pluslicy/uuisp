<!-- 
  author by zhengrong 
  2018年12月5日15:37:05 编辑主体内容
-->
<template>
  <div class="header header-img">
    <div class="bg-one" :style='"height:"+high'></div>
    <div class="bg-two" :style='"height:"+high'></div>
    <div class="bg-three" :style='"height:"+high'></div>
    <div class="header-wrapper" :style='"height:"+high'>
      <div class="header-nav">

        <div class="header-nav-left">
          <div class="nav-logo" @click="toMain"></div>
          <div class="nav-main">
            <span class="nav-main-span" @click="toMain">首页</span>  
          </div>
          <div class="nav-technology">
            <span class="nav-technology-span" @click="toTechnology">技术</span>
          </div>
          <div class="nav-thinktank">
            <span class="nav-thinktank-span" @click="toThinktank">智库</span>
            </div>
          <div class="nav-activity">
            <span class="nav-activity-span" @click="toActivity">活动</span>
          </div>
          <div class="nav-message">
            <span class="nav-message-span" @click="toMessage">咨询</span>
          </div>
        </div>

        <div class="header-nav-position"></div>

        <div class="header-nav-right">
          <div class="nav-service">
            <span class="nav-service-span"><a href="http://127.0.0.1:8080/#/enterprise" target="_blank">企业服务</a></span>
          </div>
          <div class="nav-cooperation">
            <span class="nav-cooperation-span"><a href="http://127.0.0.1:8080/#/regional" target="_blank">区域合作</a></span>
          </div>
          <div class="nav-experts">
            <span class="nav-experts-span"><a href="http://127.0.0.1:8080/#/professor" target="_blank">我是专家</a></span>
          </div>
          <div class="nav-login">
            <span class="nav-login-span">
              <i class="fa fa-user-circle-o" style="font-size:18px;"></i>&nbsp;登录
            </span>
          </div>
          <div class="nav-release">
            <button>发布</button>
          </div>
        </div>

      </div>
    </div>
    <!-- <div :style='"height:"+high'></div> -->
  </div>
</template>

<script>
export default {
  data() {
    return{
      _path:'/',
      high:'',
    }
  },
  created() {
    this.high = '450px';
  },
  watch:{
    $route(to,from){
      this._path = to.path;
      this.listenPath();
    }
  },
  mounted() {      
    this._path = '/'
    this.listenPath();
  },
  methods:{
    toMain(){
      this.$router.push('/')
    },
    toTechnology(){
      this.$router.push('/technology')
    },
    toThinktank(){
      this.$router.push('/thinkTank')
    },
    toActivity(){
      this.$router.push('/activity')
    },
    toMessage(){
      this.$router.push('/message')
    },
    // 监听导航变化
    listenPath(){
      let border = {"border-bottom":"2px solid #fff","font-weight":"700","padding":"3px"};
      let bordernone = {"border-bottom":"none","font-weight":"500","padding":"3px"}
      if(this._path == '/'){
        this.play1();
        $('.nav-main-span').eq(0).css(border)
        $('.nav-technology-span').eq(0).css(bordernone)
        $('.nav-thinktank-span').eq(0).css(bordernone)
        $('.nav-activity-span').eq(0).css(bordernone)
        $('.nav-message-span').eq(0).css(bordernone)
        this.high = '450px'
        $('.bg-one').eq(0).css("background-image","url(https://maikeji.cn/images/index/banner1.jpg)")
        $('.bg-two').eq(0).css("background-image","url(https://maikeji.cn/images/index/banner2.jpg)")
        $('.bg-three').eq(0).css("background-image","url(https://maikeji.cn/images/index/banner3.jpg)")
      }else if(this._path == '/technology'){
        $('.nav-technology-span').eq(0).css(border)
        $('.nav-main-span').eq(0).css(bordernone)
        $('.nav-thinktank-span').eq(0).css(bordernone)
        $('.nav-activity-span').eq(0).css(bordernone)
        $('.nav-message-span').eq(0).css(bordernone)
        this.high = '450px'
        $('.bg-one,.bg-two,.bg-three').css("background-image","url(https://maikeji.cn/images/bg-header-technologies.jpg)")
      }else if(this._path == '/thinkTank'){
        $('.nav-thinktank-span').eq(0).css(border)
        $('.nav-main-span').eq(0).css(bordernone)
        $('.nav-technology-span').eq(0).css(bordernone)
        $('.nav-activity-span').eq(0).css(bordernone)
        $('.nav-message-span').eq(0).css(bordernone)
        this.high = '550px'
        $('.bg-one,.bg-two,.bg-three').css("background-image","url(https://maikeji.cn/images/bg-header-experts.jpg)")
      }else if(this._path == '/activity'){
        $('.nav-activity-span').eq(0).css(border)
        $('.nav-main-span').eq(0).css(bordernone)
        $('.nav-technology-span').eq(0).css(bordernone)
        $('.nav-thinktank-span').eq(0).css(bordernone)
        $('.nav-message-span').eq(0).css(bordernone)
        this.high = '450px'
        $('.bg-one,.bg-two,.bg-three').css("background-image","url(https://maikeji.cn/images/bg-header-activities.jpg)")
      }else if(this._path == '/message'){
        $('.nav-message-span').eq(0).css(border)
        $('.nav-main-span').eq(0).css(bordernone)
        $('.nav-technology-span').eq(0).css(bordernone)
        $('.nav-thinktank-span').eq(0).css(bordernone)
        $('.nav-activity-span').eq(0).css(bordernone)
        this.high = '450px'
        $('.bg-one,.bg-two,.bg-three').css("background-image","url(https://maikeji.cn/images/bg-header-edu.jpg)")
      };
    },
    // 首页轮播
    play1(){
      // console.log("11")
      if(this._path !== '/'){
        $('.bg-one,.bg-two,.bg-three').css("opacity","1");
        return
      }
      var that = this;
      $('.bg-one').animate({opacity:0},5000)
      $('.bg-two').animate({opacity:1},5000,function(){
        that.play2()
      })
    },
    play2(){
      // console.log("22")
      if(this._path !== '/'){
        $('.bg-one,.bg-two,.bg-three').css("opacity","1");
        return
      }
      var that = this;
      $('.bg-two').animate({opacity:0},5000)
      $('.bg-three').animate({opacity:1},5000,function(){
        that.play3();
      })
    },
    play3(){
      // console.log("33")
      if(this._path !== '/'){
        $('.bg-one,.bg-two,.bg-three').css("opacity","1");
        return
      }
      var that = this;
      $('.bg-three').animate({opacity:0},5000)
      $('.bg-one').animate({opacity:1},5000,function(){
        that.play1();
      })
    },
  },
}
</script>

<style>
  .header-img{
    margin: 0;
    box-sizing: border-box;
    font-size: 16px;
    font-family: PingFang SC,Lantinghei SC,Microsoft Yahei,Hiragino Sans GB,Microsoft Sans Serif,WenQuanYi Micro Hei,sans;
    color: #fff;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;
    background: rgba(0, 0, 0, 0);
    position: relative;
  }
  .bg-one{
    width: 100%;
    background-image: url(https://maikeji.cn/images/index/banner1.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;
    position: absolute;
    z-index: 3;
  }
  .bg-two{
    width: 100%;
    background-image: url(https://maikeji.cn/images/index/banner2.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;
    position: absolute;
    z-index: 2;
  }
  .bg-three{
    width: 100%;
    background-image: url(https://maikeji.cn/images/index/banner3.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;
    position: absolute;
    z-index: 1;
  }
  .header-content{
    position: relative;
  }
  .header-nav-right a{
    color: #fff;
  }
  .header .header-wrapper{
    /* height: 450px; */
    margin: 0 auto;
    position: relative;
    max-width: 1240px;
    width: 100%;
    background-color:  rgba(0, 0, 0, 0);
    /* background-image: url(); */
  }
  .header-wrapper .header-nav{
    display: flex;
    position:absolute;
    width: 100%;
    z-index: 4;
  }
  .header-wrapper .header-nav>div{
    height: 70px;
  }
  /* header-left */
  .header-wrapper .header-nav .header-nav-left{
    flex: 360px;
    background-color: rgba(255, 255, 255, 0);
    position: relative;
    display: flex;
  }
  .header-wrapper .header-nav .header-nav-position{
    flex: 472px;
    background-color: rgba(255, 255, 255, 0);
    opacity: 0;
  }
  .header-wrapper .header-nav .header-nav-right{
    flex: 408px;
    background-color: rgba(255, 255, 255, 0);
  }
  .header-wrapper .header-nav .header-nav-left .nav-logo{
    /* background-color: rgba(0,0,0,0); */
    background-image: url(https://maikeji.cn/images/header/logo.png);
    background-repeat: no-repeat;
    width: 50px;
    background-position:center; 
    margin-right:40px; 
  }
  .header-wrapper .header-nav .header-nav-left>div:not(:first-child){
    background:  rgba(255, 255, 255, 0);
    line-height: 70px;
    flex:1;
    text-align: center;
  }
  .header-nav-left>div:not(:first-child):hover{
    font-weight: 700;
  }
  /*  */
  .header-nav-left .nav-logo,
  .header-nav-left>div>span,
  .header-nav-right>div>span{
    cursor:pointer;
  }
  /* header-right */
  .header-wrapper .header-nav .header-nav-right{
    position: relative;
    display: flex;
  }
  .header-wrapper .header-nav .header-nav-right>div:not(:last-child){
    background:  rgba(255, 255, 255, 0);
    line-height: 70px;
    flex:1;
    text-align: center;
  }
  .header-nav-right .nav-release{
    padding: 5% 0;
  }
  .header-nav-right .nav-release button{
    display: block;
    padding: 2px 9px;
    border-radius: 5px;
    letter-spacing: 1px;
    background-color: #1f86ed;
    border-color: #1f86ed;
    color: #fff;
    font-size: 14px;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    touch-action: manipulation;
    cursor: pointer;
  }
  .header-nav-right>div:not(:last-child):hover{
    font-weight: 700;
  }
</style>

