<template>
  <div class="Csr">
    <CsrConponent
      :csrWidth="item.boxWidth"
      v-for="item in CsrData"
      :key="item.image"
    >
      <img
        slot="image"
        class="image"
        :src="item.image"
        alt=""
      >
      <div
        class="content"
        slot="title"
      >{{item.title}}</div>
      <div
        class="intro"
        slot="intro"
        v-html="item.intro"
      ></div>
    </CsrConponent>
  </div>
</template>

<script>
import CsrConponent from './CsrConponent'
import { address } from '@/util/address.js'

export default {
  name: "Csr",
  components: {
    CsrConponent
  },
  data () {
    return {
      CsrData: [
        {
          boxWidth: "480px",
          image: address('img/join/beef.png'),
          title: '外卖商家入驻',
          intro: '平台优势，成交量有保证'
        }, {
          boxWidth: "480px",
          image: address('img/join/food.png'),
          title: '零售商家入驻',
          intro: '超市便利店 、生鲜蔬果、药品鲜花招商'
        }, {
          boxWidth: "480px",
          image: address('img/join/person.png'),
          title: '美团配送',
          intro: '做美团骑手，当配送加盟商<br>加入美团实时配送网络，高收入高回报'
        }, {
          boxWidth: "480px",
          image: address('img/join/city.png'),
          title: '城市代理',
          intro: '开放外卖商家合作洽谈、订单配送等业务<br>帮助商家入驻美团外卖，三方合作，共享红利'
        }, {
          boxWidth: "1000px",
          image: address('img/join/super.png'),
          title: '美团服务市场',
          intro: '开为百万商家提供全品类优质服务，让生意更简单'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.Csr {
  width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 70px;
  .image {
    width: 100%;
  }
  .content {
    text-align: center;
    margin-top: 30px;
    font-size: 36px;
  }
  .intro {
    text-align: center;
    margin-top: 14px;
    font-size: 18px;
    color: #b99187;
    line-height: 26px;
  }
}
</style>
