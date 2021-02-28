<template>
  <div>
    <div class="title">{{title}}
      <div></div>
    </div>
    <div class="subtitle"> {{subtitle}}</div>
  </div>
</template>

<script>
export default {
  name: 'summaryTitle',
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="less" scoped>
.title {
  height: 55px;
  margin: 0px;
  font-size: 42px;
  line-height: 55px;
  text-align: left;
  position: relative;
  z-index: 100;
  & > div {
    position: absolute;
    width: 230px;
    height: 18px;
    background-color: #ffd161;
    bottom: 0px;
    z-index: -50;
  }
}
.subtitle {
  height: 46px;
  font-size: 24px;
  text-indent: 2em;
  line-height: 46px;
}
</style>
