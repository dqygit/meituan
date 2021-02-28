<template>
  <div
    class="pageList1"
    :style="{backgroundImage:'url('+pageListImage+')'}"
  >
    <div class="middle_page">
      <el-link
        class="home"
        icon="el-icon-s-home"
        :underline="false"
      >返回首页</el-link>
      <div class="contract">
        <div class="download_btn">
          <div class="down_load_left"><span :style="{backgroundImage:'url('+icon+')'}"></span> iPhone 免费下载</div>
          <div class="down_load_left "><span
              class="dwon_load_d"
              :style="{backgroundImage:'url('+icon+')'}"
            ></span> Android 免费下载</div>
        </div>
        <div
          class="code"
          :style="{backgroundImage:'url('+code+')'}"
        ></div>
      </div>
    </div>

  </div>
</template>

<script>
import { address } from '@/util/address.js'

export default {
  name: 'pageList',
  data () {
    return {
      pageListImage: address('img/download/download_1.png'),
      code: address('img/download/download_code.png'),
      icon: address('img/download/download_icon.png')
    }
  }
}
</script>

<style lang="less" scoped>
.pageList1 {
  width: 1349px;
  height: 640px;
  // background-color: yellow;
  margin: 0 auto;
  .middle_page {
    width: 1000px;
    height: 100%;
    position: relative;
    margin: 0 auto;
    .home {
      position: absolute;
      top: 50px;
      font-size: 18px;
    }
    .contract {
      width: 340px;
      height: 120px;
      position: absolute;
      right: 24px;
      bottom: 180px;
      display: flex;
      justify-content: space-between;
      .download_btn {
        width: 185px;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        align-content: space-between;
        .down_load_left {
          width: 185px;
          height: 49px;
          border: 2px solid #333333;
          display: flex;
          align-items: center;
          span {
            display: inline-block;
            width: 18px;
            height: 28px;
            margin-left: 10px;
            margin-right: 20px;
          }
        }
      }
      .code {
        width: 114px;
        height: 100%;
        background-size: 100%;
      }
    }
  }
}
.dwon_load_d {
  background-position: -2px -30px;
}
</style>
