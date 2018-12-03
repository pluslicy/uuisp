<template>
  <div id="app">
    <!-- 头部 -->
    <div class="header">导航之类...</div>
    <!-- 体部 -->
    <router-view/>
    <!-- 底部 -->
    <div class="footer">
      关于迈科技
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/*全局样式*/
html {
  font-family: Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;
  font-size: 14px;
  color: #707070;
  word-spacing: 1px;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
}
body,ul,ol,dl,p,h1,h2,h3 {
  margin: 0;
  padding:0;
}
a {
  color: #707070;
  text-decoration: none;
}
/*... */
</style>
