<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view/>
    <div id='loading-box'></div>
  </div>
</template>

<script>
import './utils/http'
import './static/less/reset.css'
import './static/iconfont/iconfont.css'
import 'swiper/dist/css/swiper.css'
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow:auto;
  display:flex;
  flex-direction:column;
  background:#eee;
  margin:0 auto;
}
</style>
