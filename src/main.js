// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/**
 * 入口js
 */
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, // 配置router后，会有两个结果，1是多了几个组件标签，router-link等，多了两个属性可以访问。$router和$route
  components: {
    App
  },
  template: '<App/>'
})
