// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import store from "./store/store";
Vue.config.productionTip = false
axios.defaults.baseURL = 'http://localhost:3000';
Vue.use(ElementUI);
Vue.prototype.$axios = axios
//axios.defaults.baseURL = '/try'
//axios.defaults.headers.post['Content-Type'] = 'application/json';
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
