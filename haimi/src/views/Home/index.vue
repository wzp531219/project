<template>
  <div class="home-page" v-title="'首页'">
    <SearchBar></SearchBar>
    <!--<NavBar :navList="navList" @changePage="changePage"></NavBar>-->
    <NavBar :navList="navList" @setTemplate='setTemplate' v-pin="0"></NavBar>
    <transition>
      <component :is="isTemplate" :pageId="pageId"></component>
    </transition>
    <FooterBar></FooterBar>
  </div>
</template>
<script>
  import SearchBar from '@/components/SearchBar'
  import FooterBar from '@/components/FooterBar'
  import NavBar from './components/NavBar'
  import LabelPage from './substance/Label/LabelPage'
  import Hot from './substance/Hot'
  export default {
    data () {
      return {
        navList: [
          // {
          //   text: '推荐',
          //   type: 1,
          //   id: 0
          // },
          // {
          //   text: '居家',
          //   type: 2,
          //   id: 1
          // },
          // {
          //   text: '美妆',
          //   type: 3,
          //   id: 2
          // },
          // {
          //   text: '个护',
          //   type: 4,
          //   id: 3
          // },
          // {
          //   text: '箱包',
          //   type: 5,
          //   id: 4
          // },
          // {
          //   text: '家电',
          //   type: 6,
          //   id: 5
          // },
          // {
          //   text: '厨房',
          //   type: 7,
          //   id: 6
          // },
          // {
          //   text: '配饰',
          //   type: 8,
          //   id: 7
          // },
          // {
          //   text: '零食',
          //   type: 9,
          //   id: 8
          // },
          // {
          //   text: '母婴',
          //   type: 10,
          //   id: 9
          // },
          // {
          //   text: '家具',
          //   type: 11,
          //   id: 10
          // }
        ],
        isTemplate: 'Hot',
        pageId: 0
      }
    },
    components: {
      SearchBar,
      NavBar,
      LabelPage,
      Hot,
      FooterBar
    },
    methods: {
      setTemplate (typeId, pageId) {
        this.isTemplate = typeId
        this.pageId = pageId
      }
    },
    mounted () {
      this.$router.onReady((...rest) => {
        console.log(rest)
      })
    },
    created () {
      this.$http.get('/mockUse/indexBar').then(result => {
        console.log(result.data)
        this.navList = result.data
      }, error => {
        console.log(error)
      })
    }
  }
</script>
<style lang="less">
.home-page{
  height:10000px;
}
</style>
