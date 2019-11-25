<template>
    <div>
      <div>{{msg1}}</div>
      <textarea v-model="inputText"></textarea>
      <button @click="helloOne">通信1</button>
    </div>

</template>
<script>
    import {eventBus} from "../main";
    export default {
        data:function () {
            return {
                msg1: '默认2',
                inputText: ''
            }
        },
        created: function(){
            eventBus.$on('helloTwo',  msg => {
                console.log('接收老大的消息: '+ msg);
                this.msg1 = msg;
            })
        },
        methods: {
          helloOne: function () {
              console.log('像老大发消息');
              eventBus.$emit('helloOne', this.inputText);
          }
        }
    }
</script>
