<template>
  <div>
    <div class="form-group">
      <label>评论人：</label>
      <input type="text" class="form-control" v-model="user">
    </div>

    <div class="form-group">
      <label>评论内容：</label>
      <textarea class="form-control" v-model="content"></textarea>
    </div>

    <div class="form-group">
      <input type="button" value="发表评论" class="btn btn-primary" @click="postComment">
    </div>
  </div>

</template>
<script>
export default {
    data() {
      return {
          user: '',
          content: ''
      }
    },
    methods: {
      postComment() { // 发表评论的方法
        let comment = {
            id: Date.now(),
            user: this.user,
            content: this.content
        };
        // 从 localStorage 中获取所有的评论
        let list = JSON.parse(localStorage.getItem('cmts') || '[]');
        list.unshift(comment);
        // 重新保存最新的 评论数据
        localStorage.setItem('cmts', JSON.stringify(list));
        this.user = this.content = '';
        this.$emit('func');
    }
  }
}
</script>
<style scoped>

</style>
