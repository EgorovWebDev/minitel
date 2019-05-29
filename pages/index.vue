<template>
  <div class="index">  
    <button @click="subscribe">{{(subscribeChanel)?'Отписаться':'Подписаться'}}</button>
    <chatPanel v-if="subscribeChanel"/>
  </div>
</template>

<script>
import chatPanel from '~/components/chatPanel.vue'
export default {
  name: 'index',
  data(){
    return {
      subscribeChanel: false
    } 
  },
  components: {
    chatPanel,
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

