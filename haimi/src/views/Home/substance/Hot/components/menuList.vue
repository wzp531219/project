<template>
  <div class='hot-menu'>
    <div class='menulist'>
      <router-link v-for='item in menuList' to="my">
        <img :src="item.icon"/>
        <span>{{item.text}}</span>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      menuList: [
        {
          icon: '//img.haimi.com/FuPMz-_M6cc-EKholObO_ec5niTe',
          text: '新人礼包'
        },
        {
          icon: '//img.haimi.com/Fvxjun-u3MAa7vGJnbSiCXlFtepB',
          text: '领取积分'
        },
        {
          icon: '//img.haimi.com/Fi2HlhU6SOQ0GqagPJ1whoJAzg57',
          text: '邀请有礼'
        },
        {
          icon: '//img.haimi.com/Ft0Vx786oXJADIPEamFGp5vew5KY',
          text: '每周新品'
        }
      ]
    }
  }
}
</script>
<style scoped lang="less">
.hot-menu{
  width: 100%;
  background:#fff;
  
  .menulist{
    width:100%;
    display:flex;
    a{
      display:block;
      -webkit-box-flex:1;
      text-align:center;
      padding-bottom:10px;
      img{
        display: block;
        width: 100%;
        margin-bottom: 10px;
      }
    }
  }
}
</style>