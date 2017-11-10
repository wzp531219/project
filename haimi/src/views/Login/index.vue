<template>
 <div class='login-bar'>
  <div class='title'>
    <h1>请输入手机号码验证码直接登录</h1>
  </div>
  <div class='form'>
    <p class='phone'>
      <label>手机号:</label>
      <input type='text' v-model='phone'/>
      <span class='close' v-show='clearFlag'>&times;</span>
    </p>
    <p class='pwd'>
      <label>验证码:</label>
      <input type='password' v-model='pwd'/>
      <button id='sendPwd'>发送验证码</button>
    </p>
    <button id='loginOk' @click='loginBtn'>登录</button>
  </div>
 </div>
</template>
<script>
  export default {
    data () {
      return {
        phone: '',
        pwd: ''
      }
    },
    computed: {
      clearFlag () {
        return this.phone.length >= 1
      }
    },
    methods: {
      loginBtn () {
        console.log(111)
        window.localStorage.setItem('userInfo', JSON.stringify({
          phone: this.phone
        }))
        this.$router.push(this.$route.query.localStorageCbk)
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
.login-bar{
  width:100%;
  .title{
    width:100%;
   h1{
      height:.4rem;
      line-height:.4rem;
      background:#fff9f3;
      color:#991f33;
   }
  }
  .form{
    width:100%;
    p{
      width:96%;
      margin-left:2%;
      height:.5rem;
      display: -webkit-box;
      line-height:.5rem;
      border-bottom:.01rem solid #eee;
      &:nth-child(1) {
        position:relative;
      }
      &:nth-child(2) {
        position:relative;
        #sendPwd{
          width:1rem;
          position:absolute;
          right:.2rem;
          bottom:.1rem;
          color:#991f33;
        }
      }
      label{
        text-indent:.2rem;
      }
    }
    
    .close{
      display: block;
      height: .2rem;
      font-size: .2rem;
      position:absolute;
      right:.1rem;
      line-height: 0;
      bottom:.1rem;
      color:#fff;
      line-height:.2rem;
      overflow: hidden;
      width: .2rem;
      background: #ccc;
      border-radius:50%;
      display:none;
    }
    #loginOk{
      width:90%;
      margin-top:.2rem;
      color:#fff;
      height:.4rem;
      background:#991f33;
    }
  }
}
</style>