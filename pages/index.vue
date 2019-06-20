<template>
  <div class="index">
    <chat></chat>
  </div>
</template>

<script>

import chat from '~/components/chat.vue'
export default {

  data(){
    return {
      subscribeChanel: false
    } 
  },
  components: {
    chat,
  },
  methods: {
    subscribe(){
      this.subscribeChanel = !this.subscribeChanel
    }
  }
}

</script>

<style >
 
</style>

