import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Zoom from '@/views/Zoom'
import Search from '@/views/Search'
import Sort from '@/views/Sort'
import My from '@/views/My'
import ShopCart from '@/views/ShopCart'
import Login from '@/views/Login'

Vue.use(Router)
var router = new Router({
  // scrollBehavior (to, from, savedPosition) {
  //   // return 期望滚动到哪个的位置
  //   return {
  //     x: 0,
  //     y: savedPosition.y
  //   }
  // },
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/zoom',
      name: 'Zoom',
      component: Zoom
    },
    {
      path: '/sort',
      name: 'Sort',
      component: Sort
    },
    {
      path: '/my',
      name: 'My',
      component: My,
      meta: {
        isAuth: true
      }
    },
    {
      path: '/shopCart',
      name: 'ShopCart',
      component: ShopCart,
      meta: {
        isAuth: true
      }
    },
    {
      path: '/search/:searchVal',
      name: 'Search',
      component: Search
    },
    {
      path: '/login',
      name: 'Login',
      query: {
        localStorageCbk: ''
      },
      component: Login
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.meta.isAuth) {
    if (window.localStorage.getItem('userInfo')) {
      console.log(window.localStorage.getItem('userInfo'))
      next()
    } else {
      next({
        path: '/login',
        query: {
          localStorageCbk: to.path
        }
      })
    }
  } else {
    next()
  }
})
export default router
