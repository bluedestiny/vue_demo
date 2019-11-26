<template>
    <div >
      <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
          prop="id"
          label="id"
          width="180">
        </el-table-column>
        <el-table-column
          prop="userName"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="passWord"
          label="地址">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="100">
          <template slot-scope="scope">
            <el-button @click="showUser(scope.row)" type="text" size="small">查看</el-button>
            <el-button type="text" size="small" @click="editUser(scope.row)">编辑</el-button>
            <el-button type="text" size="small" @click="delUser(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="block">
        <el-pagination
          background
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
          :page-size="pageSize"
          :current-page="currentPage"
          :page-sizes="[2,5,10,20,40,80]"
          @size-change="sizeChange"
          @current-change="currentChange">
        </el-pagination>
      </div>

    </div>
</template>
<script>
    export default {
        name: 'userTableComponent',
        data() {
            return {
                msg: 'userTableComponent'

            }
        },
        props: {
            tableData: Array,
            total: Number,
            currentPage: Number,
            pageSize: Number
        },
        methods: {
            currentChange: function(curPage){
                this.$emit('getPageData', curPage);
            },
            sizeChange: function(size){
                this.$emit('changePageSize', size);
            },
            showUser: function(row){
                //this.$emit('show-user', row);
                // 提交vuex
                this.$store.commit('user/changeMethodName','showUser');
                this.$store.commit('user/changeRowData', row);
            },
            editUser: function(row){
                //this.$emit('edit-user', row);
                this.$store.commit('user/changeMethodName','editUser');
                this.$store.commit('user/changeRowData', row);
            },
            delUser: function(row){
                this.$store.commit('user/changeMethodName','delUser');
                this.$store.commit('user/changeRowData', row);
            }


            // ...mapState('a',{
            //     count: 'count'
            // })
        }
    }
</script>
<style scoped>

</style>
