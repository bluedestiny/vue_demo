<template>
  <div class="login">
    <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign" ref="loginForm">
      <el-form-item label="用户名">
        <el-input v-model="formLabelAlign.name"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="formLabelAlign.password" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">登录</el-button>
        <el-button @click="resetForm">重置</el-button>
      </el-form-item>
    </el-form>
  </div>

</template>
<script>
export default {
    data: function(){
        return {
            labelPosition: 'right',
            formLabelAlign: {
                name: '',
                password: '',
                type: ''
            }
        }
    },
    methods: {
        submitForm: function() {
          if(this.formLabelAlign.name == "root" && this.formLabelAlign.password == "000000"){
              localStorage.setItem(this.name, this.password);
              this.$router.push('userList');
          }else{
              alert("用户名或密码错误！！！");
          }
        },
        resetForm: function() {
            this.$refs['loginForm'].resetFields();
        }
    }
}
</script>
<style scoped>
  .login{
      padding: 5px;
      margin: 20px auto;
      width: 500px;
      height: 300px;
      border: 1px solid gray;
  }
</style>
