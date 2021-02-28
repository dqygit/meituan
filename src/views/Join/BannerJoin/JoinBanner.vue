<template>
  <div
    class="JoinBanner"
    :style="{backgroundImage:'url('+BannerImage+')'}"
  >

  </div>
</template>

<script>
import { address } from '@/util/address.js'
export default {
  name: 'JoinBanner',
  data () {
    return {
      BannerImage: address('img/join/joinBanner.png')
    }
  }
}
</script>

<style lang="less" scoped>
.JoinBanner {
  margin-top: 70px;
  width: 100%;
  height: 320px;
  background-size: 100%;
  margin-bottom: 70px;
  background-repeat: no-repeat;
}
</style>
