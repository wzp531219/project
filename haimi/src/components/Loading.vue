<template>
  <div class='dialog' v-show='isLoading'>
    <div class='loading-box'>
      <div><img src='../static/img/1.gif' /></div>
      <span>加载中…</span>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        isLoading: false
      }
    },
    methods: {
      show () {
        this.isLoading = true
      },
      hide () {
        this.isLoading = false
      }
    }
  }
</script>
<style scoped lang="less">
  .dialog{
    width:100%;
    height:100%;
    position:fixed;
    background:rgba(0,0,0,0.3);
    right:0;
    bottom:0;
    left:0;
    top:0;
    margin:0 auto;
    z-index:9999;
    .loading-box{
      width:100%;
      height:100px;
      position:absolute;
      left:50%;
      top:50%;
      margin-left:-50%;
      margin-top:-50px;
      div{
        width:32px;
        height:32px;
        margin:0 auto;
        img{
          width:100%;
          height:100%;
        }
      }
      span{
        display:block;
        color:#fff;
        font-size:16px;
        margin-top:20px;
      }
    }
  }
</style>