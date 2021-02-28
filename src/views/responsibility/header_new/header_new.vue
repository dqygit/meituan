<template>
  <div>
    <el-row
      type="flex"
      justify="center"
      align="middle"
    >
      <el-col
        :span="24"
        class="header_new"
      >
        <div class="news_img">
          <img
            :src="team"
            alt=""
          >
        </div>
        <div class="news_list">
          <div class="tip">
            <span class="left">新闻</span>
            <span class="right">
              <el-link :underline='false'>更多<i class="el-icon-arrow-right el-icon--right"></i> </el-link>
            </span>
          </div>
          <div>
            <div
              class="tip_news"
              v-for="(item,index) in newsData"
              :key="item"
            ><i>{{index+1}} &nbsp;&nbsp;&nbsp;</i> {{item}}</div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { address } from '@/util/address.js'

export default {
  name: 'header_new',
  data () {
    return {
      team: address('img/responsibility/team.jpg'),
      newsData: [
        '全民健康生活如何实现？首届高端智库研讨会大咖谈',
        '外卖餐盒变身环保积木  美团首批餐盒再生积木入驻北京同心学校',
        '我国首个《餐饮外卖密封规范》团体标准发布 助推餐饮行业高质量发展',
        '美团外卖青山计划三周年进展报告发布，62页报告深入洞察外卖行业环保现状和趋势',
        '美团外卖发布“青山计划首批绿色包装推荐名录”',
        '美团外卖联合健康时报 成立外卖行业首个“全民健康生活促进研究院”',
        '美团外卖青山计划三周年：2800亩生态扶贫种植林覆盖8省',
        '美团外卖骑手心理热线，入选优秀社会心理服务十佳案例',
        '美团开设骑手英文课，万能的外卖小哥又添新技能',
        '首届“青山杯”全国高校外卖包装环保创意挑战'
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.header_new {
  width: 1000px;
  height: 560px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .news_img {
    width: 630px;
    height: 354px;

    img {
      width: 100%;
      height: 100%;
    }
  }
  .news_list {
    width: 320px;
    height: 354px;
    .tip {
      width: 100%;
      height: 19px;

      margin: 12px 0px;
      line-height: 19px;
      display: flex;
      justify-content: space-between;
      .left {
        line-height: 19px;
      }
      .right {
        margin-right: 0px;
      }
    }
    .tip_news {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      word-break: break-all;
      width: 320px;
      -webkit-line-clamp: 1;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      line-height: 30px;
      font-size: 16px;
    }
  }
}
</style>
