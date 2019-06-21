<template>
  <a :href="text">{{text}}</a>
</template>


<script>
export default {
  props: {
    text: String
  }
}
</script>
