<template>
    <div class="meds-view">
        <main>
            <h1>Prescriptions</h1>
            <div class="rx-list">
                <RxItem v-for="med in meds" :key="med.id" :med="med" />
            </div>

        </main>
    </div>
</template>

<script>
import RxService from '@/services/RxService';
import RxItem from '@/components/items/RxItem.vue';
export default {
    data() {
        return {
            meds: [],
        }
    },
    components: {
        RxItem
    },
    created() {
        RxService.getMeds(this.$route.params.id, this.$store.state.token).then(response => {
            this.meds = response.data;
            for (let med of this.meds) {
                RxService.getRefillRequests(this.$route.params.id, med.prescriptionId, this.$store.state.token).then(response => {
                    if (response.data.length > 0) {
                        let array = response.data;
                        console.log(array);
                        array.sort((a, b) => {
                            return new Date(b.requestId) - new Date(a.requestId);
                        });
                        console.log(array);
                        if (array[0].status === 'PENDING') {
                            med.refillPending = true;
                        }
                    } else {
                        med.refillPending = false;
                    }
                });
            }
        });
    },
}
</script>

<style lang="scss" scoped>
.meds-view {
    display: flex;
    justify-content: center;
    background-color: white;
    margin: 20px;
    margin-inline: 10vw;
    box-shadow: 0px 0px 10px -5px var(--shadow-color);


    main {
        width: 60vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: start;
        margin-top: 20px;

        img {
            height: var(--header-1);
        }

        h1 {
            padding: 10px;
            display: inline-block;
            width: 80%;
            font-size: var(--header-1);
            color: var(--dark-blue);
            border-bottom: 2px solid var(--dark-blue);
            text-align: center;
            margin-bottom: 40px;
            box-shadow: 0px 10px 5px -10px var(--shadow-color);
        }

        .rx-list {
            border: none;
            overflow-y: scroll;
            font-size: var(--standard-text);
            animation: slide-in .4s forwards;

            @keyframes slide-in {
                from {
                    transform: translateY(100%);
                }
                to {
                    transform: translateY(0%);
                }
            }
        }
    }
}

@media screen and (max-width: 1024px) {
    .meds-view {
        margin: 10px;
        main {
            width: 90vw;
        }
    }
    
}
</style>