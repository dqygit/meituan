<template>
  <div class="information">
    <el-tooltip
      class="item"
      effect="dark"
      :content="text"
      placement="right-start"
      :value=true
    >
      <el-input
        v-model="phone"
        placeholder="请输入手机号"
        class="phone"
        @input="changeIpone"
      ></el-input>
    </el-tooltip>

    <el-input
      v-model="age"
      placeholder="请输入年龄"
      class="age"
      @blur="addAge"
    ></el-input>
    <template>
      <el-radio
        v-model="gender"
        label="男"
        @change='changeGenter'
      >男</el-radio>
      <el-radio
        v-model="gender"
        label="女"
        @change='changeGenter'
      >女</el-radio>
    </template>
  </div>
</template>

<script>
export default {
  name: 'information',
  data () {
    return {
      phone: '',
      age: '',
      gender: '男',
      text: '手机号的格式不正确',
    }
  },
  methods: {
    changeIpone () {
      let regExp = /^1\d{10}$/
      if (regExp.test(this.phone)) {
        this.text = "手机号正确"
        this.$store.commit('changeInformatioin', {
          userPhone: this.phone,
          age: this.age,
          age: this.gender
        })
      } else {
        this.text = '手机号的格式不正确'
      }
    },
    addAge () {

      this.$store.commit('changeInformatioin', {
        age: this.gender
      })
    },
    changeGenter () {
      this.$store.commit('changeInformatioin', {
        gender: this.age
      })
    }
  },
  watch: {
    text () {
      if (this.text == '手机号正确') {
        this.$store.commit('changejump', { jump: false })
      } else {
        this.$store.commit('changejump', { jump: true })
      }
    }
  }

}
</script>

<style lang="less" scoped>
.information {
  width: 300px;
  height: 300px;

  margin: 20px auto;
  .phone {
    margin-top: 20px;
    margin-bottom: 30px;
  }
  .age {
    margin-bottom: 30px;
  }
}
</style>
