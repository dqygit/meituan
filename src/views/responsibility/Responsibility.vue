<template>
  <div>
    <div class="responsibility">
      <header_new />
    </div>
    <div class="thoughtBody">
      <thought class="thought-item" />
    </div>
    <div class="action">
      <action />
    </div>
    <div class="report">
      <Report />
    </div>
  </div>
</template>

<script>
import header_new from './header_new/header_new'
import thought from './thought/thought'
import action from './action/action'
import Report from './report/Report'

export default {
  name: 'Responsibility',
  components: {
    header_new,
    thought,
    action,
    Report
  }
}
</script>

<style lang="less" scoped>
.responsibility {
  width: 100%;
  height: 560px;

  margin-top: 70px;
}

.thoughtBody {
  width: 100%;
  height: 1010px;
  // background-color: blue;
}
.action {
  height: 850px;
}
.report {
  height: 1500px;
}
</style>
