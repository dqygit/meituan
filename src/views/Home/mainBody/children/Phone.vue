<template>
  <div
    class="Phone"
    :style="{backgroundImage:'url('+PhoneImage+')'}"
  >
    <div
      v-for="(item,index) in advertise"
      :key="item"
    >
      <transition
        name="el-fade-in-linear"
        :duration="80"
      >
        <img
          :src="item"
          class="transition-box"
          alt=""
          v-show="index===Phone?true:false"
        >
      </transition>
    </div>

  </div>
</template>

<script>
import { address } from '@/util/address.js'

export default {
  name: "Phone",
  props: {
    PhoneImage: {
      type: String,
      required: true
    },
    Phone: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      advertise: [
        address('img/home/Delicacy.png'),
        address('img/home/Drink.png'),
        address('img/home/foods.png'),
        address('img/home/supermarket.png')
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.Phone {
  width: 346px;
  height: 709px;
  background-size: contain;
  background-repeat: no-repeat;
  position: relative;
  img {
    width: 310px;
    height: 672px;
    position: absolute;
    left: 50%;
    top: 16px;
    transform: translateX(-50%);
  }
}
</style>
