<template>
  <div>
    <banner />
    <sectionTitle
      title="外卖业务场景"
      desc="丰富的外卖场景，助力业务发展"
    ></sectionTitle>
    <Scene :SceneItem="sectionTitle"></Scene>
    <sectionTitle
      title="合作优势&接入流程"
      desc="高效稳定的服务 助力业务的发展"
    ></sectionTitle>
    <sectionContent />
    <footerEnd />
  </div>
</template>

<script>
import banner from './banner/banner'
import sectionTitle from './sectionTitle/SectionTitle'
import Scene from './scene/Scene'
import { address } from '@/util/address.js'
import sectionContent from './sectionContent/sectionContent'
import footerEnd from '@/views/footer/footer'

export default {
  name: 'Delelopment',
  methods: {
    change () {
      this.$store.commit('changeactive', { name: 'home' })
      this.$router.push('/home')
    },
    loginEnter () {
      this.$router.push('/login')
    }
  },
  components: {
    banner,
    sectionTitle,
    Scene,
    sectionContent,
    footerEnd
  },
  data () {
    return {
      sectionTitle: [
        {
          image: address('img/platform/desolve.png'),
          title: '外卖通用解决方案',
          desc: '通过SDK、openH5、openAPI等形式，帮助第三方快速实现外卖功能。'
        }, {
          image: address('img/platform/phoneDesole.png'),
          title: '手机行业解决方案',
          desc: '丰富手机行业APP产品功能，提升用户使用时长和频次，借助外卖的高频低单价消费场景，有效提升拉新、促销活动。'
        }, {
          image: address('img/platform/enterpriseDesolve.png'),
          title: '金融行业解决方案',
          desc: '丰富金融行业APP产品功能，提升用户使用时长和频次，借助外卖的高频低单价消费场景，有效提升拉新、促活指标。'
        }, {
          image: address('img/platform/brainpower.png'),
          title: '智能硬件语音外卖',
          desc: '结合美团外卖自研的多轮自然语言对话产品-智能小袋，通过开放平台提供了完善的语音外卖解决方案，逐步覆盖大部分智能硬件产品，打造出AI环境下的机制外卖体验。'
        }, {
          image: address('img/platform/takeOut.png'),
          title: '外卖商家解决方案',
          desc: '帮助外卖商家在站外推广、站外活动运营，提升整体流量和订单，打造开放平台商家站外良性生态。'
        }, {
          image: address('img/platform/tema.png'),
          title: '企业团餐解决方案',
          desc: '帮助企业进行商务餐饮娱乐消费的预算管控、成本控制、实现财务透明，平切简化员工报销流程，提升员工满意度。'
        }, {
          image: address('img/platform/comtract.png'),
          title: 'IM在线咨询',
          desc: '建立商家与顾客实时沟通场景，在下单前、订单配送中、订单送达后等不同场景均可在线沟通，有效维护客情，提升下单转化及降低差评。'
        }, {
          image: address('img/platform/decoration.png'),
          title: '门店装修',
          desc: '对店内海报、店铺招牌、老板推荐三大模块进行运营管理，可将接口集成为功能，让商家在系统内完成操作，增强商家与服务商之间的粘性。'
        }, {
          image: address('img/platform/card.png'),
          title: '安心卡',
          desc: '通过接口集成为商家提供便捷操作，C端可露出安心卡项目专属标签，安心卡可随小票进行打印，订单完成后安心卡图片通过IM自动发送至顾客，提升服务商产品与商家的粘性。'
        }, {
          image: address('img/platform/self-help.png'),
          title: '自助开店',
          desc: '服务商完成系统对接后，通过绿色通道帮助商家入驻美团外卖，实现快速开店。最快3小时内完成审核。仅需5步即可入驻美团外卖。'
        }, {
          image: address('img/platform/manage.png'),
          title: '菜品管理',
          desc: '管理外卖门店菜品，支持新增、删除、修改等，并同步更新展示在顾客使用的美团外卖客户端，降低商家维护多套菜品的成本，解决库存同步问题。'
        }, {
          image: address('img/platform/indent.png'),
          title: '订单管理',
          desc: '实现订单产生到完成全流程系统管理，接单高峰期无需切换客户端，帮助商家进行订单多维度数据汇总，提升订单管理效率。'
        }, {
          image: address('img/platform/evalute.png'),
          title: '评价管理',
          desc: '可批量查询外卖门店评价信息或添加回复，便于协助商家进行日常客情维护及舆情监控。'
        }, {
          image: address('img/platform/door.png'),
          title: '门店管理',
          desc: '帮助商家提升外卖门店经营效率，可对外卖门店的基础信息，如营业状态、营业时间、配送费等进行查询和及时操作。'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.btn {
  margin-top: 70px;
}
</style>

