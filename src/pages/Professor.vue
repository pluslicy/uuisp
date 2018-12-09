<!--我是专家页面-->
<template>
  <div class="professor">
    <!-- 全部需求 -->
    <div class="card2 content-container account-settings-container">
      <div class="card-header">
        <span class="title">全部需求</span>
        <form action="#" class="searchbar">
          <input type="text" class="search-text">
          <button type="submit" class="btn search-btn">搜索</button>
        </form>
      </div>
      <!-- 所属领域 -->
      <div class="filter-container">
        <div class="filter">
          <div class="filter-label">所属领域</div>
          <ul class="filter-items">
            <li class="filter-item active" @click="hanlderActive(1)">
              <div class="item-content ">
                <span class="no-limit">
                  不限
                </span>
              </div>
            </li>
            <li class="filter-item" @click="hanlderActive(2)">
              <div class="item-content ">
                <span class="no-limit">
                  能源电力
                </span>
              </div>
            </li>
            <li class="filter-item" @click="hanlderActive(3)">
              <div class="item-content ">
                <span class="no-limit">
                  环境工程
                </span>
              </div>
            </li>
            <li class="filter-item" @click="hanlderActive(4)">
              <div class="item-content ">
                <span class="no-limit">
                  化学化工
                </span>
              </div>
            </li>
            <li class="filter-item" @click="hanlderActive(5)">
              <div class="item-content ">
                <span class="no-limit">
                  材料科技
                </span>
              </div>
            </li>
            <li class="filter-item" @click="hanlderActive(6)">
              <div class="item-content ">
                <span class="no-limit">
                  生农医药
                </span>
              </div>
            </li>
            <li class="filter-item" @click="hanlderActive(7)">
              <div class="item-content ">
                <span class="no-limit">
                  机械电子
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <!-- 列表 -->
      <div class="lib-recommend-container">
        <ul class="list">
          <li class="list-item null-hint" v-for="item in listData">
            <a href="#" class="m-cover" target="_black">{{item.header}}</a>
            <div class="item-content">
              <div class="inner">
                <a href="#" class="hre">
                  <div class="title">
                    <span class="prefix">【面议】</span>
                    <span class="hover">{{item.title}}</span>
                  </div>
                </a>
                <p class="brief">{{item.content}}</p>
              </div>
              <div class="text-container tag-container">
                <span class="text">{{item.area}}</span>
                <span class="text">浏览量：{{item.read}}</span>
                <span class="text">咨询量：{{item.ask}}</span>
                <span class="text">发布时间：{{item.publicTime}}</span>
              </div>
            </div>
          </li>
        </ul>
        <nav aria-label="Page navigation" class="list-pagination">
          <ul class="pagination">
            <li><a href="#">1</a></li>
            <li><a href="#">2</a></li>
            <li><a href="#">3</a></li>
            <li><a href="#">4</a></li>
            <li><a href="#">5</a></li>
            <li><a href="#">...</a></li>
            <li><a href="#">下一页</a></li>
            <!-- <li>
              <a href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li> -->
          </ul>
        </nav>
      </div>
    </div>

  </div>
</template>
<script type="text/javascript">
  export default {
    data(){
      return {
        listData:[
          {
            header:'魏',
            title:'制镉废水的你设备',
            content:'简介：可以处理工业中可以制镉废水的你设备，要考虑南方室外温度（25°—35°），排水量在1400-1500吨左右，要求设备占地小，以国内设备为主。',
            area:"北京",
            read:'85',
            ask:'0',
            publicTime:'2018-11-07',
          },
          {
            header:'魏',
            title:'大型净水器上使用的直流电源简介',
            content:'技术指标：供电电压：AC 380V额定直流输出电压： 0~800V电流： 0~20A电压稳定度： ≤2%电流稳定度： ≤0.5%纹波及噪声： ≤1%（有效值）电压预设精度： 0.1V稳流预设精度：0.01A电源预设方式：4~20mA/RS485（MODBUS ）',
            area:"北京",
            read:'85',
            ask:'0',
            publicTime:'2018-11-07',
          },{
            header:'万',
            title:'大型净水器上使用的直流电源简介',
            content:'技术指标：供电电压：AC 380V额定直流输出电压： 0~800V电流： 0~20A电压稳定度： ≤2%电流稳定度： ≤0.5%纹波及噪声： ≤1%（有效值）电压预设精度： 0.1V稳流预设精度：0.01A电源预设方式：4~20mA/RS485（MODBUS ）',
            area:"北京",
            read:'85',
            ask:'0',
            publicTime:'2018-11-07',
          },
          {
            header:'魏',
            title:'大型净水器上使用的直流电源简介',
            content:'技术指标：供电电压：AC 380V额定直流输出电压： 0~800V电流： 0~20A电压稳定度： ≤2%电流稳定度： ≤0.5%纹波及噪声： ≤1%（有效值）电压预设精度： 0.1V稳流预设精度：0.01A电源预设方式：4~20mA/RS485（MODBUS ）',
            area:"北京",
            read:'85',
            ask:'0',
            publicTime:'2018-11-07',
          },{
            header:'万',
            title:'大型净水器上使用的直流电源简介',
            content:'技术指标：供电电压：AC 380V额定直流输出电压： 0~800V电流： 0~20A电压稳定度： ≤2%电流稳定度： ≤0.5%纹波及噪声： ≤1%（有效值）电压预设精度： 0.1V稳流预设精度：0.01A电源预设方式：4~20mA/RS485（MODBUS ）',
            area:"北京",
            read:'85',
            ask:'0',
            publicTime:'2018-11-07',
          }
        ]
      }
    },
    mounted:function(){
    },
    methods:{
      hanlderActive(n){
        $(".filter-item").eq(n-1).addClass('active').siblings().removeClass('active');
      }
    }
  }
</script>
<style scoped>
  /*全部需求*/
  .professor .account-settings-container{
    width: 1240px;
    margin:0 auto;
    margin-top: 40px;
  }
  .professor .card2{
    border: 1px solid #e9eef2;
  }
  .professor .card2 .card-header{
    position: relative;
    padding-left: 0;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    margin: 0;
    padding-left: 26px;
    height: 60px;
    font-size: 20px;
    font-weight: 700;
    background-color: #f4f8fd;
    border-bottom: 1px solid #e9eef2;
    color: #6e7a81;
  }
  .professor .card2 .card-header .title{
    height: 100%;
    line-height: 59px;
    width: 146px;
    color: #6e7a81;
    text-align: center;
  }
  .professor .account-settings-container .card-header .searchbar{
    position: absolute;
    top: 10px;
    right: 35px;
    width: 300px;
  }
  .professor .account-settings-container .card-header .searchbar .search-text {
    /*padding-left: 14px;*/
    width: 230px;
    height: 38px;
    border: 1px solid #ddd;
    border-right: none;
    font-size: 16px;
  }
  .professor .account-settings-container .card-header .searchbar .search-btn {
    width: 70px;
    font-size: 16px;
    vertical-align: top;
    height: 38px;
    color: #666;
    background-color: #ddd;
    border-radius: 0;
    border: none;
    outline:none;
    margin-left:-8px;
    height: 42px;
  }
  .professor .card-header .btn {
    display: inline-block;
    padding: 6px 12px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 4px;
  }
  .professor .filter-container {
    width:1240px;
    margin:0 auto;
    padding: 20px 30px 20px 20px;
    border-bottom: 1px solid #eee;
  }
  .professor .filter-container .filter{
    height: 55px;
    position: relative;
    margin-bottom: 0;
    list-style: none;
    color: #707070;
    font-size: 14px;
    text-align: left;
  }
  .professor .filter-container .filter-label {
    position: absolute;
    height: 45px;
    line-height: 45px;
    font-weight: 700;
  }
  .professor .filter .filter-items{
    position: relative;
    padding-left: 94px;
  }
  .professor .filter .filter-items .filter-item{
    display: inline-block;
    margin-top: 8px;
    margin-right: 16px;
  }
  .professor .filter-item .item-content {
    cursor: pointer;
    display: inline-block;
  }
  .professor .filter-item .item-content span {
    position: relative;
    display: block;
    padding: 7px 12px;
    line-height: 1;
    overflow: hidden;
  }
  .professor li.filter-item.active .item-content span {
    background-color: #e3f1ff;
    color: #0a539a;
    outline: 1px solid #4dafed;
  }
  .professor .card2 .lib-recommend-container{
    width:1240px;
    margin:0 auto;
  }
  .professor .card2 .lib-recommend-container .list-item{
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    margin-top: 0;
    padding-left: 44px;
    padding-right: 30px;
    height: 250px;
    min-height: 120px;
    border-bottom: 1px solid #e9eef2;
    box-sizing: border-box;
  }

  .professor .card2 .lib-recommend-container .list-item .m-cover{
    margin-right: 30px;
    height: 100px;
    line-height: 100px;
    width: 100px;
    border-radius: 100px;
    min-width: 100px;
    color: #333;
    font-size: 44px;
    text-align: center;
    background-color: #999;
    background-size: cover;
    background-position: 50%;
    background-repeat: no-repeat;
  }
  .professor .card2 .lib-recommend-container .list-item .item-content{
    -ms-flex-positive: 1;
    flex-grow: 1;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-pack: justify;
    justify-content: space-between;
    height: 180px;
  }
  .professor .card2 .lib-recommend-container .list-item .item-content .title{
    margin-top: 0;
    margin-bottom: 15px;
    font-size: 20px;
    color: #2a2a2a;
  }
  .professor .card2 .lib-recommend-container .list-item:hover .item-content .title .hover{
    color: #337ab7;
  };
  .professor .card2 .lib-recommend-container .list .list-item .item-content .title .prefix{
  } 
  .professor .card2 .lib-recommend-container .list .list-item .item-content .inner .hre .title .prefix{
    display: inline-block;
    margin-left: -12px;
    color: #f7b52d;
  }
  .professor .card2 .lib-recommend-container .list .list-item .item-content .inner .brief{
    line-height: 1.8;
    font-size: 16px;
    color: #858585;
  }
  .professor .card2 .lib-recommend-container .list .list-item .item-content .text-container{
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
    color: #858585;
    font-size: 14px;
    line-height: 1;
  }
  .professor .card2 .lib-recommend-container .list-pagination{
    height:81px;
    padding-right: 28px;
    text-align: right;
    display: block;
  }
  .professor .card2 .lib-recommend-container .list-pagination .pagination{
    display: inline-block;
    padding-left: 0;
    margin: 20px 0;
    border-radius: 4px;
  }
  .professor .card2 .lib-recommend-container .list-pagination .pagination>li {
    display: inline-block;
    width:36px;
    height: 36px;
    border:2px solid rgb(31, 134, 237);
  }
  .professor .card2 .lib-recommend-container .list-pagination .pagination>li:first-child{
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  .professor .card2 .lib-recommend-container .list-pagination .pagination>li:last-child{
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    width:80px;
  }
  .professor .card2 .lib-recommend-container .list-pagination .pagination>li:last-child>a{
    width:80px;
    color:#fff;
    background-color: #1f86ed;
  }
  .professor .card2 .lib-recommend-container .list-pagination .pagination>li:first-child>a{
    background-color: #1f86ed;
    color:#fff;
  }
  .professor .card2 .lib-recommend-container .list-pagination .pagination>li>a{
    color: #1f86ed;
    border-color: #1f86ed;
    margin-left: 0;
    margin-right: 5px;
    border-width: 2px;
    font-weight: 700;
    display: block;
    width: 36px;
    height: 36px;
    text-align:center;
    line-height: 36px;
  }
</style>
