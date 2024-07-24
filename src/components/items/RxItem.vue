<template>
    <div class="main">
        <div class="med-details">
            <div class="med-title">
                <span class="med-name"> {{ med.name }} </span>
                <span class="med-quantity"> {{ med.quantity + ' ' + med.unit + sIfNeeded }} </span>
                <span class="med-refill-quantity"> {{ med.refills + ' refills' }} </span>

            </div>

            <p class="med-instructions"> {{ med.instructions }} </p>
        </div>

        <div class="med-refills">
            <p class="request-refill">Request Refill</p>
        </div>
    </div>
</template>

<script>
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
}
</script>


<style lang="scss" scoped>
.main {
    color: #094567;
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid #094567;
    height: 6em;

    .med-details {
        display: inline-block;
        padding: .7em;

        .med-title {
            border-bottom: 1px solid #094567;
            padding-bottom: .3em;
            .med-name {
                font-size: 1.2em;
                font-weight: 700;
                margin: 10px;
                display: inline;
                padding-right: .5em;
                border-right: 1px solid #094567;
            }

            .med-quantity {
                border-right: 1px solid #094567;
                padding-right: 10px;
                margin-right: 10px;
            }

            .med-refill-quantity {
                color: #094567;
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
        background-color: #094567;
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        cursor: pointer;
        border: 1px solid #ffffff;
        border-radius: 5px;

        .request-refill {
            font-size: 1.2em;
            padding: 5px;

        }
    }

    .med-refills:hover {
        background-color: #01f7d6;

        .request-refill {
            color: #094567;
        }
    }



}
</style>