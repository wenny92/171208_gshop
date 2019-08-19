/**
 * 路由器对象模块
 * 最终，要向外暴露一个路由器对象
 */
/**
 * 路由器对象怎么创建？
 * 首先要引入一些东西
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import MSite from '../pages/MSite/MSite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'
// 声明使用插件
Vue.use(VueRouter)
/**
 * VueRouter是个什么类型？
 *  构造函数，
 *  new一个VueRouter,传一个配置对象，
 *    配置里边配置什么？
 *      配路由routes，而且是所有路由。所有路由是多个，是数组类型。数组每一个元素就代表着一个路由的配置
 *      单个路由应该是对象类型，对象里边有两个属性path、component。path路径最后用小写
 *    默认显示msite，配置{path:'/',redirect:'/msite'}
 *
 * 路由器创建出来了，它被用上了吗？没，下一步把路由器给映射上，在main.js中引入
 */
export default new VueRouter({
  // 所有路由
  routes: [
    {
      path: '/',
      redirect: '/msite'
    },
    {
      path: '/msite',
      component: MSite,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/login',
      component: Login
    }
  ]
})
