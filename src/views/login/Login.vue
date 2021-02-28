<template>
  <div>
    <div class="header">
      <img
        :src="headerImage"
        alt=""
      >
    </div>
    <div class="logoBody">
      <div
        class="left"
        :style="{backgroundImage:'url('+runImage+')'}"
      ></div>
      <div class="right">
        <logoBody />
      </div>
    </div>
  </div>
</template>

<script>
import { address } from '@/util/address.js'
import logoBody from './loginBody/logoBody'

export default {
  name: 'Login',
  data () {
    return {
      headerImage: address('img/login/logo.jpg'),
      runImage: address('img/login/run.jpg')
    }
  },
  components: {
    logoBody
  }
}
</script>

<style lang="less" scoped>
.header {
  width: 980px;
  height: 47px;
  margin: 40px auto;
  position: relative;
  img {
    width: 130px;
    height: 100%;
    position: absolute;
    left: 0px;
  }
}

.logoBody {
  width: 980px;
  height: 370px;
  margin: 0 auto;

  display: flex;
  .left {
    width: 480px;
    height: 100%;
  }
  .right {
    flex: 1;

    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
