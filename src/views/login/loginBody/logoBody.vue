<template>
  <div class="loginBody">
    <p class="title">账号登录/注册</p>
    <el-input
      class="accont"
      v-model="accont"
      placeholder="请输入手机号"
    ></el-input>
    <el-input
      class="password"
      placeholder="请输入密码"
      v-model="password"
      show-password
    ></el-input>
    <div class="btn">
      <el-button
        class="left"
        @click="login"
      >登录</el-button>
      <el-button
        class="right"
        @click='registerEnter'
      >注册</el-button>
    </div>
  </div>
</template>

<script>
import loginRequest from '@/util/loginRequest.js'

export default {
  name: 'logoBody',
  data () {
    return {
      accont: '',
      password: ''
    }
  },
  methods: {
    registerEnter () {
      this.$router.push('/register')
    },
    login () {
      loginRequest(this.accont, this.password)
    }
  }
}
</script>

<style lang="less" scoped>
.title {
  font-weight: 400;
  color: #666;
}
</style>

<style lang="less" scoped>
.loginBody {
  width: 270px;
  height: 313px;

  .accont {
    margin-top: 10px;
  }
  .password {
    margin-top: 10px;
  }
}
.btn {
  width: 100%;
  height: 34px;

  margin-top: 30px;
  display: flex;
  justify-content: space-evenly;
  .left,
  .right {
    background-color: #ffbd00;
  }
}
</style>
