<template>
  <div>
    <div class="register">
      <el-steps
        :active="active"
        finish-status="success"
      >
        <el-step title="步骤 1">
        </el-step>
        <el-step title="步骤 2"></el-step>
        <el-step title="步骤 3"></el-step>
      </el-steps>
      <router-view></router-view>
      <el-button
        style="margin-top: 12px;"
        @click="next"
        class="nextPage"
        :disabled="jump"
      >下一步</el-button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import sendRequest from '@/util/sendrequest.js'

export default {
  name: 'register',
  data () {
    return {
      active: 0,
    };
  },

  methods: {
    next () {

      if (this.active++ > 2) this.active = 0;
      if (this.active === 0) {
        this.$router.push('/register/user')
      }
      if (this.active === 1) {
        this.$router.push('/register/information')
      }
      if (this.active === 2) {
        this.$router.push('/register/evaluate')
      }


      if (this.active === 3) {
        sendRequest(this.$store.state.information)
        this.$store.commit('changejump', { jump: false })
      } else {
        this.$store.commit('changejump', { jump: true })
      }

    }
  },
  computed: {
    ...mapState(['jump'])
  }
}
</script>

<style lang="less" scoped>
.register {
  width: 1000px;
  height: 600px;
  margin: 50px auto;
  position: relative;
}

.nextPage {
  position: absolute;
  bottom: 50px;
  right: 30px;
}
</style>
