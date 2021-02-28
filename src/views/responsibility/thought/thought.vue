<template>
  <div>
    <el-row
      type="flex"
      justify="center"
    >
      <el-col
        class="summary"
        :span="24"
      >
        <summaryTitle
          title="我们在思考"
          subtitle="——— 美团外卖社会责任理念"
        ></summaryTitle>

        <div class="circle_wrap">
          <div
            class="circle_item"
            v-for="item in circleData"
            :key="item.circle_title"
            :style="{backgroundImage:'url('+circle_image+')'}"
          >
            <div class="circle_title">{{item.circle_title}}</div>
            <div class="circle_line"></div>
            <div class="circle_content">{{item.circle_content}}</div>
          </div>
        </div>

        <div class="triangle">
          <div
            class="triangle_box"
            :style="{backgroundImage:'url('+triangle_image+')'}"
          >
            <div class="circle_line1">
              <circleBox circleBoxContent='社会公益'></circleBox>
              <div
                class="line1_left"
                :style="{backgroundImage:'url('+backdrop1+')'}"
              >
                愿尽责任：贡献社会
              </div>
            </div>

            <div class="circle_line2">
              <circleBox
                circleBoxContent='青山计划'
                class="cir"
              ></circleBox>

              <circleBox
                circleBoxContent='城市<br>新青年'
                class="cir"
              ></circleBox>
              <div
                class="line2_right"
                :style="{backgroundImage:'url('+backdrop2+')'}"
              >应尽责任：和谐发展</div>
            </div>
            <div class="circle_line3">
              <circleBox
                v-for="item in cirData"
                :key="item"
                :circleBoxContent='item'
                class="cir"
              ></circleBox>
              <div
                class="line3_left"
                :style="{backgroundImage:'url('+backdrop3+')'}"
              >必尽责任：保障安全</div>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>

  </div>
</template>

<script>
import summaryTitle from '@/components/context/summaryTitle'
import { address } from '@/util/address.js'
import circleBox from '@/components/context/circleBox'

export default {
  name: 'thought',
  data () {
    return {
      circleData: [
        {
          circle_title: '保证必尽责任',
          circle_content: '保证业务链上各个节点及利益相关方的安全'
        },
        {
          circle_title: '践行应尽责任',
          circle_content: '积极实践，促进发展过程中人与社会、环境的和谐共生'
        },
        {
          circle_title: '善尽愿尽责任',
          circle_content: '发挥技术和平台优势为社会做出更多贡献，贡献更大价值'
        }
      ],
      circle_image: address('img/responsibility/circleBackground.png'),
      triangle_image: address('img/responsibility/triangle.png'),
      cirData: ['用户隐私', '食品安全', '交通安全', '社区和谐'],
      backdrop1: address('img/responsibility/backdrop1.png'),
      backdrop2: address('img/responsibility/backdrop2.png'),
      backdrop3: address('img/responsibility/backdrop3.png')
    }
  },
  components: {
    summaryTitle,
    circleBox
  }
}
</script>

<style lang="less" scoped>
.summary {
  width: 1000px;
}
.circle_wrap {
  width: 100%;
  height: 270px;
  margin-top: 54px;
  display: flex;
  justify-content: space-between;
  .circle_item {
    width: 270px;
    height: 270px;

    background-size: 100%;
    .circle_title {
      margin-top: 75px;
      text-align: center;
      font-size: 28px;
    }
    .circle_line {
      width: 90px;
      height: 6px;
      background-color: #ffd161;
      margin: 15px auto;
    }
    .circle_content {
      font-size: 14px;
      padding: 0px 35px;
      line-height: 20px;
    }
  }
}
.triangle {
  margin-top: 40px;
  width: 100%;
  height: 480px;
  z-index: 200;
  display: flex;
  justify-content: center;
  align-items: center;
  .triangle_box {
    width: 470px;
    height: 440px;

    background-size: 100%;
    position: relative;
    .circle_line1 {
      position: absolute;
      left: 50%;
      top: 40px;
      transform: translateX(-50%);
    }
    .circle_line2 {
      position: absolute;
      width: 182px;
      height: 120px;

      top: 134px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      justify-content: center;
      align-items: center;
      .cir {
        &:nth-child(1) {
          margin-right: 19px;
        }
        &:nth-child(2) {
          margin-left: 19px;
        }
      }
    }
    .circle_line3 {
      width: 100%;
      height: 175px;
      position: absolute;
      bottom: 0px;
      // background-color: yellow;
      display: flex;
      justify-content: center;
      align-items: center;
      .cir {
      }
    }
  }
}

.line1_left {
  width: 292px;
  height: 123px;
  position: absolute;
  top: -40px;
  left: -258px;
  text-align: center;
  line-height: 123px;
  letter-spacing: 2px;
  font-size: 18px;
  color: #3d51b8;
}

.line2_right {
  width: 339px;
  height: 120px;
  position: absolute;
  left: 165px;
  text-align: center;
  line-height: 120px;
  letter-spacing: 2px;
  font-size: 18px;
  color: #279771;
}

.line3_left {
  position: absolute;
  width: 311px;
  height: 175px;
  color: #1a72aa;
  text-align: center;
  line-height: 175px;
  letter-spacing: 2px;
  font-size: 18px;
  left: -220px;
}
</style>
