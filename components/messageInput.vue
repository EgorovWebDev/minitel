<template>
    <div class="chat__message-input">
      <b-row>     
        <b-col cols="9">
          <b-input v-model="text" ></b-input>
        </b-col>
        <b-col cols="3">
          <b-button @click="onSendCLick" >send</b-button>
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
        this.$emit('onSendMessage', this.text)
        this.text = ''
      },
      onInput(e){
        console.log(e)
      }
    }
      
  }
</script>

<style scoped>

</style>
