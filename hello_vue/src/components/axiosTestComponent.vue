<template>
  <div>
    {{msg}}
    {{obj.name}}
    <input type="text" v-model="msg" :class="{ active: isActive }"></input>
    <button @click="changeName">change</button>
  </div>
</template>

<script>
  export default {
      data: function () {
          return {
            isActive: false,
            msg: "1111111",
              obj:{
                name: 'aa'
              }
          }
      },
      methods: {
        changeName: function () {
            this.obj.name = "bb";
            this.isActive = true;
        }
      },
      watch: {
          msg: function (newVal, oldVal) {
              alert(newVal);
          }
      },
      created() {
          var user = {
              userName: 'jinan',
              userSex: 'girl',
              passWord: '1234'
          };

          this.$axios.post('/api/test2', user)
              .then(response => {
                  console.log(response);
                  this.msg = response.data.userName;
              })
              .catch(err => {
                  console.log(err);
              })
      },
      mounted() {
      }

  }

</script>

<style>
.active{
  background: lightblue;
}
</style>
