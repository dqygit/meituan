<template>
  <div id="app">
    <keep-alive :exclude="['Login','register']">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import tabBar from '@/views/tabBar/TabBar'

export default {
  name: 'App',
  components: {
    tabBar
  },
  mounted () {
  }
}
</script>

<style >
* {
  box-sizing: border-box;
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB',
    'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
}
</style>
