<template>
  <div class="pet-cards" v-cloak>
    <PetCard v-for="pet in pets" :key="pet.patientId" :pet="pet"/>
    <div class="no-pet-warning" v-show="showNoPetWarning" >
      <h2>Looks like your account has not been setup yet.</h2>
      <h3>Please contact your veterinary hospital.</h3>
    </div>

  </div>
</template>

<script>
import PetCard from '@/components/cards/PetCard.vue';
import PetService from '@/services/PetService';

  export default {
    components: {
      PetCard,
      showNoPetWarning: false
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
        if (response.data.length === 0) {
          this.showNoPetWarning = true;
        }
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
  animation: fade-in 1s forwards;

  @keyframes fade-in {
    0% {
      opacity: 0;
      scale: .9;
      filter: blur(10px);
    }
    20% {
      opacity: 0.5;
      scale: 1;
      filter: blur(0px);
    }
    100% {
      opacity: 1;
      scale: 1;
    }
    
  }
}

.no-pet-warning {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;

  h2 {
    font-size: 2em;
    margin: 10px;
  }
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
