<template>
    <div class="header">
      <span>{{user}}</span>
      <a class="logout-btn" href="javascript:void(0);" @click="logout">退出登录</a>
      <h1>用户管理系统</h1>
    </div>
</template>
<script>
  export default {
    data: function () {
        return {
            user: '用户 root'
        }
    },
      methods: {
        logout: function(){
            localStorage.removeItem('root');
            this.$router.push({ path: '/login' });
        }
      }
  }
</script>
<style scoped>
  .header{
    color: white;
    position: relative;
    background: dodgerblue;
  }
  .header span {
    position: absolute;
    top: 10px;
    right: 80px;
  }
  .logout-btn{
    font-size: 12px;
    color: white;
    position: absolute;
    top: 13px;
    right: 10px;
  }
</style>
