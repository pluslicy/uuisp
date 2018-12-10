<template>
  <div id="app">
    <!-- 头部 -->
    <Header></Header>
    <!-- 体部 -->
    <div class="content">
      <router-view/>
    </div>
    <!-- 底部 -->
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
  name: 'App',
  components:{
    Header,
    Footer
  }
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
div,p,h1,h2,h3,ul{
	box-sizing: border-box;
}
ul,ol{
  list-style: none;
}
a {
  color: #707070;
  text-decoration: none;
}
#app .content{
  padding: 0 0 1em 0;
}
/* #app .content{
  width: 1240px;
  margin: 0 auto;
} */
/*... */
</style>
