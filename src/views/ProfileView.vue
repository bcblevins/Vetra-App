<template>
    <div class="profile">

        <main>
            <nav class="left">
                <div class="pet-info">
                    <img :src="imgSrc" :alt="pet.name">
                    <h1> {{ pet.name }} </h1>
                </div>
                <div class="meds" @click="$router.push({ name: 'rx', params: { id: pet.patientId } })">
                    <h2>Prescriptions</h2>
                    <ul class="meds-list">
                        <li v-for="med in meds" key="med.prescriptionId"> {{ med.name }} </li>
                    </ul>
                </div>
                <h2>Tests</h2>
                <TestList :tests="tests" class="tests" :shrink="true" />
            </nav>

            <Conversation class="conversation" :patient="true"/>

        </main>


    </div>
</template>

<script>
import TestList from '@/components/containers/TestList.vue';
import RxList from '@/components/containers/RxList.vue';
import Conversation from '@/components/containers/Conversation.vue';
import TestService from '@/services/TestService';
import RxService from '@/services/RxService';
import PetService from '@/services/PetService';

export default {
    data() {
        return {
            pet: {},
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
        TestService.getTests(this.pet.patientId, this.$store.state.token).then(response => {
            this.tests = response.data;
        });
        RxService.getMeds(this.pet.patientId, this.$store.state.token).then(response => {
            this.meds = response.data;
        });
        this.imgSrc = PetService.imgSource(this.pet.patientId);
    },
    methods: {

    },
    mounted() {
        document.title = 'Profile | ' + this.pet.name;
    }
}
</script>

<style lang="scss" scoped>
.profile {
    padding-left: 0%;
    background-color: var(--background-blue);
    height: 90%;

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
                background-color: white;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;

                border-bottom: 3px solid var(--dark-blue);
                border-inline: 2px solid var(--dark-blue);

                border-top-left-radius: calc(120px / 2);
                border-top-right-radius: calc(120px / 2);
                border-bottom-left-radius: 10px;
                border-bottom-right-radius: 10px;

                border-bottom-right-radius: 10px;
                margin-bottom: 5vh;
                margin-top: 10px;
                width: 120px;

                box-shadow: 0px 5px 5px -5px var(--dark-blue);

                img {
                    height: 120px;
                    width: 120px;
                    object-fit: cover;
                    margin: 0px;
                    margin-top: -4px;
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
                padding: 5px;
                border-radius: 10px;
                transition: .1s ease;

                h2 {
                    margin-top: 0px;
                }

                .meds-list {
                    max-height: 20vh;
                    max-width: 15vw;
                    margin-bottom: 0px;
                    padding-left: 15px;
                    list-style: none;

                    li::before {
                        content: '';
                        display: inline-block;
                        height: y;
                        width: x;
                        background-image: url('../assets/icon/pill.svg');
                    }

                }
            }

            .meds:hover {
                box-shadow: 0px 0px 10px var(--shadow-color);
                background-color: white;
                cursor: pointer;
                h2 {
                    border-bottom: 2px solid var(--dark-blue);
                    margin-bottom: 18px;

                }


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

}</style>