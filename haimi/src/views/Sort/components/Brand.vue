<template>
 <div class='tab-bar'>
   <div class='picWord'>
    <ContentBox title='大家都在买'>
      <Product :ProductData='ProductData'></Product>
    </ContentBox>
   </div>
 </div>
</template>
<script>
import Product from '@/components/Product'
export default {
  props: ['pageId'],
  data () {
    return {
      ProductData: []
    }
  },
  components: {
    Product
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
</style>