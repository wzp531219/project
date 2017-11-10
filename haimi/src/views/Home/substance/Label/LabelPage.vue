<template>
 <div class='tab-bar'>
  {{msg}}{{pageId}}
  <ContentBox title='推荐'>
    <Product :ProductData='ProductData'></Product>
  </ContentBox>
 </div>
</template>
<script>
import Product from '@/components/Product'
export default {
  props: ['pageId'],
  data () {
    return {
      msg: '快递费释放',
      ProductData: []
    }
  },
  watch: {
    'pageId': function () {
      this.getData()
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      console.log('获取数据' + this.pageId)
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
  },
  components: {
    Product
  }
}
</script>
<style lang="less">
  .tab-bar{
    width:100%;
  }
</style>