// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex'
import App from './App';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios';
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(Vuex);
Vue.prototype.$axios = axios
axios.defaults.baseURL = '/try'
axios.defaults.headers.post['Content-Type'] = 'application/json';

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
