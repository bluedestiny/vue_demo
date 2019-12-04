// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "bootstrap/dist/css/bootstrap.min.css";
// 引入echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
import axios from 'axios';
import qs from 'qs';
import store from "./store/store";
Vue.config.productionTip = false
//axios.defaults.baseURL = '/try'
//axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
//axios.defaults.baseURL = '/api';
Vue.use(ElementUI);
Vue.prototype.$axios = axios
console.log(qs);
Vue.prototype.$qs = qs
Vue.config.productionTip = false
/* eslint-disable no-new */
export const eventBus = new Vue();
router.beforeEach((to, from, next) => {
  if(to.meta.title) {
    document.title = to.meta.title;
  }
  next();
})
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created() {
    // if (!localStorage.getItem('root') && this.$router.currentRoute.path !== '/login') {
    //   this.$router.push({ path: '/login' });
    // }
  },
})
