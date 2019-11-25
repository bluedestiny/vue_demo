export default {
  namespaced: true,
  state: {
    rowData:{},
    methodName: ''
  },
  mutations: {
    changeMethodName: function(state, methodName){
      state.methodName = methodName;
    },
    changeRowData: function(state, row){
      return state.rowData = row;
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
    getMethodName: function(state) {
      return state.methodName;
    },
    getRowData: function(state) {
      return state.rowData;
    }
  }
}
