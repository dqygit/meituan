<template>
  <!-- 类型菜单 -->
  <div
    class="cateGroy"
    :class="{showAnimate:createIndex===CateGroyIndex?true:false}"
  >
    <span :class="[CateGroyService.icon]"></span>
    <p
      class="CateGroyUp "
      :class="{textPick:createIndex===CateGroyIndex?true:false}"
    >{{CateGroyService.fashion}}</p>
    <p
      class="CateGroyDown"
      :class="{showAnimate:createIndex===CateGroyIndex?true:false}"
    >{{CateGroyService.title}}</p>
  </div>
</template>

<script>
export default {
  name: "CateGroy",
  props: {
    CateGroyService: {
      type: Object,
      requried: true
    },
    createIndex: {
      type: Number,
      requried: true
    },
    CateGroyIndex: {
      type: Number,
      requried: true
    }
  }
}
</script>

<style lang="less" scoped>
.showAnimate {
  color: orange !important;
}
.cateGroy {
  position: relative;
  width: 100%;
  height: 85px;
  margin-top: 10px;
  span {
    display: inline-block;
    width: 26px;
    height: 26px;
    font-size: 26px;
    vertical-align: middle;
    transition: all 0.5s;
  }
  .CateGroyUp {
    vertical-align: middle;
    display: inline-block;
    position: relative;
    height: 35px;
    font-size: 26px;
    margin: 0px;
    margin-left: 14px;
    transition: all 0.5s;
    padding-bottom: 10px;
  }
  .CateGroyDown {
    font-size: 16px;
    margin-top: 10px;
    padding-left: 40px;
    color: #998084;
    transition: all 0.5s;
  }
}

.textPick {
  font-size: 30px !important;
  padding-bottom: 10px;
}

.textPick::before {
  content: '';
  position: absolute;
  width: 200px;
  height: 3px;
  background-color: orange;
  bottom: 0px;
}
</style>
