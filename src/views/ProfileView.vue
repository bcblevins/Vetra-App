<template>
    <div class="profile">
        <Conversation :messages="messages" class="conversation" />
        <TestList :tests="tests" class="tests" />
        <div class="pet-info">
            <h1> {{ pet.name }} </h1>
            <img :src="imgSrc" :alt="pet.name">
        </div>
        <RxList :meds="meds" class="meds" />
    </div>
</template>

<script>
import TestList from '@/components/containers/TestList.vue';
import RxList from '@/components/containers/RxList.vue';
import Conversation from '@/components/containers/Conversation.vue';
import MessageService from '@/services/MessageService';
import TestService from '@/services/TestService';
import RxService from '@/services/RxService';
import PetService from '@/services/PetService';

export default {
    data() {
        return {
            pet: {},
            messages: [],
            meds: [],
            tests: [],
            imgSrc: ''
        }
    },
    components: {
        TestList,
        RxList,
        Conversation
    },
    computed: {
        age() {
            const today = new Date();
            const birthDate = new Date(this.pet.birthday);
            const m = today.getMonth() - birthDate.getMonth();
            let age = today.getFullYear() - birthDate.getFullYear();
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }
            return age;
        }
    },
    created() {
        this.pet = this.$store.state.pets.find(pet => pet.patientId === this.$route.params.id);
        this.messages = MessageService.getMessages(this.pet.patientId);
        this.tests = TestService.getTests(this.pet.patientId);
        this.meds = RxService.getMeds(this.pet.patientId);
        this.imgSrc = PetService.imgSource(this.pet.patientId);
    }
}
</script>

<style lang="scss" scoped>
.profile {
    display: grid;
    grid-template-columns: 2fr 3fr;
    grid-template-rows: 3fr 2fr;
    grid-template-areas:
        "conversation tests"
        "pet-info meds";
    gap: 2em;
    padding: 1em;
    background-color: #F1F7FF;
    margin: 20px;
    border-radius: 5px;

    .conversation {
        grid-area: conversation;
    }

    .tests {
        grid-area: tests;
    }

    .pet-info {
        grid-area: pet-info;
        color: var(--dark-blue);
        display: flex;
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        padding-inline: 5em;

        h1 {
            font-size: 2em;
            font-weight: 700;
            margin: 0;
            margin-inline: 10px;
            border-bottom: 2px solid var(--dark-blue);
        }

        img {
            height: 100px;
            flex-grow: 1;
            object-fit: cover;
            margin: 10px;
        }



    }

    .meds {
        grid-area: meds;
    }

}
</style>