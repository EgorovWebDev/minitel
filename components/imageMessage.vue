<template>

  <img class="chatImage" :src="text" alt="image">
</template>


<script>
export default {
  props: {
    text: String
  }
}
</script>
