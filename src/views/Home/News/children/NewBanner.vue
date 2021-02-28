<template>
  <div>
    <el-carousel
      height="546px"
      direction="vertical"
      :autoplay="true"
      class="newBanner"
      @change="getIndex"
    >
      <div class="newSlide">
        <el-carousel-item
          v-for="item in newsBannerData"
          :key="item.image"
          class="newWrapper"
        >
          <div class="img-info">
            <img
              :src="item.image"
              alt=""
            >
          </div>
          <div class="content">
            <h2>{{item.title}}</h2>
            <div class="line"></div>
            <p class="para">{{item.content}}</p>
            <el-button
              class="newsBtn"
              round
              size="mini"
            >查看详情</el-button>
          </div>

        </el-carousel-item>
      </div>
      <div class="counter">{{counter | currentIndex}}</div>
      <div class="banner-background"></div>
    </el-carousel>
  </div>
</template>

<script>
import { address } from '@/util/address.js'

export default {
  name: "NewBanner",
  data () {
    return {
      newsBannerData: [{
        image: address('img/home/repid.jpg'),
        title: '保障骑手安心无忧送餐路 美团外卖首发《骑手生活安全指南》',
        content: '随着大众餐饮消费升级，外卖行业发展迅速。数据显示，2017年美团外卖日完成订单量突破2100万单，稳居行业第一，成绩背后离不开53万外卖骑手的辛勤付出。近日，美团外卖正式发布了《骑手生活安全指南》，为骑手小哥给予全面的生活安全指引，让外卖骑手送餐路上更安全。据了解，这也是配送行业首次针对骑手群体发布的全面生活安全指引。'
      }, {
        image: address('img/home/brand.jpg'),
        title: 'MINISO名创优品正式入驻美团闪购 时尚单品30分钟送达',
        content: "美团闪购与设计师品牌MINISO名创优品共同发布消息，双方即日起正式开展品牌合作，名创优品在北京、上海、广州、深圳四大城市开设的总计311家门店将全面上线美团闪购，后续合作范围还将进一步延展至全国。"
      }, {
        image: address('img/home/secure.jpg'),
        title: '专业食品安全检测团队进驻美团点评 从此舌尖安全有他们守护',
        content: '外卖订餐平台对合作商户的食品安全监察力度再次加码。近日,美团点评先后与检科测试集团有限公司、中农孚德检测技术(北京)有限公司(简称“中农孚德”)、Intertek天祥集团等......'
      }, {
        image: address('img/home/chart.jpg'),
        title: 'Trustdata发布2018上半年外卖份额数据 美团饿了么百度“631”格局三分天下',
        content: '报告显示，美团外卖以59%的市场交易额领跑行业，相当于饿了么与百度外卖市场交易额之和的1.5倍，互联网外卖行业呈现出明显的“631”格局。'
      }, {
        image: address('img/home/buyUpdate.jpg'),
        title: '美团上线闪购业务 以“快”破局助力零售升级',
        content: '7月18日，美团点评举办“以快破局•助力零售升级” 2018美团闪购发布会，正式上线美团闪购业务，涵盖超市便利、生鲜果蔬、鲜花绿植等众多品类，30分钟配送上门，24小时无间断配送。'
      }, {
        image: address('img/home/young.jpg'),
        title: '美团城市新青年 外卖骑手正能量图鉴',
        content: '一个时代的性格，是青年代表的性格；一个时代的精神，是青年代表的精神。美团外卖骑手群体正是一群努力学习提升自我，努力拼搏承担责任，努力奋斗实现梦想的现代服务业劳动者们，是新青年的典型代表。'
      }],
      counter: 0
    }
  },
  methods: {
    getIndex (index) {
      this.counter = index
    }
  },
  filters: {
    currentIndex (index) {
      if ((index + 1) < 10) {
        return '0' + (index + 1)
      } else {
        return index + 1
      }
    }
  }
}
</script>

<style lang="less" scoped>
.newBanner {
  position: relative;
  .counter {
    position: absolute;
    top: 360px;
    right: 8px;
    z-index: 200;
  }
  /deep/.el-carousel__button {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: black;
    border: 1px solid black;
    position: absolute;
  }

  /deep/.el-carousel__indicators--vertical {
    position: absolute;
    top: 400px;
    right: 8px;
  }
  .newSlide {
    z-index: 100;
    position: absolute;
    width: 378px;
    height: 500px;
    overflow: hidden;
    top: 2px;
    left: 2px;

    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    .newWrapper {
      width: 378px;
      height: 530px;
      .img-info {
        width: 100%;
        height: 215px;
        background-color: red;
      }
      .content {
        width: 100%;
        height: 285px;
        background-color: #fff;
        overflow: hidden;
        padding: 30px;
        position: relative;
        h2 {
          margin: 0px;
          height: 68px;
          overflow: hidden;
          line-height: 34px;
        }
        .line {
          width: 60px;
          height: 5px;
          background-color: #3d3d3d;
          margin: 16px 0px;
        }
        .para {
          color: #838f8d;
          font-size: 16px;
          line-height: 28px;
          height: 84px;
          // white-space: normal;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .newsBtn {
          border-color: #f1cd45;
          color: #f1cd45;
          position: absolute;
          bottom: 30px;
          left: 30px;
        }
      }
    }
  }
  .banner-background {
    position: absolute;
    width: 382px;
    height: 510px;
    background-color: #fecc51;
    right: 0px;
    bottom: 0px;
    // z-index: -1;
  }
}
</style>
