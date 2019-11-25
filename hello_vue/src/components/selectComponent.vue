<template>
  <div>
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>Main</el-main>
      </el-container>
      <el-footer>Footer</el-footer>
    </el-container>
    <el-row>
      <el-col :span="6"><div class="grid-content bg-purple"></div>
        <transition name="el-zoom-in-center">
          <div v-show="show" class="transition-box">.el-zoom-in-center</div>
        </transition>
      </el-col>
      <el-col :span="6"><div class="grid-content bg-purple-light">
        <el-collapse-transition>
          <div v-show="show" class="transition-box">collapse</div>
        </el-collapse-transition>
      </div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple">
        <transition name="el-fade-in-linear">
          <div v-show="show" class="transition-box">.el-fade-in-linear</div>
        </transition>
      </div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple-light">
        <transition name="el-fade-in">
          <div v-show="show" class="transition-box">.el-fade-in</div>
        </transition>
      </div></el-col>
    </el-row>


    <el-link href="https://element.eleme.io" target="_blank">默认链接</el-link>
    <el-link type="primary">主要链接</el-link>
    <el-link type="success">成功链接</el-link>
    <el-link type="warning">警告链接</el-link>
    <el-link type="danger">危险链接</el-link>
    <el-link type="info">信息链接</el-link>
    <br>
    <el-radio v-model="radio" label="1">备选项</el-radio>
    <el-radio v-model="radio" label="2">备选项</el-radio>
    <br>
    <el-checkbox label="复选框 A"></el-checkbox>
    <el-checkbox label="复选框 B"></el-checkbox>
    <el-checkbox label="复选框 C"></el-checkbox>
    <el-checkbox label="禁用" disabled></el-checkbox>
    <el-checkbox label="选中且禁用" disabled></el-checkbox>
    <br>
    <el-button @click="show = !show" class="el-icon-delete">Click Me</el-button>
    <el-select v-model="value" placeholder="请选择">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <br>
    <el-date-picker
      v-model="value1"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
    <br>
    <el-input v-model="input" placeholder="请输入内容"></el-input>
  </div>

</template>

<script>
export default {
    data:function () {
        return {
            show: true,
            input: '',
            value1: '',
            checkList: ['选中且禁用','复选框 A'],
            radio: '1',
            options: [{
                value: '选项1',
                label: '黄金糕'
            }, {
                value: '选项2',
                label: '双皮奶'
            }, {
                value: '选项3',
                label: '蚵仔煎'
            }, {
                value: '选项4',
                label: '龙须面'
            }, {
                value: '选项5',
                label: '北京烤鸭'
            }],
            value: ''
        }
    }
}
</script>
<style>
  .transition-box {
    margin-bottom: 10px;
    //width: 200px;
    //height: 100px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }
  .grid-content {
    border-radius: 4px;
    //min-height: 36px;
  }
  .bg-purple-dark {
    background: red;
  }
  .bg-purple {
    background: red;
  }
  .bg-purple-light {
    background: red;
  }

  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
