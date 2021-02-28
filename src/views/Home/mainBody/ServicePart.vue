<template>
  <div class="ServicePart">
    <div class="left">
      <!-- 列表1的标题 -->
      <HomeAnimate
        height="40px"
        className="box2"
      >
        <div
          class="title"
          slot="insertAni"
        >品类全覆盖,应有尽有</div>
      </HomeAnimate>

      <!-- 类型菜单 -->
      <div class="classfiy">
        <div
          v-for="(item,index) in classfiyService"
          :key="item.icon"
          @mouseenter="traffic(index)"
          @mouseleave="trafficleave()"
        >
          <HomeAnimate
            height="85px"
            :className="'classfiy'+index"
          >
            <CateGroy
              :createIndex="index"
              :CateGroyIndex="PhoneIndex"
              :CateGroyService="item"
              slot="insertAni"
            ></CateGroy>
          </HomeAnimate>
        </div>

      </div>
    </div>
    <div class="right">
      <div class="PhoneMove">
        <HomeAnimate
          height="671px"
          className="PhoneBox"
        >
          <Phone
            slot="insertAni"
            :PhoneImage="PhoneImg"
            :Phone="PhoneIndex"
          ></Phone>
        </HomeAnimate>
      </div>

    </div>
  </div>
</template>

<script>
import HomeAnimate from '@/components/context/HomeAnimation'
import CateGroy from './children/CateGroy'
import Phone from './children/Phone'
import { address } from '@/util/address.js'

export default {
  name: "ServicePart",
  data () {
    return {
      classfiyService: [
        {
          icon: "el-icon-fork-spoon",
          fashion: "美食Delicacy",
          title: "大牌优惠",
        }, {
          icon: "el-icon-coffee",
          fashion: "甜点饮品Desserts&Drinks",
          title: "幸福甜蜜"
        }, {
          icon: "el-icon-apple",
          fashion: "水果生鲜Fresh foods",
          title: "新鲜速达",
        }, {
          icon: "el-icon-office-building",
          fashion: "超市便利Supermarket",
          title: "优惠促销"
        }
      ],
      PhoneImg: address('img/home/phone-hull.png'),
      PhoneIndex: 0,
      timer: null
    }
  },
  components: {
    HomeAnimate,
    CateGroy,
    Phone
  },
  methods: {
    traffic (index) {
      clearInterval(this.timer)
      this.PhoneIndex = index
    },
    triggerChange () {
      var that = this
      this.timer = setInterval(function () {
        that.PhoneIndex++
        if (that.PhoneIndex === 4) {
          that.PhoneIndex = 0
        }
      }, 2000)
    },
    trafficleave () {
      this.triggerChange()
    }
  },
  mounted () {
    this.triggerChange()
  }
}
</script>

<style lang="less" scoped>
.ServicePart {
  width: 1000px;
  height: 695px;
  margin: 0 auto;

  display: flex;
  .left {
    width: 638px;
    height: 100%;

    .title {
      font-size: 40px;
      margin-top: 20px;
      text-align: left;
      padding-bottom: 30px;
    }
    .classfiy {
      margin-top: 60px;
      & > div {
        width: 100%;
        height: 85px;
      }
    }
  }
  .right {
    flex: 1;
    height: 100%;
    position: relative;
    z-index: 100;
    .PhoneMove {
      width: 310px;
      height: 670px;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }
}
</style>
