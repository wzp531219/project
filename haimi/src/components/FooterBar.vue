<template>
<div class="footer-bar">
  <router-link :to="item.path" v-for='item in footNav' active-class='lineght'><i class="iconfont icon-fanhuishouye"></i>{{item.text}}</router-link>
</div>
</template>
<script>
  export default {
    name: 'FooterBar',
    props: {
    },
    data () {
      return {
        footNav: [
          {text: '首页', icon: 'icon-fanhuishouye', path: 'home'},
          {text: '分类', icon: '', path: 'sort'},
          {text: '购物车', icon: '', path: 'shopCart'},
          {text: '我的', icon: '', path: 'my'}
        ]
      }
    }
  }
</script>
<style scoped lang="less">
.footer-bar{
  width:100%;
  height:.35rem;
  display:flex;
  justify-content:center;
  align-items:center;
  background:#fff;
  border-top:1px solid #eee;
  position:fixed;
  bottom:0;
  left:0;
  a{
    flex:1;
    display:flex;
    flex-direction:column;
    i{
      margin-bottom:.02rem;
    }
  }
  .lineght{
    color:red;
  }
}
</style>