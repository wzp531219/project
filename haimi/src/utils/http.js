import Vue from 'vue'
import axios from 'axios'
import vm from '../main'
let instance = axios.create({
  timeout: 1000,
  headers: {
    'X-Custom-Header': 'foobar'
  }
})
instance.interceptors.request.use(function (config) {
  console.log('请求前')
  vm.$loading.show()
  return config
}, function (error) {
  vm.$loading.hide()
  return Promise.reject(error)
})
instance.interceptors.response.use(function (response) {
  vm.$loading.hide()
  return response
}, function (error) {
  vm.$loading.hide()
  return Promise.reject(error)
})
Vue.prototype.$http = instance
export default instance
