<template>
  <div>
    <el-row
      type="flex"
      justify="center"
      style="background-color:#ffc641"
    >
      <el-col
        :span="24"
        class="cooperationBox"
      >
        <!-- 合作标题 -->
        <TitleBox
          :titleImage='cooperation'
          TitleHeight="140px"
          TitleName="cooperationTitle"
          TitleWidth="309px"
        ></TitleBox>
        <!-- banner图 -->
        <div class="storyBanner">
          <HomeAnimate
            height="492px"
            className="Story"
          >
            <CopBanner slot="insertAni"></CopBanner>
          </HomeAnimate>

        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import TitleBox from '@/components/context/TitleBox'
import { address } from '@/util/address.js'
import HomeAnimate from '@/components/context/HomeAnimation'
import CopBanner from './children/CopBanner'
export default {
  name: "Cooperation",
  components: {
    TitleBox,
    CopBanner,
    HomeAnimate
  },
  data () {
    return {
      cooperation: address('img/home/cooperaion.png')
    }

  }
}
</script>

<style lang="less" scoped>
.cooperationBox {
  width: 1130px;
  height: 900px;
  padding-top: 90px;
  // z-index: -1;
}
.Title {
  height: 135px;
}

.storyBanner {
  margin-top: 100px;
  height: 492px;
}
</style>
