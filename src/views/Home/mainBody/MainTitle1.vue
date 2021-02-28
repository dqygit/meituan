<template>
  <div>
    <div class="MainTitle">
      <HomeAnimate
        height="127px"
        className="box1"
      >
        <div
          slot="insertAni"
          class="title"
          :style="{backgroundImage:'url('+titleImage+')'}"
        ></div>
      </HomeAnimate>
    </div>
  </div>
</template>

<script>
import { address } from '@/util/address.js'
import HomeAnimate from '@/components/context/HomeAnimation'


export default {
  name: "MainTitle",
  data () {
    return {
      titleImage: address('img/home/serviceintro.png'),
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
