<template>
<div class='tab-bar'>
  <div class="banner">
    <swiper :options="swiperOption" :not-next-tick="notNextTick" ref="mySwiper">
      <swiper-slide v-for='item in bannerList'>
        <img :src='item.img' />
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
      <div class="swiper-scrollbar"   slot="scrollbar"></div>
    </swiper>
  </div>
</div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  props: {
    bannerList: {
      default: []
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  name: 'carrousel',
  data () {
    return {
      // NotNextTick is a component's own property, and if notNextTick is set to true, the component will not instantiate the swiper through NextTick, which means you can get the swiper object the first time (if you need to use the get swiper object to do what Things, then this property must be true)
      // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
      notNextTick: true,
      swiperOption: {
      // swiper options 所有的配置同swiper官方api配置
        autoplay: 1000,
        grabCursor: true,
        setWrapperSize: true,
        autoHeight: true,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next',
        scrollbar: '.swiper-scrollbar',
        mousewheelControl: true,
        observeParents: true,
        // if you need use plugins in the swiper, you can config in here like this
        // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
        debugger: true,
        // swiper callbacks
        // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
        onTransitionStart (swiper) {
        }
      }
    }
  }
}
</script>
<style scoped lang="less">
  .banner{
    width:100%;
    div{
      img{
        width:100%;
        height:100%;
      }
    }
  }
  
  .imgOrder{
    width:100%;
    margin:.08rem 0 0 0;
    img{
        width:100%;
        height:100%;
    }
  }
  .detail{
    width:100%;
    h1{
      width:100%;
      height:.4rem;
      font-size:.16rem;
      line-height:.4rem;
      border-bottom:.02rem solid #eee;
    }
    .detail_img{
      width:100%;
      display:flex;
      .detail_l{
        width:50%;
      a{
          img{
            width:100%;
            height:100%;
          }
        }
      }
      .detail_r{
        width:50%;
        img{
          width:100%;
          height:100%;
        }
      }
    }
  }
</style>