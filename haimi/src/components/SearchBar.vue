<template>
<div class="search-bar" :class='[theme]'>
  <div class="search_text">
    <span class="icon_search ico"><i class="iconfont icon-sousuo2"></i></span>
    <input type="text" placeholder="搜索宝贝" v-model='searchVal'/>
    <a href="javascript:;" v-show="clearFlag" class="clear-text" @click="clearText">&times;</a>
  </div> 
  <!--<router-link :to="'/search/'+searchVal">搜索</router-link>--> 
  <!--<div class="search_submit" @click="searchFn">搜索</div>-->
  <router-link :to="{name:'Search',params:{'searchVal':searchVal}}">搜索</router-link>
</div>
</template>
<script>
  export default {
    name: 'SearchBar',
    props: {
      theme: {
        default: 'black'
      },
      defaultVal: {
        default: ''
      }
    },
    data () {
      return {
        searchVal: this.defaultVal
      }
    },
    computed: {
      clearFlag () {
        return this.searchVal.length >= 1
      }
    },
    methods: {
      clearText () {
        this.searchVal = ''
      },
      searchFn () {
        // console.log('我点击了')
        this.$emit('searchCallback', this.searchVal)
      }
    }
  }
</script>
<style scoped lang="less">
  button,input{
  border:none;
  outline:none;
  background:none;
}
.search-bar{
  width:100%;
  height:.4rem;
  background:#242424;
  display:flex;
  justify-content:center;
  align-items:center;
  box-sizing:boder-box;
  .ico{
    display: block;
    width: .25rem;
    height: .25rem;
  }
  .search_text{
    display:-webkit-box;
    flex:1;
    margin:0 0rem 0 .1rem;
    position:relative;
    background:#1a1a1a;
    .clear-text{
      display: block;
      height: .15rem;
      font-size: .2rem;
      line-height: .15rem;
      border-radius: 50%;
      color: #000;
      background: #ccc;
      overflow: hidden;
      width: .15rem;
      margin-top: 2px;
      margin-left: 2px;
      position:absolute;
      right:.05rem;
      top:.03rem
    }
    input{
      display:flex;
      height:.25rem;
      flex:1;
      align-items:center;
      font-size:.14rem;
      text-indent:.1rem;
    }
  }
  &.black{
    background:#242424;
    input{
      color:#fff;
    }
  }
  &.white{
    background:#fff;
    input{
      color:#000;
    }
  }
   .search_submit{
    width:.5rem;
    font-size:.14rem;
    color:#ffffff;
  }
}

</style>