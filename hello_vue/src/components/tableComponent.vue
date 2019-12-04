<template>
  <div>
    <el-table
      :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)"
      style="width: 100%">
      <el-table-column
        v-if="hasSelection"

        type="selection"
        width="55">
      </el-table-column>
      <!--序号-->
      <el-table-column v-if="hasIndex" label="序号" type="index" width="55">

      </el-table-column>
      <el-table-column
        v-for="(column, index) in columns"
        v-if="column.isShow"
        :prop="column.prop"
        :label="column.label"
        :key="column.prop"
        sortable
        :width="column.width">
      </el-table-column>
      <!--操作-->
      <slot name="handleColumn"></slot>


    </el-table>
    <div class="block">
      <el-pagination
        v-if="hasPagination"
        background
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        :page-size="pageSize"
        :current-page="currentPage"
        :page-sizes="[5,10,20,40,80]"
        @current-change="currentChange">
      </el-pagination>
    </div>
  </div>
</template>

<script>
    export default {
        props: {
           // 是否支持多选
          hasSelection: {
              type: Boolean,
              default: function(){
                  return false;
              }
          },
          hasPagination: {
            type: Boolean,
            default: function(){
                return false;
            }
          },
          hasIndex:  {
              type: Boolean,
              default: function() {
                  return false;
              }
          },
          columns: {
              type: Array,
              default: function(){
                  return [];
              }
          },
          tableData: {
              type: Array,
              default: function(){
                  return [];
              }
          }
        },
        data() {
            return {
                total: 100,//默认数据总数
                pageSize:5,//每页的数据条数
                currentPage:1,//默认开始页面
            }
        },
        methods: {
            currentChange: function(curPage){
                this.currentPage = curPage;
            }
        },
        created: function(){
            this.total=this.tableData.length;
        }
    }
</script>
<style scoped>
  .el-pagination{
    margin-top:20px;
  }
</style>
