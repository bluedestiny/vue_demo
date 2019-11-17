<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <button class="btn btn-primary">主要的</button>
    <button class="btn btn-success">成功的</button>
    <button class="btn btn-danger">危险的<span class="badge badge-light">12</span></button>
    <hr/>

    <div id="flip">点我滑下面板</div>
    <div id="panel">Hello world!</div>
    <router-link to="/testDialog">test</router-link>
    <router-link to="/comment">评论页面</router-link>
    <router-link to="/tooltip">提示</router-link>
    <router-link to="/search">搜索</router-link>
    <router-link to="/select">下拉框</router-link>
    <router-link to="/carousel">轮播图</router-link>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
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
      msg: 'Welcome to Your Vue.js App'
    }
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
</style>
