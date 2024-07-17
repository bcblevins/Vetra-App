<script>
import { RouterLink, RouterView } from 'vue-router'
import MessageTestingView from './views/MessageTestingView.vue'
import PetcardTestingView from './views/PetcardTestingView.vue'


export default {
  components: {
    MessageTestingView,
    PetcardTestingView
  },
};


</script>

<template>
  <div>
    <PetcardTestingView/>
  </div>
</template>

<style scoped>

</style>
