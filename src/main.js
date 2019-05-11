import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible'

Vue.config.productionTip = false

// eslint-disable-next-line
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
  // eslint-disable-next-line
})