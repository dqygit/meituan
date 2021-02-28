<template>
  <div>
    <el-row
      type="flex"
      justify="center"
    >
      <el-col
        class="action"
        :span="24"
      >
        <summaryTitle
          title="我们在行动"
          subtitle="  ———  美团外卖持续探索业务链条中各利益相关方关注的内容"
        ></summaryTitle>
        <div
          class="circle_components"
          :style="{backgroundImage:'url('+circleImage+')'}"
        >
          <p class="words">拆解业务链条<br>识别风险因素<br>制定保障措施</p>
          <div class="card1">
            <card_item
              card_icon="el-icon-user-solid"
              card_word="用户"
            ></card_item>
          </div>

          <div class="card2">
            <card_item
              card_icon="el-icon-refresh"
              card_word="循环利用"
            ></card_item>
            <card_item
              card_icon="el-icon-s-home"
              card_word="商户"
            ></card_item>
          </div>
          <div class="card3">
            <card_item
              card_icon="el-icon-delete"
              card_word="外卖垃圾分类"
            ></card_item>
            <card_item
              card_icon="el-icon-bicycle"
              card_word="骑士"
            ></card_item>
          </div>
          <div class="card4">
            <card_item
              card_icon="el-icon-fork-spoon"
              card_word="消费者用餐"
            ></card_item>
            <card_item
              card_icon="el-icon-office-building"
              card_word="小区,写字楼"
            ></card_item>
          </div>
          <div class="card5">
            <card_item
              card_icon="el-icon-dish-1"
              card_word="取餐"
            ></card_item>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import summaryTitle from '@/components/context/summaryTitle'
import { address } from '@/util/address.js'
import card_item from '@/components/context/card_item'

export default {
  name: 'action',
  components: {
    summaryTitle,
    card_item
  },
  data () {
    return {
      circleImage: address('img/responsibility/round-cdd.png')
    }
  }
}
</script>

<style lang="less" scoped>
.action {
  width: 1000px;
}
.circle_components {
  width: 580px;
  height: 580px;
  margin: 0 auto;
  margin-top: 60px;
  background-size: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  .words {
    text-align: center;
    font-size: 26px;
    line-height: 40px;
  }

  .card1 {
    position: absolute;
    top: -40px;
    left: 50%;
    transform: translateX(-50%);
  }

  .card2 {
    position: absolute;
    width: 620px;
    height: 114px;

    top: 65px;
    display: flex;
    justify-content: space-between;
  }
  .card3 {
    position: absolute;
    width: 775px;
    height: 114px;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    justify-content: space-between;
  }
  .card4 {
    position: absolute;
    width: 620px;
    height: 114px;

    bottom: 65px;
    display: flex;
    justify-content: space-between;
  }
  .card5 {
    position: absolute;
    bottom: -40px;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
