<template>
 <div class='tab-bar'>
   <NavBar :changeTab="changeTab" @isTemplate='isTemplate'></NavBar>
   <keep-alive>
   <component :is="isTab" :pageId='pageId'></component>
   </keep-alive> 
   <ContentBox>
    <ProductData :productData='productData'></ProductData>
   </ContentBox>
   <FooterBar></FooterBar>
 </div>
</template>
<script>
import FooterBar from '@/components/FooterBar'
import NavBar from './components/NavBar'
import Brand from './components/Brand'
import Sort1 from './components/Sort1'
import ProductData from '@/components/product'
export default {
  data () {
    return {
      changeTab: [
        {
          text: '分类',
          type: 1,
          id: 0
        },
        {
          text: '品牌',
          type: 2,
          id: 1
        }
      ],
      productData: {
        default: []
      },
      isTab: 'Sort1',
      pageId: 0
    }
  },
  methods: {
    isTemplate (typeId, pageId) {
      this.pageId = pageId
      this.isTab = typeId
    }
  },
  components: {
    NavBar,
    Brand,
    Sort1,
    FooterBar,
    ProductData
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