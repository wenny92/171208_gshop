<template>
  <div id="app">
    <router-view />
    <FooterGuide v-show="$route.meta.showFooter"></FooterGuide>
  </div>
</template>

<script>
// 引入
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
export default {
  name: 'App',
  // 映射成标签
  components: {
    FooterGuide
  }
}

</script>

<style lang="stylus" rel="stylesheet/stylus">
#app
  width 100%
  height 100%
  background #f5f5f5
</style>
