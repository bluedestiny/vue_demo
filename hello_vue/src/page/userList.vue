<template>
    <div>
      <v-header></v-header>
      <nav-menu></nav-menu>
      <div class="userTable">
        <el-row>
          <el-col :span="4">
            <el-input v-model="userName" autocomplete="on" ></el-input>

          </el-col>
          <el-col :span="4">
                <el-button type="primary" @click="search">搜索</el-button>
          </el-col>
          <el-col :span="4">
            <el-button type="primary" @click="addUser">添加用户</el-button>
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

                <user-table :tableData="tableData" :total="total" :pageSize="pageSize" :currentPage="currentPage" @getPageData = 'getPageData' @changePageSize="changePageSize"></user-table>
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
              userName: '',
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
              currentIndex: 1,
              pageSize: this.pageSize
          };
          this.$axios.get('/api/UserCRUD/showUser', {
              params: params
          }).then((response) => {
              console.log(this);
              this.tableData = response.data.tableData;
              this.total = response.data.total;
          });
      },
      methods: {
          // 搜索
          search: function(){
              let params = {
                  userName: this.userName,
                  currentIndex: 1,
                  pageSize: this.pageSize
              }
              this.$axios.get('/api/UserCRUD/showUser', {
                  params: params
              }).then((response) => {
                  this.tableData = response.data.tableData;
                  this.total = response.data.total;
                  this.currentPage = 1;
              });
          },

          queryTable: function() {
              let params = {
                  currentIndex: 1,
                  userName: this.userName,
                  pageSize: this.pageSize
              };
              // 注意get传参的方式
              this.$axios.get('/api/UserCRUD/showUser', {
                  params: params
              }).then((response) => {

                  this.tableData = response.data.tableData;
                  this.total = response.data.total;
              });

          },
          //  查询当前页的数据
          getPageData: function(curPage){
              this.currentPage = curPage;
              let params = {
                  userName: this.userName,
                  currentIndex: curPage,
                  pageSize: this.pageSize
              };
              this.$axios.get('/api/UserCRUD/showUser', {
                  params: params
              }).then((response) => {
                  this.tableData = response.data.tableData;
              });
          },
          // 更改分页大小时查询分页数据
          changePageSize: function(pageSize){
              this.pageSize = pageSize;
              let params = {
                  userName: this.userName,
                  currentIndex: this.currentPage,
                  pageSize: pageSize
              };
              this.$axios.get('/api/UserCRUD/showUser', {
                  params: params
              }).then((response) => {
                  this.tableData = response.data.tableData;
              });
          },
          // 添加用户
          addUser: function(){
              this.methodFlag='add';
              this.dialogFormVisible = true;
              this.form.name = "";
              this.form.region= "";
          },
          // 通过vuex通信
          showUser(row) {
              this.dialogForm2Visible = true;
              this.form.name = row.userName;
              this.form.region= row.passWord;
              console.log(row);


              this.$store.commit('user/changeMethodName','');
          },
          // 保存用户
          saveUser: function(){
              this.dialogFormVisible = false;
              if(this.methodFlag == 'add'){
                  // const user = {
                  //     id: this.tableData.length === 0 ? 0 : this.tableData[this.tableData.length - 1].id + 1,
                  //     userName: this.form.name,
                  //     passWord: this.form.region,
                  // };
                  // var form = new FormData();
                  // form.append('userId', this.tableData.length === 0 ? 0 : this.tableData[this.tableData.length - 1].id + 1);
                  // form.append('userName', this.form.name);
                  // form.append('passWord', this.form.region);
                  //
                  // let config = {
                  //     headers: {'Content-Type': 'multipart/form-data'}
                  // }; //添加请求头
                  // 注意post传参的方式
                  var form = new URLSearchParams();
                  form.append('userId', this.tableData.length === 0 ? 0 : this.tableData[this.tableData.length - 1].id + 1);
                  form.append('userName', this.form.name);
                  form.append('passWord', this.form.region);

                  this.$axios.post('/api/UserCRUD/addUser', form).then((response) => {
                      this.queryTable();
                      this.currentPage = 1;
                      console.log(this.total);
                  });
              }else {
                  this.user.userName = this.form.name;
                  this.user.passWord = this.form.region;
                  var form = new URLSearchParams();
                  form.append("userName", this.user.userName);
                  form.append("id", this.user.id);
                  form.append("passWord", this.user.passWord);
                  this.$axios.post('/api/UserCRUD/editUser', form).then((response) => {
                      console.log(response);
                      this.$message({
                          type: 'success',
                          message: '修改成功!',
                      });
                  }).catch(err =>{
                      console.log(err);
                      this.$message({
                          type: 'success',
                          message: '修改失败!',
                      });
                  });
              }
          },
          // 删除用户
          delUser: function(row) {
              console.log(row);
              this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                  confirmButtonText: '确定',
                  cancelButtonText: '取消',
                  type: 'warning',
              }).then(() => {
                  console.log(row.id);
                  console.log(this.tableData);
                  this.tableData = this.tableData.filter(v => v.id != row.id);
                  // var form = new FormData();
                  // form.append('userId', row.id);
                  //
                  // let config = {
                  //     headers: {'Content-Type': 'multipart/form-data'}
                  // }; //添加请求头
                  var form = new URLSearchParams();
                  form.append('userId', row.id);
                  this.$axios.post('/api/UserCRUD/delUser', form).then((response) => {
                      this.queryTable();
                      this.currentPage = 1;
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
          // 编辑用户
          editUser: function(row){
              this.methodFlag='edit';
              this.dialogFormVisible=true;
              this.form.name = row.userName;
              this.form.region = row.passWord;
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
