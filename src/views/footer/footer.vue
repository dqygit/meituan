<template>
  <div class="footerContainor">
    <div class="top">
      <div class="left">
        <p
          v-for="item in leftContent"
          :key="item"
        >{{item}}</p>
      </div>
      <div class="right">
        <p
          v-for="item in rightContent"
          :key="item"
        >{{item}}</p>
      </div>
      <div class="middle">
        <div class="title">品牌合作</div>
        <div class="content">wpbg.marketing@meituan.com</div>
        <div
          class="title"
          style="margin-top:30px"
        >客服 1010-9777</div>
        <div class="content">周一至周日 9:00~23:00<br>客服不受理商务合作</div>
      </div>
      <div class="manyClerk">
        <div class="title">更多商家，更多优惠</div>
        <div class="qcode">
          <img
            src="~@/assets/images/qrcode-app.png"
            alt=""
          >
          <img
            src="~@/assets/images/qrcode-wxapp.png"
            alt=""
          >
        </div>
      </div>
    </div>
    <hr style="border-color:#666666">
    <div class="down">
      <div class="qualification-text"><i>
          <img
            src="~@/assets/images/goverment_cut.png"
            alt=""
          ></i> 北京三快在线科技有限公司</div>
      <div class="qualification-text">©️ meituan.com 京ICP证070791号 </div>
      <div class="qualification-text police_inner"><i>
          <img
            src="~@/assets/images/police.png"
            alt=""
          ></i> 京公网安备 11000002002052号 </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "footerContainer",
  data () {
    return {
      leftContent: ['开放平台', '媒体报道', '资质规则', '入驻加盟'],
      rightContent: ['常见问题', '用户反馈', '诚信举报', '加入我们']
    }
  }
}
</script>

<style lang="less" scoped>
.footerContainor {
  width: 100%;
  height: 358px;
  background-color: #333333;
  .top {
    position: relative;
    width: 920px;
    height: 287px;

    margin: 0 auto;

    .left,
    .right {
      position: absolute;
      width: 56px;
      height: 128px;
      // background-color: red;
      top: 70px;
      p {
        font-size: 14px;
        margin-top: 0px;
        margin-bottom: 20px;
        color: #9ca47d;
      }
    }
    .left {
      left: 0px;
    }
    .right {
      left: 115px;
    }
    .middle {
      position: absolute;
      width: 222px;
      top: 70px;
      left: 430px;
      color: #eee;
      .title {
        font-size: 22px;
        margin-bottom: 20px;
      }
      .content {
        font-size: 14px;
        color: #aaa;
        line-height: 28px;
      }
    }
    .manyClerk {
      position: absolute;
      top: 70px;
      right: 0px;
      width: 198px;
      .title {
        font-size: 22px;
        color: #eee;
        margin-bottom: 22px;
      }
      .qcode {
        width: 100%;
        height: 90px;
        display: flex;
        justify-content: space-between;
        img {
          width: 90px;
        }
      }
    }
  }
  .down {
    width: 920px;
    height: 70px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    .qualification-text {
      color: #888;
      font-size: 12px;
      position: relative;
      padding-left: 20px;
      i {
        position: absolute;
        width: 18px;
        height: 18px;
        left: 0px;
        top: 50%;
        transform: translateY(-50%);
        img {
          width: 100%;
        }
      }
    }
  }
}
hr {
  margin: 0px !important;
}

.police_inner {
  margin-left: 20px;
}
</style>
