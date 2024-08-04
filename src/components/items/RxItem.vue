<template>
    <div class="main">
        <div :class="{ 'med-refills': true, 'pending': med.refillPending }" @click="sendRefillRequest">
            <p class="request-refill"> {{med.refillPending ? 'Pending' : 'Refill'}} </p>
        </div>
        <div class="med-details">
            <div class="med-title">
                <span class="med-name"> {{ med.name }} </span>
                <span class="med-quantity"> {{ med.quantity + ' ' + med.unit + sIfNeeded }} </span>
                <span class="med-refill-quantity"> {{ med.refills + ' refills' }} </span>
            </div>

            <p class="med-instructions"> {{ med.instructions }} </p>
        </div>
    </div>
</template>

<script>
import RxService from '@/services/RxService';

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
            if (this.med.refillPending) {
                console.log('Refill request already pending');
                return;
            }
            RxService.sendRefillRequest(this.med.prescriptionId, this.$route.params.id, this.$store.state.token).then((response) => {

                
                this.med.refillPending = response.data.status === 'PENDING';
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
    height: 6em;
    background-color: var(--off-white);
    margin-bottom: 10px;
    box-shadow: 0px 5px 10px -5px;
    border-radius: 10px;


    .med-details {
        display: inline-block;
        padding: .7em;
        width: 100%;

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

.main.shrink {
    height: auto;

    .med-details {
        padding-inline: 0px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

        .med-title {
            border-bottom: none;

            span {
                font-size: var(--standard-text);
            }

            .med-name {
                font-size: var(--standard-text);
                border-right: none;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                margin-right: 0px;

            }

            .med-quantity {
                display: none;
            }

            .med-refill-quantity {
                display: none;
            }
        }

        p {
            display: none;
        }
    }

    .med-refills {
        padding: 0px;

        p {
            font-size: var(--header-3);
            margin: 0px;
        }
    }
}
</style>