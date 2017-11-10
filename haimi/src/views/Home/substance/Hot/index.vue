<template>
<div class='hot-page'>
  <Banner :bannerList='bannerList'></Banner>
  <ContentBox>
    <MenuList></MenuList>
  </ContentBox>
  <ContentBox>
    <a href="javascript:;" class='picture'>
    <img src="//img.haimi.com/FuZ2thUrtUSVOI4W3TXZsYh3Q80b" /></a>
  </ContentBox>
  <ContentBox>
    <a href="javascript:;" class='picture'>
    <img src="//img.haimi.com/Fg2bXqQOdeN7Qsn9SMctP4LHldZ6" />
    </a>
  </ContentBox>
  <ContentBox title='严选品牌'>
   <a href="javascript:;" class='picture'>
    <img src="//img.haimi.com/Fg2bXqQOdeN7Qsn9SMctP4LHldZ6" />
    </a>
  </ContentBox>
  <ContentBox title='推荐好物'>
   <a href="javascript:;" class='picture'>
    <img src="//img.haimi.com/Fg2bXqQOdeN7Qsn9SMctP4LHldZ6" />
    </a>
  </ContentBox>
  <ContentBox title='大家都在买'>
    <Product :ProductData='ProductData'></Product>
  </ContentBox>
</div>
</template>
<script>
import Banner from './components/banner'
import MenuList from './components/menuList'
import Product from '@/components/Product'
export default {
  name: 'Hot',
  data () {
    return {
      bannerList: [],
      ProductData: []
    }
  },
  components: {
    Banner,
    MenuList,
    Product
  },
  created () {
    this.$http.get('/mockUse/hotbanner').then(result => {
      console.log(result)
      this.bannerList = result.data
    }, error => {
      console.log(error)
    })
    this.$http.get('/mockUse/ProductData', {
      params: {
        type: 0,
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
<style lang="less">
  .hot-page{
    width:100%;
  }
  .picture{
    width:100%;
    box-sizing:border-box;
    display:-webkit-box;
    img{
      width:100%;
      height:100%;
    }
    
  }
</style>