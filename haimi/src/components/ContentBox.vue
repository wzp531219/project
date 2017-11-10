<template>
<div class='content-box'>
  <h1 class='title' v-if='title'>{{title}}</h1>
  <slot></slot>
</div>
</template>
<script>
export default {
  props: {
    title: {
      default: ''
    }
  }
}
</script>
<style lang="less">
  .content-box{
    width:100%;
     margin:.1rem 0;
    box-sizing:border-box;
    background:#f7f7f7;
    .title{
      width:100%;
      height:.4rem;
      line-height:.4rem;
    }
  }
</style>