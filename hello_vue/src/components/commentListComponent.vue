<template>
  <div>
    <h1>评论功能模块</h1>
    <button class="btn btn-primary">主要的</button>
    <button class="btn btn-success">成功的</button>
    <button class="btn btn-danger">危险的<span class="badge badge-light">12</span></button>

    <cmt-box @func="loadComments"></cmt-box>
    <ul class="list-group">
      <li class="list-group-item" v-for="item in list" :key="item.id">
        <span class="badge badge-dark">评论人： {{ item.user }}</span>
        {{ item.content }}
      </li>
    </ul>
  </div>
</template>
<script>
  import commentAdd from './commentAddComponent';
  export default {
      data: function () {
              return {
                  list: [
                      { id: Date.now(), user: 'zs1', content: 'aaa' },
                      { id: Date.now(), user: 'zs2', content: 'bbbb' },
                      { id: Date.now(), user: 'zs3', content: 'cccc' }
                  ]
              }
      },
      beforeCreate(){ // 注意：这里不能调用 loadComments 方法，因为在执行这个钩子函数的时候，data 和 methods 都还没有被初始化好

      },
      created(){
          this.loadComments()
      },
      methods: {
          loadComments() { // 从本地的 localStorage 中，加载评论列表
              let list = JSON.parse(localStorage.getItem('cmts') || '[]')
              this.list = list
          }
      },
      components: {
          'cmt-box': commentAdd
      }
  }
</script>
<style scoped>
  .badge{
    position: absolute;
    right: 0;
  }
</style>
