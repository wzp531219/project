<template>
  <div class='tab-bar'>
  <nav class='nav'>
    <a 
      href="javascript:;" 
      v-for='item in navList' 
      :class="{active: activeIndex == item.id}"
      :key="item.id"
      @click="tabClick(item.id,item.type)"
      >{{item.name}}
    </a>
  </nav>
  </div>
</template>
<script>
   export default {
     data () {
       return {
         activeIndex: 0
       }
     },
     props: {
       navList: {
         default: []
       }
     },
     methods: {
       tabClick (id, type) {
         let typeId = type === 1 ? 'Hot' : 'LabelPage'
         this.activeIndex = id
         this.$emit('setTemplate', typeId, id)
       }
     }
   }
</script>
<style scoped lang="less">
  .tab-bar{
    width: 200%;
    height: .45rem;
    background:#fff;
    display:flex;
    justify-content: center;
    align-items: center;
  }
  .nav{
    width: 200%;
    height:100%;
    line-height:.45rem;
    display: -webkit-box;
    overflow-x: scroll;
    a{
      font-size: .16rem;
      width:10%;
      height:100%;
      display: block;
      position:relative;
     &.active{
        &::after{
          content:'';
          width:100%;
          height:2px;
          line-height:.45rem;
          background:#000;
          display:block;
          position:absolute;
          bottom:0;
          left:0;
        }
     }
    }
  }

</style>