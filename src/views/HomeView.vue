<template>
  <div class="pet-cards">
    <PetCard v-for="pet in pets" :key="pet.id" :pet="pet"/>
  </div>
</template>

<script>
import PetCard from '@/components/cards/PetCard.vue';
import PetService from '@/services/PetService';

  export default {
    components: {
      PetCard
    },
    data() {
      return {
        pets: []
      }
    },
    created() {
      PetService.getPets(this.$store.state.token).then(response => {
        this.pets = response.data;
      })
    },
    mounted() {
      document.title = 'Home';
    }
  }
</script>

<style lang="scss" scoped>
.pet-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  margin: 20px;
  color: #000;
}
</style>
