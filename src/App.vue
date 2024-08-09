<script>
import { RouterLink, RouterView, useRoute } from 'vue-router'
import Header from './components/items/Header.vue';


export default {
  components: {
    Header
  },
  computed: {
    route() {
      return useRoute()
    },
    showHeader() {
      return this.route.name !== 'login' && this.route.name !== 'register'
    }
  }
};


</script>

<template>
  <div class="app">
    <Header v-if="showHeader" class="header"/>
    <RouterView class="router-view"/>
  </div>
</template>

<style scoped>

.app {
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #BDECFC;

  .header {
    flex: 0 0 40px;
  }
}
.router-view {
  flex: 1;
}
</style>
