<template>
  <div class="evaluate">
    <el-input
      type="textarea"
      placeholder="请输入内容"
      v-model="textarea"
      maxlength="300"
      show-word-limit
      class="evaluateBox"
    >
    </el-input>
  </div>
</template>

<script>
export default {
  name: 'Evalute',
  data () {
    return {
      textarea: ''
    }
  },
  watch: {
    textarea () {
      if (this.textarea != null) {
        this.$store.commit('changejump', { jump: false })
      } else {
        this.$store.commit('changejump', { jump: true })
      }
    }
  }
}
</script>

<style lang="less" scoped>
.evaluate {
  width: 600px;
  height: 400px;
  margin: 30px auto;
}
/deep/.el-textarea__inner {
  height: 300px;
  resize: none;
}
</style>
