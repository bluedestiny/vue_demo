<template>
  <div class="tab-box">
    <el-tabs v-model="defaultTabIndex" type="border-card" editable @tab-click="handle" @edit="edit">
      <el-tab-pane  v-for="(item,index) in tabs" :key="item.name" :name="item.name" :label="item.label">
        <!-- 切换组件 -->
        <transition name="el-fade-in">
          <search :is="item.page" v-if="item.show" :key="item.name"></search>
        </transition>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import searchComponent from "./searchComponent";
import treeComponent from "./treeComponent";
import userTableComponent from "./tableComponent";
export default {
    components: {
      search : searchComponent,
      userTable: userTableComponent,
      tree: treeComponent
    },
    created: function () {
      var that = this;
      // 动态增加是否显示的控制状态
      this.tabs.forEach(value => {
          var showFlag;
          if (value.name == that.defaultTabIndex) {
              showFlag = true;
          }else {
              showFlag = false;
          }
          value.show = showFlag;
      })
    },
    mounted: function () {
      console.log(this.tabs)
    },
    data: function () {
        return {
            defaultTabIndex: '2', // 控制当前选中的tab
            tabs: [
                {
                    name: '1',
                    label: 'tab1',
                    page: 'search'
                },
                {
                    name: '2',
                    label: 'tab2',
                    page: 'userTable'
                },
                {
                    name: '3',
                    label: 'tab3',
                    page: 'tree'
                }
            ]
        }
    },
    methods: {
        handle: function (tab) {
          // 切换当前tab选项卡内容进行渲染
          this.tabs.forEach((value, index) => {
              if(value.name==tab.name){
                  value.show = true;
              }else{
                  value.show= false;
              }
          })
        },
        edit: function (target, action) {
            if(action == 'remove'){
              this.tabs.forEach((value, index) => {
                  if (value == target) {

                  }
              })
            }
        }
    }
}
</script>

<style>
.tab-box{
  margin: 0 auto;
  padding: 5px;
}
</style>
