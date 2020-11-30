import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  userInfo: {
    name: '未设置',
    avatarUrl: ''
  }
}

const mutations = {
  UPDATE_USER_INFO (state, payload) {
    const { name, avatarUrl } = payload
    state.userInfo = {
      name,
      avatarUrl
    }
  }
}

const actions = {
  // addNumber (context, number) {
  //   context.commit('ADD_NUMBER', number)
  // }
}

const getters = {
  // getNumbers (state) {
  //   return state.numbers
  // }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
