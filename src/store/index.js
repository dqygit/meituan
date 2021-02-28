import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeName: 'home',
    jump: true,
    information: {
      userId: '',
      userPass: '',
      userPhone: '',
      gender: '',
      age: ''
    }
  },
  mutations: {
    changeactive(state, payload) {
      state.activeName = payload.name
    },
    changejump(state, payload) {
      state.jump = payload.jump
    },
    changeInformatioin(state, payload) {
      console.log(payload);
      for (let key in payload) {
        state.information[key] = payload[key]
      }
    }
  },
  actions: {},
  modules: {}
})
