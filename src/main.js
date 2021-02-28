import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store'
import '@/style/normalize.css'
import 'animate.css'
import 'waypoints/lib/noframework.waypoints.min.js';
import falls from 'vue-falls'

Vue.use(falls)
Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
