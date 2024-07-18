<template>
    <div class="main" @click="goToTest">
        <h2> {{ test.name }} </h2>
        <h3> {{ formattedTimeStamp }} </h3>
    </div>
</template>

<script>
export default {
    props: ['test'],
    computed: {
        formattedTimeStamp() {
            const date = new Date(this.test.timestamp);
            const dateString = date.toLocaleDateString('en-US', {
                month: 'numeric',
                day: 'numeric',
                year: 'numeric',
            });
            const timeString = date.toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                hour12: true
            });
            return `${dateString} ${timeString}`;
        },

    },        
    methods: {
        goToTest() {
            this.$router.push({ name: 'test', params: { petId: test.patientID, test: test.id } })
        }
    }
}
</script>

<style lang="scss" scoped>
.main {
    border-bottom: 1px solid #094567;
    height: 4em;
    color: #094567;
    padding-top: 10px;
    padding-left: 10px;

    h2 {
        font-size: 1.5em;
        font-weight: 700;
        margin: 10px;
        display: inline;
        padding-right: .5em;
        border-right: 1px solid #094567;
    }

    h3 {
        display: inline;
    }
}

.main:hover {
    background-color: #dedede;
    cursor: pointer;
    color: #000000;
}
</style>