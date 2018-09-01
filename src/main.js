// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import IView from 'iview'
import axios from 'axios'
console.log(IView)
import 'iview/dist/styles/iview.css'    
// import'./assets/font/iconfont.css'

Vue.config.productionTip = false
Vue.use(IView)
Vue.prototype.$ajax = axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
