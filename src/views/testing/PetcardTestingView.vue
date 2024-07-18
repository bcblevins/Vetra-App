<template>
    <div>
        <PetCard :pet="pet"/>
    </div>
</template>

<script>
import PetCard from '../../components/cards/PetCard.vue'
export default {
    components: {
        PetCard
    },
    data() {
        return {
            pet: {
                "id": "1",
                "name": "Charlie",
                "birthday": "2020-02-20",
                "species": "Canine",
                "sex": "SF",
                "ownerUsername": "bblevins96"
            }
        }
    },
    }
    </script>

<style lang="scss" scoped>

</style>