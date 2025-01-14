<template>
    <div class="main">
        <div :class="{ 'med-refills': true, 'pending': med.refill_pending }" @click="sendRefillRequest">
            <p class="request-refill"> {{med.refill_pending ? 'Pending' : 'Refill'}} </p>
        </div>
        <div class="med-details">
            <div class="med-title">
                <span class="med-name"> {{ med.medication_name }} </span>
                <span class="med-quantity"> {{ med.quantity + ' ' + med.unit}} </span>
                <span class="med-refill-quantity"> {{ med.refills + ' refills' }} </span>
            </div>

            <p class="med-instructions"> {{ med.instructions }} </p>
        </div>
    </div>
</template>

<script>
import RxService from '@/services/RxService';
import { sendRefillRequest } from '@/services/supabase/refillServiceSP';

export default {
    props: ['med'],
    data() {
        return {

        }
    },
    computed: {
        sIfNeeded() {
            return this.med.quantity > 1 ? 's' : '';
        }
    },
    methods: {
        sendRefillRequest() {
            if (this.med.refill_pending) {
                console.log('Refill request already pending');
                return;
            }
            sendRefillRequest(this.med).then((data) => {

                console.log(data)
                this.med.refillPending = data.status === 'PENDING';
            }).catch((error) => {
                console.log(error);
            });
        }
    },
}
</script>


<style lang="scss" scoped>
.main {
    color: #094567;
    display: flex;
    justify-content: start;
    height: auto;
    background-color: var(--off-white);
    margin-bottom: 10px;
    box-shadow: 0px 5px 10px -5px var(--shadow-color);
    border-radius: 10px;


    .med-details {
        display: inline-block;
        padding: .7em;
        width: 95%;

        .med-title {
            border-bottom: 1px solid var(--dark-blue);
            padding-bottom: .3em;

            .med-name {
                font-size: 1.2em;
                font-weight: 700;
                margin: 10px;
                display: inline;
                padding-right: .5em;
                border-right: 1px solid var(--dark-blue);
            }

            .med-quantity {
                border-right: 1px solid var(--dark-blue);
                padding-right: 10px;
                margin-right: 10px;
            }

            .med-refill-quantity {
                color: var(--dark-blue);
            }
        }

        .med-instructions {
            font-size: 1em;
            margin: 10px;
            font-style: italic;
            font-weight: 1100;
        }
    }

    .med-refills {
        display: inline-block;
        padding: 10px;
        background-color: var(--dark-blue);
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        cursor: pointer;
        border-radius: 10px;
        box-shadow: 5px 0px 10px -5px var(--dark-blue);

        .request-refill {
            font-size: 1.2em;
            padding: 5px;

        }
    }

    .med-refills.pending {
        background-color: color-mix(in srgb, var(--dark-blue) 65%, rgb(174, 223, 252) 35%);
        box-shadow: none;

    }

    .med-refills.pending:hover {
        background-color: color-mix(in srgb, var(--dark-blue) 65%, rgb(174, 223, 252) 35%);

        animation-duration: 1s;

        .request-refill {
            color: white;
        }
    }

    .med-refills:hover {
        background-color: #01f7d6;

        .request-refill {
            color: var(--dark-blue);
        }
    }

}

@media screen and (max-width: 600px) {
    .main {
        flex-direction: column;

        .med-details {
            .med-title {
                .med-name {
                    display: block;
                    text-align: center;
                    border-right: none;
                }

                .med-quantity {
                    border-right: none;
                    margin-right: 60%;
                }

            }
        }
    }
}
</style>