<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import PetCard from './components/PetCard.vue';
  import MessageBubble from './components/MessageBubble.vue';

</script>

<template>
  <div class="container">
    <MessageBubble />
  </div>
</template>

<style scoped>

    .container {
      background-color: #F1F7FF;
      width: 90vw;
      height: 90vh;
      padding: 10vw;
    }
  
</style>
