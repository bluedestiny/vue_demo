
export default {
  namespaced: true,
  state: { count: 0 },
  mutations: {
    mutationsAddCount: function(state, n = 0) {
      return (state.count += n)
    },
    mutationsReduceCount: function(state, n = 0) {
      return (state.count -= n)
    }
  },
  actions: {
    actionsAddCount: function(context, n = 0) {
      console.log(context);
      return context.commit('mutationsAddCount', n)
    },
    actionsReduceCount: function({ commit }, n = 0){
      return commit('mutationsReduceCount', n)
    }
  },
  getters: {
    getterCount: function(state) {
      return state.count
    }
  }
}
