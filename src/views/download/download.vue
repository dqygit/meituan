<template>
  <div class="download">
    <pageList1 />
    <pageList2 />
  </div>
</template>

<script>
import pageList1 from './pageList1/pageLIst1'
import { address } from '@/util/address.js'
import pageList2 from './pageList2/pageList2'

export default {
  name: 'download',
  components: {
    pageList1,
    pageList2
  }
}
</script>

<style lang="less" scoped>
.download {
  margin-top: 70px;
  width: 100%;
}
</style>
