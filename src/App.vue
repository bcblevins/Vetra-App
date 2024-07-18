<script>
import { RouterLink, RouterView } from 'vue-router'
import MessageTestingView from './views/testing/MessageTestingView.vue'
import PetcardTestingView from './views/testing/PetcardTestingView.vue'
import GeneralTestingView from './views/testing/GeneralTestingView.vue'


export default {
  components: {
    MessageTestingView,
    PetcardTestingView,
    GeneralTestingView,
  },
};


</script>

<template>
  <div>
    <GeneralTestingView/>
  </div>
</template>

<style scoped>

</style>
