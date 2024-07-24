<template>
    <div>
        <Conversation />
        <TestList />
        <div class="profile">
            <h1> {{ pet.name }} </h1>
        </div>
        <RxList />
    </div>
</template>

<script>
import TestList from '@/components/containers/TestList.vue';
import RxList from '@/components/containers/RxList.vue';
import Conversation from '@/components/containers/Conversation.vue';

    export default {
        data() {
            return {
                pet: {}
            }
        },
        components: {
            TestList,
            RxList,
            Conversation
        },
        created() {
            this.pet = this.$store.state.pets.find(pet => pet.patientId === this.$route.params.id);
        }
    }
</script>

<style lang="scss" scoped>

</style>