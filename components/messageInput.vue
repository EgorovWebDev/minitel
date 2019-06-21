<template>
    <div class="chat__message-input">
      <b-row>     
        <b-col cols="10">
          <b-input v-model="text" @keyup.enter="onSendCLick"></b-input>
        </b-col>
        <b-col cols="1">
          <b-button @click="onSendCLick">send</b-button>
        </b-col>
      </b-row>
    </div>
</template>

<script>

  export default {
    components: {},
    data() {
      return {
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam architecto, debitis dolore ',
        myText: ''
      }
    },
    methods : {
      onSendCLick(event) {
        // if (this.text) {
         this.$emit('onSendMessage', this.text)
         this.text = ''
        // }
        // else {
        //   alert("Пустое поле ввода")
        // }

      },
      onInput(e){
        console.log(e)
      }

    }
      
  }
</script>

<style scoped>

</style>
