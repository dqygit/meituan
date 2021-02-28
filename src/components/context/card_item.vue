<template>
  <div class="card_item">
    <div
      class="card_icon"
      :class="[card_icon]"
    ></div>
    <div class="card_word">{{card_word}}</div>
  </div>
</template>

<script>
export default {
  name: 'card_item',
  props: {
    card_icon: {
      type: String,
      required: true
    },
    card_word: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="less" scoped>
.card_item {
  width: 170px;
  height: 114px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12);
  .card_icon {
    width: 100%;
    margin-top: 15px;
    font-size: 60px;
    text-align: center;
  }
  .card_word {
    font-size: 18px;
    text-align: center;
  }
}
</style>
