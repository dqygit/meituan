<template>
  <div>
    <div class="navBar">
      <el-tabs
        :value="$store.state.activeName"
        @tab-click="handleClick"
        :stretch="false"
      >
        <el-tab-pane
          label="首页"
          name="home"
        >
          <!-- <Home /> -->
        </el-tab-pane>
        <el-tab-pane
          label="入住加盟"
          name="join"
          class="tabcolor"
        ></el-tab-pane>
        <el-tab-pane
          label="开放平台"
          name="platform"
        ></el-tab-pane>
        <el-tab-pane
          label="社会责任"
          name="responsibility"
        ></el-tab-pane>
        <el-tab-pane
          label="下载手机版"
          name="download"
        ></el-tab-pane>
      </el-tabs>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
      <footerContainer />
    </div>

  </div>
</template>

<script>
import Home from '@/views/Home/Home'
import footerContainer from '@/views/footer/footer'
import { mapState } from "vuex"

export default {
  name: 'TabBar',
  data () {
    return {

    }
  },
  computed: {
    // ...mapState(['activeName'])

  },
  methods: {
    handleClick (index) {

      this.$store.commit('changeactive', { name: index.name })


      this.$router.push(index.name)
    }
  },

  components: {
    Home,
    footerContainer
  },
  mounted () {
    this.$router.push('/home')

  }
}
</script>

<style scoped lang="less">
/deep/.el-tabs__header {
  width: 100%;
  z-index: 200 !important;
  background-color: rgba(255, 255, 255, 0);
}

/deep/.el-tabs__nav-wrap {
  width: 990px;
  margin: 0 auto;
  height: 70px;
  line-height: 70px;
  .el-tabs__nav {
    float: right;
  }
}

/deep/.el-tabs__nav-scroll {
  position: relative;
  // background-color: red;
  &::before {
    content: '';
    width: 163px;
    height: 48px;
    // background-color: red;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-image: url(~@/assets/images/header-logo-white-50ca261907.png);
    background-size: 100%;
  }
}

/deep/.el-tabs__header {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  a {
    // color: #fff;
  }
}

/deep/.el-tabs__nav-wrap::after {
  height: unset !important;
}

/deep/.el-tabs__item {
  color: #fff;
  font-weight: 300;
}

/deep/.el-tabs__active-bar {
  background-color: #ffbd27;
}

/deep/.el-tabs__item.is-active {
  font-weight: bold;
  color: #fff;
}

/deep/.el-tabs__item:hover {
  color: #ffffff;
  font-weight: bold !important;
}
</style>
