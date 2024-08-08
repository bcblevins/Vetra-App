<template>
  <div class="pet-cards">
    <PetCard v-for="pet in pets" :key="pet.patientId" :pet="pet"/>
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
        console.log(response.data);
      }).catch(error => {
        console.log(error);
      }
      );
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

@media screen and (max-width: 1024px) {
  .pet-cards {
    display:flex;
    max-width: 100vw;
    overflow-x: scroll;
    align-items: flex-start;
    padding-top: 30px;
  }
}
</style>
