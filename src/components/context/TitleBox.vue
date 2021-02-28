<template>
  <div>
    <div class="MainTitle">
      <HomeAnimate
        :height="TitleHeight"
        :className="TitleName"
      >
        <div
          slot="insertAni"
          class="title"
          :style="{backgroundImage:'url('+titleImage+')',height:TitleHeight,width:TitleWidth}"
        ></div>
      </HomeAnimate>
    </div>
  </div>
</template>

<script>
import HomeAnimate from '@/components/context/HomeAnimation'


export default {
  name: "MainTitle",
  props: {
    titleImage: {
      type: String,
      required: true
    },
    TitleHeight: {
      type: String,
      default: "127px"
    },
    TitleWidth: {
      type: String,
      default: "390px"
    },
    TitleName: {
      type: String,
      required: true
    }
  },
  components: {
    HomeAnimate
  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
.MainTitle {
  width: 1000px;
  height: 127px;
  // background-color: pink;
  margin: 0 auto;
  /deep/ .title {
    width: 390px;
    height: 100%;
    // background-size: 100%;
    background-size: 100%;
    background-repeat: no-repeat;
    margin: 0 auto;
  }
}
</style>
