<script>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/items/Header.vue';


export default {
  components: {
    Header
  },
};


</script>

<template>
  <div class="app">
    <Header />
    <RouterView class="router-view"/>
  </div>
</template>

<style scoped>

.app {
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #BDECFC;
}
.router-view {
  flex: 1;
  margin: 1em;
}
</style>
