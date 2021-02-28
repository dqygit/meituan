<template>
  <div class="home">
    <!-- banner部分 -->
    <el-row>
      <!-- banner图片 -->
      <el-col :span="24">
        <Banner />
      </el-col>
      <!-- bannerTitle -->
      <el-col :span="24">
        <bannerTitle />
      </el-col>
    </el-row>
    <!-- banner结束 -->
    <!-- 主体部分开始 -->
    <div class="mainBody">
      <!-- 标题1开始 -->
      <TitleBox
        :titleImage='ServieTitle'
        TitleName="ServiceTitle"
      ></TitleBox>
      <!-- 标题1结束 -->
      <!-- 服务部分开始 -->
      <ServicePart></ServicePart>
      <!-- 服务部分结束 -->
      <!-- 合作开始 -->
      <Cooperation />
      <!-- 合作结束 -->
      <!-- 新闻部分开始 -->
      <News />

    </div>
  </div>
</template>

<script>
import Banner from './children/banner'
import bannerTitle from './children/BannerTitle'
import ServicePart from './mainBody/ServicePart'
import Cooperation from './cooperation/Cooperation'
import TitleBox from '@/components/context/TitleBox'
import { address } from '@/util/address.js'
import News from './News/News'

export default {
  name: 'Home',
  data () {
    return {
      show: false,
      ServieTitle: address('img/home/serviceintro.png')
    }
  },
  components: {
    Banner,
    bannerTitle,
    ServicePart,
    Cooperation,
    TitleBox,
    News
  }
}
</script>

<style lang="less" scoped>
/deep/.serviceIntro {
  width: 1000px;
}

.serviceMain {
  width: 1000px;
  height: 730px;
  margin: 0 auto;
}
</style>
