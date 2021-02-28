<template>
  <div>
    <JoinBanner class="join"></JoinBanner>
    <Csr />
  </div>
</template>

<script>
import JoinBanner from "./BannerJoin/JoinBanner"
import Csr from './Csr/Csr'


export default {
  name: "Join",
  components: {
    JoinBanner,
    Csr
  }
}
</script>

<style lang="less" scoped>
</style>
