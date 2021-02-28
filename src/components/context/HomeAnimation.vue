<template>
  <div>
    <transition name="Home">
      <div
        v-show="show"
        :style="{height:height}"
        :class="className"
      >
        <slot name="insertAni"></slot>
      </div>
    </transition>
  </div>
</template>

<script>
import appear from '@/util/appear.js'

export default {
  name: "HomeAnimate",
  props: {
    height: {
      type: String,
      required: true
    },
    className: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      show: false
    }
  },
  methods: {
    counter () {
      var that = this
      appear(document.querySelector('.' + that.className), function (ElDis) {
        that.show = ElDis
      })
    }
  },
  mounted () {
    this.counter()
  }
}
</script>

<style lang="less" scoped>
.Home-leave-active {
  transition: all 0.5s;
}

.Home-enter-active {
  transition: all 0.5s;
}
.Home-enter,
.Home-leave {
  opacity: 0;
}

.Home-enter {
  transform: translateY(30px);
}

.Home-enter-to {
  transform: translateY(0px);
}

.Home-leave-to {
  transform: translateY(30px);
}
</style>
