<template>
<div class='changeNav'>
  <div class='sortNav'>
    <a v-for='(item,index) in changeTab' @click='clickTab(item.id,item.type)' :class="{on:onIndex==index}">{{item.text}}</a>
  </div>
</div>
</template>
<script>
  export default ({
    props: {
      changeTab: {
        default: []
      }
    },
    data () {
      return {
        onIndex: 0
      }
    },
    methods: {
      clickTab (ind, typeId) {
        let typeStr = typeId === 1 ? 'Sort1' : 'Brand'
        this.onIndex = ind
        this.$emit('isTemplate', typeStr, ind)
      }
    }
  })
</script>
<style lang="less">
  .changeNav{
    width:100%;
    display:-webkit-box;
    justify-content:center;
    .sortNav{
      width:50%;
      height:.4rem;
      display:flex;
      text-align:center;
      justify-content:space-between;
      align-items:center;
      a{
        flex:1;
        position:relative;
        line-height:.4rem;
        display:block;
        &.on{
          &::after{
            content:"";
            width:100%;
            height:2px;
            background:#000;
            position:absolute;
            bottom:0;
            left:0;
            display:-webkit-box;
          }
        }
      }
    }
    
  }
</style>