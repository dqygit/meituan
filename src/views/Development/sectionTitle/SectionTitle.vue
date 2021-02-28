<template>
  <div class="sectionTitle">
    ADVANTAGES PROCESSES
    <div class="title">{{title}}</div>
    <div class="desc">{{desc}}</div>
  </div>
</template>

<script>
export default {
  name: 'SectionTitle',
  props: {
    title: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="less" scoped>
.sectionTitle {
  height: 95px;
  text-align: center;
  font-size: 68px;
  line-height: 95px;
  color: #f9f9f9;

  position: relative;
  .title {
    height: auto;
    position: absolute;
    line-height: 28px;
    top: 25px;
    left: 50%;
    font-weight: 700;
    font-size: 28px;
    color: #000;
    transform: translateX(-50%);
    margin: 0px;
    &::before {
      content: '';
      width: 168px;
      height: 10px;
      background-color: #ffc300;
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  .desc {
    height: auto;
    position: absolute;
    line-height: 28px;
    left: 50%;
    transform: translateX(-50%);
    font-weight: 100;
    font-size: 18px;
    color: #222;
    letter-spacing: 1px;
    bottom: 0px;
  }
}
</style>
