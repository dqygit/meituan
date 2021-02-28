<template>
  <div class="sectionContent">
    <div
      class="sectionItem"
      v-for="item in sectionContent"
      :key="item.upImage"
    >
      <div class="left">
        <div
          class="up"
          :style="{backgroundImage:'url('+item.upImage+')'}"
        ></div>
        <div
          class="down"
          :style="{backgroundImage:'url('+item.downImage+')'}"
        >
          <div class="text">{{item.title}}</div>
        </div>
      </div>
      <div
        class="right"
        :style="{backgroundImage:'url('+rightImage+')'}"
      ></div>
    </div>
  </div>
</template>

<script>
import { address } from '@/util/address.js'

export default {
  name: 'sectioinContent',
  data () {
    return {
      rightImage: address('img/platform/right.png'),
      sectionContent: [{
        upImage: address('img/platform/flag.png'),
        downImage: address('img/platform/first.png'),
        title: '申请入驻'
      }, {
        upImage: address('img/platform/connect.png'),
        downImage: address('img/platform/second.png'),
        title: '对接开发'
      }, {
        upImage: address('img/platform/test.png'),
        downImage: address('img/platform/third.png'),
        title: '联调测试'
      }, {
        upImage: address('img/platform/use.png'),
        downImage: address('img/platform/four.png'),
        title: '上线使用'
      }]
    }
  }
}
</script>

<style lang="less" scoped>
.sectionContent {
  width: 1140px;
  height: 186px;
  margin: 0 auto;
  margin-top: 85px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  margin-bottom: 60px;
  .sectionItem {
    width: 207px;
    height: 100%;
    display: flex;

    .left {
      width: 122px;
      height: 100%;

      background-size: 100%;
      .up {
        height: 110px;
        margin-bottom: 32px;

        background-size: 100%;
      }
      .down {
        height: 44px;
        background-size: 100%;
        .text {
          font-size: 20px;
          // text-align: center;
          padding-left: 40px;
          line-height: 44px;
        }
      }
    }
    .right {
      flex: 1;
      // background-color: yellow;
      background-size: 80%;
      background-position: center;
      background-repeat: no-repeat;
    }
  }
}
</style>
