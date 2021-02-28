<template>
  <div
    class="CsrComponent"
    :style="{width:csrWidth}"
  >
    <slot name="image"></slot>
    <slot name="title"></slot>
    <slot name="intro"></slot>
  </div>
</template>

<script>

export default {
  name: 'CsrConponent',
  props: {
    csrWidth: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="less" scoped>
.CsrComponent {
  height: 480px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12);
  margin-bottom: 35px;

  &:hover {
    outline: 5px solid orange;
  }
}
</style>
