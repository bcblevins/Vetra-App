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
      this.pets = this.$store.state.pets;
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
}
</style>
