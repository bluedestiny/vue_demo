<template>
  <div>
    <div>{{msg2}}</div>
      <textarea v-model="inputText"></textarea>
    <button @click="helloTwo">通信2</button>
  </div>
</template>
<script>
  import {eventBus} from "../main";

  export default {
      data:function () {
          return {
              msg2: '默认1',
              inputText:''
          }
      },
      created: function(){
        eventBus.$on('helloOne', msg => {
            this.msg2 = msg;
        })
      },
      methods: {
          helloTwo: function(){
              console.log("像老二发消息");
              eventBus.$emit('helloTwo',this.inputText);
          }
      }
  }
</script>
