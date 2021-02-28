<template>
  <div
    class="circleBox"
    v-html="circleBoxContent"
  ></div>
</template>

<script>
export default {
  name: 'circleBox',
  props: {
    circleBoxContent: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="less" scoped>
.circleBox {
  width: 70px;
  height: 70px;
  padding: 17px 10px;
  border-radius: 50%;
  border: 2px solid #ffffff;
  text-align: center;
  color: white;
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
}
</style>
