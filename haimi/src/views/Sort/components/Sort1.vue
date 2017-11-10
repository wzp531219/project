<template>
 <div class='sort-bar'>
   <div class='imgWord' v-for='(item, index) in sortList'>
      <div class='sortBanner'>
       <img :src="item.img"/>
      </div>
      <div class='searchList'>
        <span v-for='list in item.text'>{{list}}</span>
      </div>
   </div>
 </div>
</template>
<script>
export default {
  data () {
    return {
      sortList: [
        {
          name: 'meizhuang',
          img: '//img.haimi.com/FloxuBkDf7JLo-AtEqLGRRnhAxJn',
          text: [
            '面膜', '面膜乳液', '眼霜', '精华', '爽肤水', '卸妆', '洁面', '隔离', '精油'
          ]
        },
        {
          name: 'meizhuang',
          img: '//img.haimi.com/FoXDKmO-JoZqbHyGfCcOQFeb0Jit',
          text: [
            '面膜', '面膜乳液', '眼霜', '精华', '爽肤水', '卸妆', '洁面', '隔离', '精油'
          ]
        },
        {
          name: 'meizhuang',
          img: '//img.haimi.com/FgHw-Qt_o8Dpt6Xj9Yq7TXuldwZ6',
          text: [
            '面膜', '面膜乳液', '眼霜', '精华', '爽肤水', '卸妆', '洁面', '隔离', '精油'
          ]
        },
        {
          name: 'meizhuang',
          img: '//img.haimi.com/FgHw-Qt_o8Dpt6Xj9Yq7TXuldwZ6',
          text: [
            '面膜', '面膜乳液', '眼霜', '精华', '爽肤水', '卸妆', '洁面', '隔离', '精油'
          ]
        },
        {
          name: 'meizhuang',
          img: '//img.haimi.com/FgHw-Qt_o8Dpt6Xj9Yq7TXuldwZ6',
          text: [
            '面膜', '面膜乳液', '眼霜', '精华', '爽肤水', '卸妆', '洁面', '隔离', '精油'
          ]
        },
        {
          name: 'meizhuang',
          img: '//img.haimi.com/FgHw-Qt_o8Dpt6Xj9Yq7TXuldwZ6',
          text: [
            '面膜', '面膜乳液', '眼霜', '精华', '爽肤水', '卸妆', '洁面', '隔离', '精油'
          ]
        },
        {
          name: 'meizhuang',
          img: '//img.haimi.com/FgHw-Qt_o8Dpt6Xj9Yq7TXuldwZ6',
          text: [
            '面膜', '面膜乳液', '眼霜', '精华', '爽肤水', '卸妆', '洁面', '隔离', '精油'
          ]
        },
        {
          name: 'meizhuang',
          img: '//img.haimi.com/FgHw-Qt_o8Dpt6Xj9Yq7TXuldwZ6',
          text: [
            '面膜', '面膜乳液', '眼霜', '精华', '爽肤水', '卸妆', '洁面', '隔离', '精油'
          ]
        },
        {
          name: 'meizhuang',
          img: '//img.haimi.com/FgHw-Qt_o8Dpt6Xj9Yq7TXuldwZ6',
          text: [
            '面膜', '面膜乳液', '眼霜', '精华', '爽肤水', '卸妆', '洁面', '隔离', '精油'
          ]
        }
      ]
    }
  }
}
</script>
<style scoped lang="less">
  .sort-bar{
    width:100%;
  }
  .imgWord{
    width:100%;
    padding:.1rem 0;
  }
  .sortBanner{
    width:100%;
    img{
      width:100%;
      height:100%;
    }
  }
  .searchList{
     width:100%;
     display:flex;
     flex-wrap:wrap;
    span{
      border:1px solid #ccc;
      display:-webkit-box;
      padding:.1rem .2rem;
      margin:.06rem;
      text-align:center;
    }
  }
</style>