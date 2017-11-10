<template>
  <div class="product-box">
    <router-link to="#" v-for="(item, index) in ProductData" :key="index">
      <img :src="item.img" />
      <aside class='aside'>
        <h3>{{item.index}}{{item.title}}</h3>
        <p>￥{{item.price}}</p>
      </aside>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Product',
  props: ['ProductData']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.product-box{
  display: flex;
  flex-wrap: wrap;
  background: #f7f7f7;
  overflow: hidden;
  img{
    width:100%;
    height:100%;
    margin:0rem 0rem 0rem 0.05rem;
  }
  .aside{
    display: block;
    width: 100%;
    padding: 10px;
    background: #fff;
    box-sizing: border-box;
    margin:0rem 0rem 0.1rem 0.05rem;
  }
  }
</style>
