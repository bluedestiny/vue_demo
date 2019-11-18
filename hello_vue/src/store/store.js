import Vue from 'vue'
import Vuex from 'vuex'
import  a from './moduleA';
import  b from './moduleB';
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    a: a,
    b: b
  }
})
