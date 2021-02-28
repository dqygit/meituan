<template>
  <div class="book">
    <div class="left">
      <img
        :src="book.bookImage"
        alt=""
      >
    </div>
    <div class="right">
      <h6>{{book.bookTitle}}</h6>
      <p>{{book.bookData}}</p>
      <el-button class="book_btu">立即下载</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'book_item',
  props: {
    book: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="less" scoped>
.book {
  width: 470px;
  height: 278px;
  margin-top: 18px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #f8f8f8;
  .left {
    width: 168px;
    height: 226px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .right {
    width: 226px;
    height: 226px;
    position: relative;
    h6 {
      font-size: 18px;
      line-height: 24px;
      margin: 0px;
      margin-top: 10px;
    }
    p {
      color: #999999;
      font-size: 14px;
    }
    .book_btu {
      // margin-top: 60px;
      position: absolute;
      bottom: 0px;
    }
  }
}
</style>
