<template>
  <div>
    <el-row
      type="flex"
      justify="center"
    >
      <el-col
        class="News"
        :span="24"
      >
        <TitleBox
          :titleImage='NewsImg'
          TitleHeight="127px"
          TitleName="newsTitle"
          TitleWidth="269px"
        ></TitleBox>

        <div class="news_containor">
          <div class="new-left">
            <HomeAnimate
              height="546px"
              className="newBanner"
            >
              <NewBanner slot="insertAni"></NewBanner>
            </HomeAnimate>

          </div>
          <div class="new-right">
            <HomeAnimate
              height="546px"
              className="Report"
            >
              <Report slot="insertAni"></Report>
            </HomeAnimate>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import HomeAnimate from '@/components/context/HomeAnimation'
import TitleBox from '@/components/context/TitleBox'
import { address } from '@/util/address.js'
import NewBanner from './children/NewBanner'
import Report from './children/Report'

export default {
  name: "News",
  components: {
    TitleBox,
    NewBanner,
    HomeAnimate,
    Report
  },
  data () {
    return {
      NewsImg: address('img/home/news.png')
    }
  }
}
</script>


<style lang="less" scoped>
.News {
  width: 1000px;
  height: 900px;
  padding-top: 70px;
}

.news_containor {
  width: 1000px;
  height: 546px;
  margin-top: 60px;
  display: flex;
  .new-left {
    width: 414px;
    height: 100%;
  }
  .new-right {
    flex: 1;
    height: 100%;
  }
}
</style>
