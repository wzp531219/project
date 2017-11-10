<template>
 <div class='Shop-bar'>
   <div class='cart'>
   <router-link @click='toHome' to='home'>
      <i class='iconfont icon-cart'></i>
      <p>购物车居然是空的</p>
      <span>去首页逛逛</span>
   </router-link>
   <ContentBox title='大家都在买'>
    <Product :ProductData='ProductData'></Product>
   </ContentBox>
   </div>
  <FooterBar></FooterBar>
 </div>
 
</template>
<script>
import FooterBar from '@/components/FooterBar'
import Product from '@/components/Product'
export default {
  props: ['ProductData'],
  data () {
    return {
    }
  },
  components: {
    FooterBar,
    Product
  },
  methods: {
    toHome () {
    }
  },
  created () {
    this.$http.get('/mockUse/ProductData', {
      params: {
        type: this.pageId,
        page: 1,
        pageSize: 10
      }
    }).then(result => {
      console.log(result)
      this.ProductData = result.data
    }, error => {
      console.log(error)
    })
  }
}
</script>
<style scoped lang="less">
.Shop-bar{
  width:100%;
}
.cart{
  width:100%;
  display:flex;
  justify-content:center;
  flex-direction:column;
  a{
    width:100%;
    padding:.5rem 0;
    line-height:.3rem;
    i{
     
    }
    span{
      width:1rem;
      display:block;
      padding:0rem .1rem;
      line-height:.2rem;
      text-align:center;
      color:#000;
      border:1px solid #000;
      margin:0 auto;
    }
  }
}
</style>