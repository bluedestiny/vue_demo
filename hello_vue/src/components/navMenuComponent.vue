<template>
    <div class="nav">
          <el-row class="tac">
              <el-col :span="12">
                <h5>导航菜单</h5>
                <el-menu
                  router
                  default-active="2"
                  class="el-menu-vertical-demo"
                  background-color="#545c64"
                  text-color="#fff"
                  active-text-color="#ffd04b"
                  @open="handleOpen"
                  @close="handleClose">
                  <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
                      {{ item.navItem }}
                     </el-menu-item>
                </el-menu>
              </el-col>
            </el-row>
    </div>
</template>
<script>
  export default {
      data: function(){
        return {
             navList:[
                          {name:'/userList',navItem:'用户列表'},
                          {name:'/select',navItem:'发现项目'},
                          {name:'/button',navItem:'社区动态'},
                          {name:'/icon',navItem:'发布项目'},
                          {name:'/search',navItem:'个人中心'},
                          {name:'/comment',navItem:'管理员中心'},
                      ]
        }
      },
      methods: {
           handleOpen(key, keyPath) {
                    alert("open");
                    console.log(key, keyPath);
                },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
      }

  }
</script>
<style scoped>
    .nav {
        width: 25%;
        float: left;
    }
    .tac {
        width:400px;
    }
    .el-row {
        margin-bottom: 20px;
      }
      &:last-child {
         margin-bottom: 0;

      }
      .el-col {
        border-radius: 4px;
      }
      .bg-purple-dark {
        background: #99a9bf;
      }
      .bg-purple {
        background: #d3dce6;
      }
      .bg-purple-light {
        background: #e5e9f2;
      }
      .grid-content {
        border-radius: 4px;
        min-height: 36px;
      }
      .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
      }
</style>
