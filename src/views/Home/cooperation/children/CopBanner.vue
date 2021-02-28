<template>
  <div>
    <el-carousel
      :interval="5000"
      arrow="always"
      height="492px"
      class="CopBanner"
      indicator-position="outside"
    >
      <div class="bannerMask">
        <el-carousel-item
          class="story-wapper"
          v-for="item in storyData"
          :key="item.title"
        >
          <div class="content">
            <h2 class="contentTitle">{{item.paraPerson}}</h2>
            <h3 class="storyTheme">{{item.title}}</h3>
            <p class="para">{{item.storyContent}}</p>
            <el-button
              round
              size="small"
              class="particuler"
            >查看详情</el-button>
          </div>
          <div class="info_img">
            <img
              :src="item.storeImg"
              alt=""
            >
          </div>
        </el-carousel-item>
      </div>
      <div class="bak"></div>
    </el-carousel>
  </div>
</template>

<script>
import { address } from '@/util/address.js'

export default {
  name: "CopBanner",
  data () {
    return {
      storyData: [{
        paraPerson: "美团外卖骑手人物：徐振",
        title: "平凡之路上的英雄梦",
        storyContent: "我觉得自从成了美团众包骑手之后，遇到了很多有趣新奇的人和事。以前我的生活比较单调，上班、回家两点一线。加入美团众包后，认识了许多朋友，帮助了一些人也得到了一些人的帮助。美团众包，为我的生活打开了一扇新的大门。我喜欢它的弹性、自由，让我对生活有了更多的掌控......",
        storeImg: address('img/home/xz.jpg')
      }, {
        paraPerson: "美团外卖骑手人物：李君",
        title: "为减肥而成为美团兼职骑手，后来副业变“主业”",
        storyContent: "李君是11位骑手中的一位，来自内蒙古包头市，他近三个月的准时率平均达到了99.9%，满意度100。当问到他知道自己可以去俄罗斯看世界杯时是什么心情，李君说接到电话刚开始不敢相信，后来反应过来就直接飞奔回家拿上身份证就去办加急护照了。开心激动的心情久久难平复……......",
        storeImg: address('img/home/lj.jpg')
      }, {
        paraPerson: "美团服务市场",
        title: "米粉面馆接入经营助手服务，收入增幅达51.52%",
        storyContent: "开一家店有多操心？加盟、选址、经营、管理到真正赚钱，期间的辛苦只有每家店老板才深有体会。美团服务市场聚集垂直领域优质服务商，打造一站式服务生态！从新店开业到老店升级、从店铺装修到营销托管、从食材供应到金融服务等，为所有商家提供店铺经营全方位服务，解决经营所遇难题，助力轻松做生意。......",
        storeImg: address('img/home/mt.jpg')
      }]
    }
  }
}
</script>

<style lang="less" scoped>
.CopBanner {
  margin-top: 100px;
  .bak {
    width: 758px;
    height: 420px;
    background-color: #fe7a49;

    margin-left: 310px;
    overflow: hidden;
  }
}

.bannerMask {
  clear: both;
  overflow: hidden;
  width: 960px;
  height: 360px;
  position: absolute;
  top: 30px;
  left: 80px;
}

.story-wapper {
  width: 960px;
  height: 360px;
  display: flex;
  background-color: #fff;
  .content {
    width: 580px;
    height: 100%;
    padding-left: 40px;
    padding-top: 20px;
    position: relative;
    .contentTitle {
      position: relative;
      padding-left: 43px;
      font-size: 16px;
      font-weight: 400;
      &::before {
        content: '';
        background-image: url('http://47.99.214.122:8000/img/home/star.png');
        width: 33px;
        height: 38px;
        position: absolute;
        top: 50%;
        left: 0px;
        transform: translateY(-50%);
        background-size: 100%;
      }
    }
    .storyTheme {
      margin-top: 20px;
    }
    .para {
      color: #888b7a;
      font-size: 16px;
      line-height: 28px;
      padding-right: 43px;
    }
  }
  .info_img {
    width: 385px;
    // flex: 1;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
}

.particuler {
  border-color: #ffcf61;
  color: #ffcf61;
  position: absolute;
  // bottom: 35px
  bottom: 40px;
  left: 40px;
}
</style>
