// 入口文件
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './app.vue'

/*
import './assets/styles/test.css'
import  './assets/images/23c33fc14463b2b68f4528242994c47e.jpg'
import  './assets/images/d72f85541d70195c07c1741fe337639b.jpg'
import  './assets/styles/test-styles.styl'
*/

import './assets/styles/global.styl'
import createRouter from './config/router'
Vue.use(VueRouter)
const router=createRouter()

//路由跳转时，会触发此钩子
router.beforeEach((to,from,next)=>{
  console.log('before each invoked')
  next()
  /*if(to.fullPath === '/app'){
    /!*next('/login')*!/
    next({path:'/login'})
  }else{
    next()
  }*/

})
router.beforeResolve((to,from,next)=>{
   console.log('before resolve invoked')
   next()
})
router.afterEach((to,from)=>{
   console.log('after each invoked')
})

/*const root = document.createElement('div')
document.body.appendChild(root)*/
new Vue({
  router,
  render: (h) => h(App)
}).$mount('#root')
