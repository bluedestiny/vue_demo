<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <!-- 子路由视图 -->
    <transition name="slide-left">
      <router-view></router-view>
    </transition>
    <div id="flip">点我滑下面板</div>
    <div id="panel">这是用jquery操作的</div>
    <div class="routePage">
      <router-link to="/testDialog">test</router-link>
      <router-link to="/comment">评论页面</router-link>
      <router-link :to="{ name : 'tooltip', params : { userId : 123 }}">提示</router-link>
      <router-link :to="{path: '/search', query : { userId : 456 }}">搜索</router-link>
      <router-link to="/select">布局</router-link>
      <router-link to="/carousel">轮播图</router-link>
      <router-link to="/layout">导航菜单</router-link>
      <router-link to="/icon">图标</router-link>
      <router-link to="/button">按钮</router-link>
      <router-link to="/two">老二兄弟</router-link>
      <router-link to="/table">分页案例</router-link>
      <router-link to="/tab">tab切换</router-link>
      <router-link to="/tree">树形组件</router-link>
      <router-link to="/next">分步骤组件</router-link>
      <router-link to="/slot">插槽</router-link>
      <router-link to="/testAxios">测试请求</router-link>
      <router-link to="/chart">图表组件</router-link>
    </div>

  </div>
</template>

<script>
import $ from 'jQuery';

$(function () {
    $("#flip").click(function(){
        $("#panel").slideToggle("slow");
    });
})
export default {
  name: 'HelloWorld',
  data () {
    return {
      info: '',
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
      this.$axios
          .get('/ajax/json_demo.json?id=test')
          .then(response => (this.info = response.data.sites))
          .catch(function (error) { // 请求失败处理
              console.log(error);
          });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
#panel,#flip
{
  padding:5px;
  text-align:center;
  background-color:#e5eecc;
  border:solid 1px #c3c3c3;
}
#panel
{
  padding:50px;
  display:none;
}
  .routePage{
    height: 100px;
    margin: 25px auto;
    width: 50%;
    border: 1px solid #D3DCE6;
  }
  .routePage a{
    float: left;
    margin: 5px;
    width: 80px;
    height: 25px;
    color: white;
    background: mediumseagreen;
    display: block;

  }
  a:hover{
    background: #007bff;
  }
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 500ms;
  position: absolute;
}
.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
</style>
