<template>
  <div class="scene">
    <div
      class="sceneItem"
      v-for="item in SceneItem"
      :key="item.key"
    >
      <div
        class="sceneTtem-card"
        :style="{backgroundImage:'url('+item.image+')'}"
      >
      </div>
      <div class="Title-list">{{item.title}}</div>
      <p class="desc">{{item.desc}}</p>
      <el-link class="getmore">了解更多<i class="el-icon-arrow-right el-icon--right"></i> </el-link>
    </div>
    <div class="sceneItem">
      <div
        class="end_image"
        :style="{backgroundImage:'url('+endImage+')'}"
      ></div>
      <div class="ant-empty">
        敬请期待
      </div>
    </div>
  </div>
</template>

<script>
import { address } from '@/util/address.js'

export default {
  name: 'Scene',
  data () {
    return {
      endImage: address('img/platform/end.png')
    }
  },
  props: {
    SceneItem: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="less" scoped>
.scene {
  width: 1000px;
  height: 2530px;
  margin: 0px auto;
  margin-top: 40px;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .sceneItem {
    height: 485px;
    width: 320px;
    // background-color: yellow;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    position: relative;
    .sceneTtem-card {
      width: 100%;
      height: 262px;

      background-size: 100%;
      position: relative;
      &::before {
        content: 'NEW';
        width: 58px;
        height: 24px;
        background-color: #ffc700;
        position: absolute;
        top: 20px;
        right: -4px;
        text-align: center;
        font-size: 16px;
        line-height: 24px;
      }
    }
    .Title-list {
      position: relative;
      padding: 0 30px;
      margin-bottom: 10px;
      font-size: 26px;
      line-height: 36px;
      color: #333;
      margin-top: 20px;
      &::before {
        content: '';
        position: absolute;
        left: 0px;
        top: 9px;
        width: 8px;
        height: 18px;
        background: #ffc700;
      }
    }
    .desc {
      margin: 0;
      padding: 0 30px;
      font-size: 14px;
      line-height: 24px;
      color: #333;
      text-align: justify;
    }
    .getmore {
      position: absolute;
      right: 30px;
      bottom: 40px;
    }
  }
}
.end_image {
  width: 100px;
  height: 100px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-size: 100%;
}
.ant-empty {
  position: absolute;
  width: 100px;
  text-align: center;
  left: 50%;
  top: 300px;
  color: #999;
  transform: translateX(-50%);
}
</style>
