<template>
  <div>
    <el-container style="height: 500px;">
      <el-aside>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
          <el-breadcrumb-item>活动列表</el-breadcrumb-item>
          <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
        <el-tree  icon-class="el-icon-caret-right el-icon-folder" :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
      </el-aside>
      <el-main>
        <iframe src="url" width="800" height="400" frameborder="0" scrolling="no"></iframe>
      </el-main>
    </el-container>

  </div>
</template>

<script>
  export default {
      data() {
          return {
              url: '',
              data: [{
                  label: '一级 1',
                  url:'http://www.baidu.com',
                  children: [{
                      label: '二级 1-1',
                      url: 'http://www.qq.com',
                      children: [{
                          label: '三级 1-1-1'
                      }]
                  }]
              }, {
                  label: '一级 2',
                  children: [{
                      label: '二级 2-1',
                      children: [{
                          label: '三级 2-1-1'
                      }]
                  }, {
                      label: '二级 2-2',
                      children: [{
                          label: '三级 2-2-1'
                      }]
                  }]
              }, {
                  label: '一级 3',
                  children: [{
                      label: '二级 3-1',
                      children: [{
                          label: '三级 3-1-1'
                      }]
                  }, {
                      label: '二级 3-2',
                      children: [{
                          label: '三级 3-2-1'
                      }]
                  }]
              }],
              defaultProps: {
                  children: 'children',
                  label: 'label'
              }
          };
      },
      methods: {
          handleNodeClick(data) {
              const url = data.url;
              document.getElementsByTagName("iframe")[0].src = url;
              this.$message({
                  message: '恭喜你，这是一条成功消息',
                  type: 'error'
              });

          }
      }
  }
</script>

<style>
.el-tree{
  margin-top: 10px;
}
</style>
