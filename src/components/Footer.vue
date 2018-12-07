<template>
  <div class="footer footer-footer">
    <div class="footer-wrapper">
      <div class="footer-mes">

        <ul>
          <li>
            <a href="javascript:void(0)">关于迈科技</a>
            <a href="javascript:void(0)">合作站</a>
            <a href="javascript:void(0)">加入我们</a>
          </li>
          <li>
            <h4>企业服务</h4>
            <ul>
              <li style="padding:5px 0"><a href="javascript:void(0)">企动力服务</a></li>
              <li style="padding:5px 0"><a href="javascript:void(0)">年费会员</a></li>
            </ul>
          </li>
          <li>
            <h4>联系我们
            <span style="font-size:16px;color:#999;">（工作日 9:30-18:30）</span>
            </h4>
            <p style="padding-top:5px;">
              客服电话：
              <em>400-000-1786</em>
            </p>
            <p>
              邮箱：service@metalab.cn
            </p>
            <p>
              地址：上海市浦东新区祥科路58号炬芯研发大楼A栋4楼
            </p>
          </li>
          <li style="width: 144px;text-align: center;">
            <h4 style="width: 144px;">
              <a href="javascript:void(0)" style="font-weight:bold;">官方微信</a>&nbsp;|&nbsp;<a href="javascript:void(0)" style="font-weight:normal;">公众号</a>
            </h4>
            <img src="https://maikeji.cn/images/wx-qrcode.jpg" alt="">
          </li>
        </ul>

        <div class="friendships">
          <ul>
            <li>
              <a href="http://www.most.gov.cn/" target="_blank">国家科学技术部</a>
            </li>
            <li>
              <a href="http://www.sipo.gov.cn/" target="_blank">国家知识产权局</a>
            </li>
            <li>
              <a href="http://www.cas.cn/" target="_blank">中国科学院</a>
            </li>
            <li>
              <a href="http://www.nast.org.cn/" target="_blank">国家科技成果网</a>
            </li>
            <li>
              <a href="http://www.xincailiao.com/" target="_blank">新材料在线</a>
            </li>
            <li>
              <a href="http://www.greentechbank.com" target="_blank">绿色技术银行</a>
            </li>
            <li>
              <a href="http://www.tansoole.com/" target="_blank">泰坦科技实验室整体解决方案领导者</a>
            </li>
          </ul>
        </div>
      </div>
      
    </div>
    <div>
      <div class="footer-info">
        Copyright © 沪ICP备15000929号-1 | 上海UUISP信息科技有限公司 | 021-54336693
        <a href="javascript:void(0)">注册条款</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style>
  .footer-footer{
    position: relative;
    bottom: 0;
    width: 100%;
    min-width: 1240px;
    height: 327px;
    background-color: #2c2c2c;
  }
  .footer-footer .footer-wrapper{
    max-width: 1240px;
    margin: 0 auto;
    background-color: #2c2c2c;
    height: 295px;
    padding-top: 20px;
  }
  /* footer-mes */
  .footer-footer .footer-wrapper .footer-mes{
    background-color: #2c2c2c;
  }
  .footer-footer .footer-wrapper .footer-mes>ul{
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  .footer-footer .footer-wrapper .footer-mes>ul:first-child>li>a{
    margin-top: 10px;
    margin-bottom: 20px;
    font-size: 18px;
    color: #fff;
    display: block;
    height: 25px;
  }
  .footer-footer .footer-wrapper .footer-mes>ul h4{
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.1;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .footer-footer .footer-wrapper .footer-mes>ul h4 a{
    display: inline-block;
    color: #fff;
    font-weight: normal;
  }
  .footer-footer .footer-wrapper .footer-mes em{
    color: #1f86ed;
    font-size: 24px;
    font-style: normal;
  }
  .footer-footer .footer-wrapper .footer-mes p{
    margin: 0 0 10px;
  }
  .footer-footer .footer-wrapper .footer-mes img{
    margin-top: 10px;
    margin-bottom: 20px;
    width: 115px;;
    vertical-align: middle;
  }
  .footer-footer .footer-wrapper .friendships{
    border-top: 1px solid #999;
    padding-top: 10px;
    padding-bottom: 10px;
    color: #999 !important;
    font-size: 14px;
    height: 81px;
  }
  .footer-footer .footer-wrapper .friendships ul{
    margin: 0 auto;
    width: 800px;
    text-align: center;
    padding-left: 0;
    list-style: none;
  }
  .footer-footer .footer-wrapper .friendships ul li{
    display: inline-block;
    min-width: 174px;
    padding: 5px 0;
  }
  /* footer-info */
  .footer-info{
    background: #000;
    font-size: 12px;
    text-align: center;
    line-height: 32px;
  }
  .footer-info>a{
    display: inline-block;
    margin-left: 20px;
    color: #fff;
  }
</style>

