import Vue from 'vue'
import App from './App.vue'
import router from './router'

import fastClick from 'fastclick'
import * as filters from '@/filters'
// require('@/mock')

fastClick.attach(document.body)
Vue.config.productionTip = false

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
