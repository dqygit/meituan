<template>
  <div class="Report">
    <div class="ReportTitle">2018年度媒体报道</div>
    <p
      class="report-list"
      v-for="(item,index) in TitleList"
      :key="item"
    ><i>{{index | listNumber}}</i>&nbsp;&nbsp;&nbsp;:{{item}}</p>
    <el-link
      class="all-button"
      :underline="false"
    >全部报道<i class="el-icon-arrow-right"></i> </el-link>
  </div>
</template>

<script>
export default {
  name: "Report",
  data () {
    return {
      TitleList: [
        '保障骑手安心无忧送餐路 美团外卖首发《骑手生活安全指南》',
        'MINISO名创优品正式入驻美团闪购 时尚单品30分钟送达',
        '专业食品安全检测团队进驻美团点评 从此舌尖安全有他们守护',
        'Trustdata发布2018上半年外卖份额数据 美团饿了么百度“631”格局三分天下',
        '美团上线闪购业务 以“快”破局助力零售升级',
        '美团城市新青年 外卖骑手正能量图鉴'
      ]
    }
  },
  filters: {
    listNumber (index) {
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
.Report {
  width: 100%;
  height: 100%;
  padding-left: 40px;
  padding-top: 70px;
  position: relative;
  .ReportTitle {
    font-size: 30px;
    font-family: PingFangSC-Semibold, Microsoft Yahei, Arial, Helvetica,
      sans-serif;
    margin-bottom: 40px;
  }
  .report-list {
    width: 539px;
    font-size: 16px;
    line-height: 20px;
    color: #4a3532;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top: 20px;
    &:hover {
      font-weight: 700;
      font-size: 18px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-top: 20px;
    }
  }
  .all-button {
    // margin-top: 50px;
    position: absolute;
    bottom: 100px;
    :hover {
      color: #fec133;
    }
  }
}
</style>
