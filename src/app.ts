import Vue from 'vue'
import store from './store'
import TaroUiVue from 'taro-ui-vue/src'
import 'taro-ui-vue/dist/style/index.scss'
import './app.scss'

Vue.use(TaroUiVue)
// Vue.config.productionTip = false

const App = new Vue({
  store,
  render (h) {
    // this.$slots.default 是将要会渲染的页面
    return h('block', this.$slots.default)
  }
})

export default App
