<template>
  <div class="main-entrance">
    <div
      v-for="item in service"
      :key="item.icon"
      :style="{backgroundColor:item.color}"
    >
      <p class="main-ent-box">
        <i
          class="icon"
          :style="{backgroundImage:'url('+item.icon+')'}"
        ></i><span class="enter-try">{{item.theme}}</span>
        <br>
        <span class="line-title">{{item.advertise}}</span>
      </p>
    </div>

  </div>
</template>

<script>
import { address } from '@/util/address.js'

export default {
  name: 'BannerTitle',
  data () {
    return {
      service: [
        {
          icon: address('img/home/join-icon.png'),
          theme: '我要入驻',
          advertise: '商家、配送、城市代理、服务市场',
          color: '#658ef7'
        },
        {
          icon: address('img/home/timer-icon.png'),
          theme: '开发者接入',
          advertise: '餐饮开发平台',
          color: '#f54c45'
        }, {
          icon: address('img/home/fork-icon.png'),
          theme: '我要点外卖',
          advertise: '快下单，一键点餐',
          color: '#ffbd28'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.main-entrance {
  display: flex;
  justify-content: center;
  div {
    width: 333px;
    height: 170px;
    position: relative;
    top: -70px;
    display: flex;
    align-items: center;
    transition: all 0.5s;
    .main-ent-box {
      height: 59px;
      width: 100%;
      // background-color: red;
      text-align: center;
      position: relative;
      .icon {
        display: inline-block;
        width: 30px;
        height: 30px;
        vertical-align: middle;
        background-size: 100%;
        background-position: center;
      }
      .enter-try {
        display: inline-block;
        height: 34px;
        vertical-align: middle;
        font-size: 26px;
        color: #ffffff;
        margin-left: 15px;
      }
      .line-title {
        display: inline-block;
        width: 100%;
        height: 15px;
        position: absolute;
        bottom: 0px;
        left: 0px;
        line-height: 15px;
        color: #ffffff;
      }
    }
    &:hover {
      transform: scaleY(1.1);
      box-shadow: 0 5px 3px rgba(0, 0, 0, 0.1);
    }
  }
}
</style>
