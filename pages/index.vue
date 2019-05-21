<template>
  <div class="index">
    <input v-model="input" type="text">
    <button @click="subscribeUser">Подписаться</button>
    <div class="message">{{message}}</div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data(){
    return {
      subscribers: {
      },
      message: '',
      input: ''
    } 
  },
  mounted(){},

  methods: {
    subscribe(chanel,callback){
      console.log("1")
      if(chanel in this.subscribers){
        console.log("2")
      }
      else{
        console.log("3")
        this.subscribers[chanel]=[]
        this.subscribers[chanel].push(callback)
      }
    },
    send(chanel, message){
      console.log("4")
      if(chanel in this.subscribers){
        console.log("5")
        for(const callback of this.subscribers[chanel]) {
          console.log("6")
          callback(message)
        }
      }
    },
    subscribeUser(){
      const message = {
        type: 'text',
        text: ''
      }
      message.text=this.input
      this.subscribe('chanel_1', (message) => {
        switch(message.type) {
          case 'text':
            this.message=message.text
            // DISPLAY MESSAGE 
            // PARSE MESSAGE TEXT
              break
          case 'USER_JOIN':
            // DISPLAY MESSAGE "USER JOIN CHANEL1"
              break;
          case 'USER_LEAVE':
            // DISPLAY MESSAGE "USER LEAVE CHANEL1"
              break;
        }
      })
      this.send('chanel_1', message)
    }
  }
}

</script>

<style >
 
</style>

