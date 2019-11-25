<template>
    <div>
      <v-header></v-header>
      <nav-menu></nav-menu>
      <div class="userTable">
        <el-row>
          <el-col :span="4">
              <div class="grid-content bg-purple-dark">
                  <el-button type="primary" @click="addUser">添加用户</el-button>
              </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
              <div class="grid-content bg-purple">
                <!-- 查看用户dialog -->
                <el-dialog title="用户查看" :visible.sync="dialogForm2Visible">
                  <el-form :model="form">
                    <el-form-item label="姓名" :label-width="formLabelWidth">
                      <el-input v-model="form.name" autocomplete="off" :disabled="true"></el-input>
                    </el-form-item>
                    <el-form-item label="地址" :label-width="formLabelWidth">
                      <el-input v-model="form.region" autocomplete="off" :disabled="true"></el-input>
                    </el-form-item>
                  </el-form>
                  <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogForm2Visible = false">取 消</el-button>
                    <el-button type="primary" @click="dialogForm2Visible = false">确 定</el-button>
                  </div>
                </el-dialog>
                <!-- 添加用户dialog -->
                <el-dialog title="用户添加" :visible.sync="dialogFormVisible">
                  <el-form :model="form">
                    <el-form-item label="姓名" :label-width="formLabelWidth">
                      <el-input v-model="form.name" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="地址" :label-width="formLabelWidth">
                      <el-input v-model="form.region" autocomplete="off"></el-input>
                    </el-form-item>
                  </el-form>
                  <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">取 消</el-button>
                    <el-button type="primary" @click="saveUser">确 定</el-button>
                  </div>
                </el-dialog>
                <user-table :table-data="tableData" :total="total" :pageSize="pageSize" :currentPage="currentPage" @getPageData = 'getPageData' @changePageSize="changePageSize"></user-table>
              </div>
          </el-col>
        </el-row>


      </div>

    </div>
</template>
<script>
    import moment from 'moment';
    import { mapGetters } from 'vuex';
    import { mapState } from 'vuex';
  import headerComponent from "../components/headerComponent";
  import navMenu from '../components/navMenuComponent'
  import userTableComponent from "../components/userTableComponent"

  export default {
      data: function(){
          return {
              user: {},
              total: 0,
              pageSize: 2,
              currentPage: 1,
              methodFlag: 'add',
              tableData: [],
              dialogFormVisible: false,
              dialogForm2Visible: false,
              form: {
                  name: '',
                  region: '',
                  date1: '',
                  date2: '',
                  delivery: false,
                  type: [],
                  resource: '',
                  desc: ''
              },
              formLabelWidth: '120px',

          }
      },
      components: {
          'v-header': headerComponent,
          navMenu: navMenu,
          userTable: userTableComponent
      },
      created() {
          // 请求后台数据
          let params = {
              curPage: 1,
              pageSize: this.pageSize
          };
           this.$axios.post('/data', params).then((response) => {
               console.log(response.data);
               this.tableData = response.data.tableData;
               this.total = response.data.total;
           });
      },
      methods: {
          getPageData: function(curPage){
              this.currentPage = curPage;
              let params = {
                  curPage: curPage,
                  pageSize: this.pageSize
              };
              this.$axios.post('/data', params).then((response) => {
                  console.log(response.data);
                  this.tableData = response.data.tableData;
              });
          },
          changePageSize: function(pageSize){
              this.pageSize = pageSize;
              let params = {
                  curPage: this.currentPage,
                  pageSize: pageSize
              };
              this.$axios.post('/data', params).then((response) => {
                  console.log(response.data);
                  this.tableData = response.data.tableData;
              });
          },
          addUser: function(){
              this.methodFlag='add';
              this.dialogFormVisible = true;
              this.form.name = "";
              this.form.region= "";
          },
          showUser(row) {
              this.dialogForm2Visible = true;
              this.form.name = row.name;
              this.form.region= row.address;
              console.log(row);
              this.$store.commit('user/changeMethodName','');
          },
          saveUser: function(){
              this.dialogFormVisible = false;
              if(this.methodFlag == 'add'){
                  const user = {
                      id: this.tableData.length === 0 ? 0 : this.tableData[this.tableData.length - 1].id + 1,
                      date: moment().format('YYYY-MM-DD'),
                      name: this.form.name,
                      address: this.form.region,
                  };
                  this.tableData.push(user);
                  this.$axios.post('/add', user).then((response) => {
                      console.log(response);
                  });
              }else {
                  this.user.name = this.form.name;
                  this.user.address = this.form.region;
                  this.$axios.post('/edit', this.user).then((response) => {
                      console.log(response);
                  });
              }
          },
          delUser: function(row) {

              this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                  confirmButtonText: '确定',
                  cancelButtonText: '取消',
                  type: 'warning',
              }).then(() => {
                  this.tableData = this.tableData.filter(v => v.id !== row.id);
                  this.$axios.post('/delete', row).then((response) => {
                      console.log(response);
                  });
                  this.$message({
                      type: 'success',
                      message: '删除成功!',
                  });
              }).catch(() => {
                  this.$message({
                      type: 'info',
                      message: '已取消删除',
                  });
              });
              this.$store.commit('user/changeMethodName','');
          },
          editUser: function(row){
              this.methodFlag='edit';
              this.dialogFormVisible=true;
              this.form.name = row.name;
              this.form.region = row.address;
              this.user = row;
              this.$store.commit('user/changeMethodName','');
          }
      },
      watch: {
          getMethodName: function(newV, oldV){
              if("editUser" == newV){
                this.editUser(this.$store.state.user.rowData);
              } else if ("showUser" == newV) {
                this.showUser(this.$store.state.user.rowData);
              } else if("delUser" == newV){
                  this.delUser(this.$store.state.user.rowData);
              }
          }
      },
      computed: {
          ...mapGetters({
              'getTableData': 'user/getRowData',
              'getMethodName': 'user/getMethodName'
          })
          // ...mapState('a',{
          //     count: 'count'
          // })
      }
  }
</script>
<style scoped>
  .userTable {
    margin-top: 30px;
    width: 70%;
    float: left;
  }
</style>
