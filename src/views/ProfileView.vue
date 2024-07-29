<template>
    <div class="profile">

        <main>
            <div class="left">
                <div class="pet-info">
                    <img :src="imgSrc" :alt="pet.name">
                    <h1> {{ pet.name }} </h1>
                </div>
                <RxList :meds="meds" :class="{ 'meds': true, 'focus-meds': medsFocused }" :shrink="true" @click="focusMeds"/>
            </div>

            <Conversation :messages="messages" class="conversation" />

            <TestList :tests="tests" class="tests" :shrink="true" />
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
                medsFocused: false,
                
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
            focusMeds() {
                this.medsFocused = true;
            }
        },
    }
</script>

<style lang="scss" scoped>
.profile {
    padding: 1em;
    background-color: var(--background-blue);



    main {
        display: flex;
        justify-content: space-between;
        height: 100%;
        .left {
            display: flex;
            flex-direction: column;
            min-width: 20vw;
            .pet-info {
                color: var(--dark-blue);
                display: flex;
                justify-content: center;
                align-items: center;
                border-bottom: 1px solid var(--dark-blue);
                border-right: 3px solid var(--dark-blue);
                border-bottom-right-radius: 10px;
                margin-bottom: 10px;
                box-shadow: 0px 5px 10px -5px var(--shadow-color);
                background: linear-gradient(to bottom, white 70%, var(--background-blue));
                width: 20vw;
                img {
                    height: 100px;
                    width: 100px;
                    object-fit: cover;
                    margin: 10px;
                    border-radius: 100%;
                }

                h1 {
                    font-size: var(--header-2);
                    font-weight: 700;
                    margin: 10px;
                    border-bottom: 2px solid var(--dark-blue);
                }

            }   

            .meds {
                flex-grow: 1;     
                box-shadow: 0px 5px 10px -5px var(--shadow-color);
            }
        }

        .conversation {
            flex-grow: 1;
            margin-inline: 2em;
            box-shadow: 0px 5px 10px -5px var(--shadow-color);

        }

        .tests {
            min-width: 20vw;
            height: auto;
            box-shadow: 0px 5px 10px -5px var(--shadow-color);

        }


    }

}

.focus-meds {
    min-width: 40vw;
    max-width: 40vw;
    transition: ease-in-out 0.5s;
}
</style>