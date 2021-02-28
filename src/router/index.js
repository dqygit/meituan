import Vue from 'vue'
import VueRouter from 'vue-router'
import changeStyle from '@/util/changeStyle'
import store from '@/store/index'

Vue.use(VueRouter)

const routes = [{
  path: '',
  component: () =>
    import ('@/views/tabBar/TabBar'),
  children: [{
    path: 'home',
    component: () =>
      import ('@/views/Home/Home'),
    meta: {
      name: 'home'
    },
  }, {
    path: 'download',
    component: () =>
      import ('@/views/download/download'),
    meta: {
      name: 'download'
    },
  }, {
    path: 'Join',
    component: () =>
      import ('@/views/Join/Join'),
    meta: {
      name: 'join'
    },
  }, {
    path: 'responsibility',
    component: () =>
      import ('@/views/responsibility/Responsibility'),
    meta: {
      name: 'responsibility'
    },
  }]
}, {
  path: '/platform',
  component: () =>
    import ('@/views/Development/Development')
}, {
  path: '/login',
  component: () =>
    import ('@/views/login/Login')
}, {
  path: '/register',
  component: () =>
    import ('@/views/register/register'),
  children: [{
    path: '',
    redirect: 'user'
  }, {
    path: 'user',
    component: () =>
      import ('@/views/register/usernamecheck/usernamecheck')
  }, {
    path: 'information',
    component: () =>
      import ('@/views/register/information/information')
  }, {
    path: 'evaluate',
    component: () =>
      import ('@/views/register/evaluate/Evaluate')
  }]
}]

const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {

      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

router.afterEach((to, from) => {
  if (to.meta.name) {
    changeStyle(to.meta.name)
    store.commit('changeactive', { name: to.meta.name })
  } else {}
})

export default router
