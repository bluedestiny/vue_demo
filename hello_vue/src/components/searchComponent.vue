<template>
  <div>
    <el-input v-model="input" placeholder="请输入内容"></el-input>
    <h3>{{countA}}</h3>
    <h3> {{countB}}</h3>
    <h4>{{total}}</h4>
    <button @click="handleAddClick(1)">增加</button>
    <button @click="handleReduceClick(1)">减少</button>
    <div>异步操作</div>
    <div>
      <button @click="handleActionsAdd(10)">异步增加</button>
      <button @click="handleActionsReduce(10)">异步减少</button>
    </div>

  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { mapState } from 'vuex'
export default {
    data: function () {
        return {
            input: '',
          //  countA:0,
        }
    },
    computed: {
        ...mapGetters({
            total: 'a/getterCount'
        }),
        ...mapState({
            countA: function(state){
                return state.a.count
            },
            //countA:  state => state.a.count,
            countB:  state => state.b.count
        })
        // ...mapState('a',{
        //     count: 'count'
        // })
    },
    methods: {
        handleAddClick(n){
            this.$store.commit('a/mutationsAddCount',n);
        },
        handleReduceClick(n){
            this.$store.commit('a/mutationsReduceCount',n);
        },
        handleActionsAdd(n){
            this.$store.dispatch('b/actionsAddCount',n)
        },
        handleActionsReduce(n){
            this.$store.dispatch('b/actionsReduceCount',n)
        }
    }
}
</script>

<style>

</style>
