<template>
  <div class="DevelopmentBanner">
    <img
      :src="bannerImage"
      alt=""
    >
    <div class="login">
      <el-page-header
        @back="$parent.change"
        content="开放平台页面"
      >

      </el-page-header>
      <el-button
        round
        class="logBtn"
        @click="$parent.loginEnter"
      >{{$route.query.username?$route.query.username:'登陆 / 注册'}}</el-button>
    </div>
    <div class="desc">
      <div class="title">美团餐饮开放平台</div>
      <div class="info">丰富的业务接口及业务场景模式，满足商家多元化需求。</div>
    </div>
  </div>
</template>

<script>
import { address } from '@/util/address.js'

export default {
  name: '',
  data () {
    return {
      bannerImage: address('img/platform/business.jpg'),
      title: '登录 / 注册'
    }
  }
}
</script>

<style lang="less" scoped>
.DevelopmentBanner {
  // width: 100%;
  height: 100%;
  position: relative;

  img {
    display: block;
    widows: 100%;
    margin: 0 auto;
  }
  .login {
    position: absolute;
    width: 1140px;
    height: 50px;

    padding-right: 20px;
    top: 0px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    color: #fff;
    justify-content: space-between;
    .el-page-header__content {
      color: #fff;
    }
    .logBtn {
      background-color: #ffc700;
      outline-color: #ffc700;
      color: #000;
      border-color: #ffc700;
    }
  }
}

.desc {
  width: 1140px;
  height: 141px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-wrap: wrap;
  .title {
    font-size: 40px;
    line-height: 40px;
    color: #fff;
    line-height: 40px;
    padding-left: 16px;
    position: relative;
    align-content: space-between;
    width: 100%;
    &::before {
      content: '';
      position: absolute;
      width: 6px;
      height: 38px;
      background-color: #ffc700;
      top: 0px;
      left: 0px;
    }
  }
}
.info {
  width: 454px;
  font-size: 20px;
  font-weight: 400;
  color: #fff;
  letter-spacing: 1px;
  line-height: 36px;
}
</style>

