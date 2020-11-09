import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/globle.css'
import './plugins/element.js'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/fonts/iconfont.css'

import axios from 'axios'
// 网路请求的根路径
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
Vue.prototype.$http = axios;
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
