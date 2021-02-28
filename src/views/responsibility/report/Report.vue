<template>
  <div>
    <el-row
      type="flex"
      justify="center"
    >
      <el-col
        class="reportbox"
        :span="24"
      >
        <summaryTitle
          title="报告下载"
          subtitle="  ———  美团外卖相关报告和出版物"
        ></summaryTitle>

        <div class="report_item">
          <book_item
            v-for="item in books"
            :key="item.bookImage"
            :book='item'
          ></book_item>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import summaryTitle from '@/components/context/summaryTitle'
import book_item from '@/components/context/book_item'
import { address } from '@/util/address.js'


export default {
  name: 'report',
  components: {
    summaryTitle,
    book_item
  },
  data () {
    return {
      books: [
        {
          bookImage: address('img/responsibility/influence.jpg'),
          bookTitle: '美团外卖2018社会影响力报告',
          bookData: '2019年6月13日'
        }, {
          bookImage: address('img/responsibility/heatGuide.png'),
          bookTitle: '外卖骑手心理服务指南',
          bookData: '2019年12月5日'
        }, {
          bookImage: address('img/responsibility/package.png'),
          bookTitle: '外卖包装常识科普手册',
          bookData: '2019年12月19日'
        }, {
          bookImage: address('img/responsibility/protection.png'),
          bookTitle: '新冠肺炎下骑手心理防护手册',
          bookData: '2020年02月13日'
        }, {
          bookImage: address('img/responsibility/createvity.jpg'),
          bookTitle: '“青山杯”全国高校外卖包装环保创意挑战-作品登记表',
          bookData: '2020年6月5日'
        }, {
          bookImage: address('img/responsibility/devote.jpg'),
          bookTitle: '外卖午餐营养贡献分析报告',
          bookData: '2020年6月22日'
        }, {
          bookImage: address('img/responsibility/evironment.png'),
          bookTitle: '外卖行业环保洞察暨青山计划三周年进展报告',
          bookData: '2020年8月31日'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.reportbox {
  width: 1000px;
}
.report_item {
  height: 1200px;
  width: 100%;
  margin-top: 45px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
