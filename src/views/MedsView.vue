<template>
    <div class="meds-view">
        <main>
            <h1>Prescriptions</h1>
            <div class="rx-list">
                <RxItem v-for="med in meds" :key="med.id" :med="med" />
            </div>
            <div class="none-message" v-if="meds.length === 0" >
                No active prescriptions...
            </div>

        </main>
    </div>
</template>

<script>
import RxItem from '@/components/items/RxItem.vue';
import { getMeds } from '@/services/supabase/rxServiceSP';
import { getRefillRequests } from '@/services/supabase/refillServiceSP';
import { getPetName } from '@/services/supabase/petServiceSP';
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
        getMeds(this.$route.params.id).then(data => {
            this.meds = data;
            for (let med of this.meds) {
                getRefillRequests(med.prescription_id).then(data => {
                    if (data.length > 0) {
                        let array = data;
                        array.sort((a, b) => {
                            return new Date(b.request_id) - new Date(a.request_id);
                        });
                        if (array[0].status === 'PENDING') {
                            med.refillPending = true;
                        }
                    } else {
                        med.refill_pending = false;
                    }
                });
            }
        });
    },
    methods: {
        setPageTitle() {
            getPetName(this.$route.params.id).then((data) => {
                document.title = data + "'s Prescriptions" 
            })
        }
    },
    mounted() {
        this.setPageTitle()
    }
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
            overflow-y: hidden;
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

        .none-message {
            font-size: 20px;
            color: rgb(155, 159, 165);
        }
    }
}

@media screen and (max-width: 600px) {
    .meds-view {
        margin: 10px;
        main {
            width: 90vw;
        }
    }
    
}
</style>