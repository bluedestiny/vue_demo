import Vue from 'vue'
import Vuex from 'vuex'
import  a from './moduleA';
import  b from './moduleB';
import user from './user';
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    a: a,
    b: b,
    user: user
  }
})
