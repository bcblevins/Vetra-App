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
                        <li v-for="med in meds.slice(0, 2)" key="med.prescriptionId"> {{ med.name }} </li>
                        <li v-show="meds.length > 3">...</li>
                        <li v-show="meds.length < 1" >No current medications</li>
                    </ul>
                </div>
                <div class="tests"
                    @click="$router.push({ name: 'tests', params: { id: this.$route.params.id, testId: this.tests[0].id } })">
                    <h2>Tests</h2>
                    <ul>
                        <li v-for="test in tests.slice(0, 3)"> {{ test.name + " | " + new
                            Date(test.timestamp).toLocaleDateString()}} </li>
                        <li v-show="tests.length > 4">...</li>
                        <li v-show="tests.length < 1" >No tests in record</li>
                    </ul>
                </div>

            </nav>

            <Conversation class="conversation" :patient="true" />

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
        PetService.getPet(this.$route.params.id, this.$store.state.token).then(response => {
            this.pet = response.data;

            TestService.getTests(this.pet.patientId, this.$store.state.token).then(response => {
                this.tests = response.data;
            });

            RxService.getMeds(this.pet.patientId, this.$store.state.token).then(response => {
                this.meds = response.data;
            });

            this.imgSrc = PetService.imgSource(this.pet.patientId);
        }).catch(error => {
            console.log(error);
        })

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
            border-inline: 3px solid var(--dark-blue);


            .pet-info {
                color: var(--dark-blue);
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;




                margin-bottom: 5vh;
                padding-top: 10px;
                width: 100%;


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
                    color: aliceblue;
                    background-color: var(--dark-blue);
                    box-shadow: 0px 5px 5px -5px var(--dark-blue);
                    width: 100%;
                    text-align: center;

                }

            }


            .meds {
                border-radius: 10px;
                transition: .1s ease;
                width: 100%;

                h2 {
                    margin-top: 0px;
                    background-color: var(--dark-blue);
                    width: 100%;
                    color: white;
                    text-align: center;
                }

                .meds-list {
                    max-height: 20vh;
                    max-width: 15vw;
                    margin-bottom: 0px;
                    padding-left: 15px;
                    list-style: none;
                    margin-bottom: 20px;
                    text-decoration: underline;
                    
                    li::before {
                        content: '';
                        display: inline-block;
                        width: 1em;
                        height: 1em;
                        background-image: url('../assets/icons/pill.svg');
                        background-size: cover;
                        margin-right: 8px;
                    }
                }
            }

            .meds:hover {
                box-shadow: 0px 0px 10px white;
                background-color: white;
                cursor: pointer;

                h2 {
                    background-color: rgb(102, 109, 126);
                }


            }

            .tests {
                width: 100%;
                text-decoration: underline;


                h2 {
                    margin-top: 0px;
                    background-color: var(--dark-blue);
                    width: 100%;
                    color: white;
                    text-align: center;
                }

                ul {
                    max-height: 20vh;
                    max-width: 15vw;
                    margin-bottom: 0px;
                    padding-left: 15px;

                    li {
                        list-style: none;
                        margin-bottom: 10px;
                    }

                    li::before {
                        content: '';
                        display: inline-block;
                        width: 1em;
                        height: 1em;
                        background-image: url('../assets/icons/results.svg');
                        background-size:contain;
                        background-repeat: no-repeat;
                        margin-right: 8px;
                    }
                }

            }

            .tests:hover {
                box-shadow: 0px 0px 10px white;
                background-color: white;
                cursor: pointer;

                h2 {
                    background-color: rgb(102, 109, 126);
                }
            }
        }

        .conversation {
            flex-grow: 1;
            margin-inline: 2em;
            margin-block: 1em;
            box-shadow: 0px 5px 10px -5px var(--shadow-color);
            min-height: 30em;

        }

    }

}

@media screen and (max-width: 1024px) {
    .profile {
        overflow: auto;

        main {
            flex-direction: column;

            .left {
                width: 100%;

                .meds {
                    width: 50vw;

                    .meds-list {
                        display: none;
                    }
                }


                .tests {
                    width: 50vw;

                    ul {
                        display: none;
                    }
                }

                h2 {
                    border: 1px solid var(--dark-blue);
                    border-radius: 5px;
                    padding: 10px;
                    background-color: white;

                }

            }

            .conversation {
                margin-inline: 0px;
            }
        }
    }
}
</style>