<template>
  <div
    class="pageList2"
    :style="{backgroundImage:'url('+pageListImage+')'}"
  ></div>
</template>

<script>
import { address } from '@/util/address.js'
export default {
  name: 'pageList',
  data () {
    return {
      pageListImage: address('img/download/download_2.png')
    }
  }
}
</script>

<style lang="less" scoped>
.pageList2 {
  width: 1349px;
  height: 640px;
  background-color: red;
  margin: 0 auto;
}
</style>
