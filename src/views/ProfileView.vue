<template>
    <div class="profile">

        <main>
            <div class="left">
                <div class="pet-info">
                    <img :src="imgSrc" :alt="pet.firstName">
                    <h1> {{ pet.firstName }} </h1>
                </div>
                <RxList :meds="meds" class="meds" :shrink="true" />
                <TestList :tests="tests" class="tests" :shrink="true" />
            </div>

            <Conversation :messages="messages" class="conversation" />

        </main>


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
            imgSrc: '',

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
    },
    methods: {

    },
    mounted() {
        document.title = 'Profile | ' + this.pet.firstName;
    }
}
</script>

<style lang="scss" scoped>
.profile {
    padding-left: 0%;
    background-color: var(--background-blue);



    main {
        display: flex;
        justify-content: space-between;
        height: 100%;

        .left {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 16vw;
            background-color: var(--off-white);



            .pet-info {
                color: var(--dark-blue);
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;

                border-bottom-right-radius: 10px;
                margin-bottom: 5vh;
                width: 15vw;

                img {
                    height: 100px;
                    width: 100px;
                    object-fit: cover;
                    margin: 10px;
                    border-radius: 100%;
                }

                h1 {
                    font-size: var(--header-1);
                    font-weight: 700;
                    margin: 10px;
                    border-bottom: 2px solid var(--dark-blue);
                    text-shadow: 0px 0px 2px white;
                }

            }

            .meds {
                max-height: 20vh;
                max-width: 15vw;
                margin-bottom: 5vh;
                border: none;
            }

            .tests {
                max-width: 10vw;
                height: 40vh;
                border: none;

            }
        }

        .left>h2 {
            font-size: var(--header-2);
            font-weight: 700;
            margin: 10px;
        }

        .conversation {
            flex-grow: 1;
            margin-inline: 2em;
            margin-block: 1em;
            box-shadow: 0px 5px 10px -5px var(--shadow-color);

        }




    }

}
</style>