<template>
  <div class="user">
    <el-input
      v-model="username"
      placeholder="请输入用户名"
      class="phone"
    ></el-input>
    <el-tooltip
      class="item"
      effect="dark"
      :content="text"
      v-model="display"
      placement="right-start"
    >
      <el-input
        placeholder="请输入密码"
        v-model="password"
        show-password
        class="password"
        @input="checkPassword"
      ></el-input>
    </el-tooltip>

    <el-input
      placeholder="请再次确认密码"
      v-model="rePassword"
      show-password
    ></el-input>
  </div>
</template>


<script>

export default {
  name: 'usernamecheck',
  data () {
    return {
      username: '',
      password: '',
      rePassword: '',
      display: true,
      text: '密码强度不够'
    }
  },
  methods: {
    checkPassword () {
      let regexp = /^[\d\w,.\/]{8}$/

      if (regexp.test(this.password) == true) {
        this.text = "密码可行"
      } else {
        this.text = "密码强度不够"
      }
    },
    checkName () {
      var that = this
      if (this.username != null && this.text != '密码强度不够' && this.password == this.rePassword) {
        this.$store.commit('changejump', {
          jump: false
        })
        this.$store.commit('changeInformatioin', { userId: this.username, userPass: this.password })
      } else {
        this.$store.commit('changejump', {
          jump: true
        })
      }
    }
  },
  watch: {
    password () {
      this.checkName()
    },
    username () {
      // console.log('enter');
      // sendRequest()
      this.checkName()
    },
    rePassword () {
      this.checkName()
    }
  }
}
</script>

<style lang="less" scoped>
.user {
  width: 300px;
  height: 300px;

  margin: 20px auto;
  .phone {
    margin-top: 20px;
    margin-bottom: 30px;
  }
  .password {
    margin-bottom: 30px;
  }
}
</style>
