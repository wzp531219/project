import Loading from '@/components/Loading'
export default {
  install (Vue, options) {
    let LoadingCom = Vue.extend(Loading)
    let loadingV = ''
    Vue.prototype.$loading = {
      show () {
        if (!loadingV) {
          loadingV = new LoadingCom()
          loadingV.$mount('#loading-box')
        }
        console.log('显示')
        loadingV.show()
      },
      hide () {
        console.log('隐藏')
        loadingV.hide()
      }
    }
  }
}
