<template>
    <div class="main" @click="goToTest()">
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
            this.$router.push({ name: 'tests', params: { id: this.test.patientID, testId: this.test.id } })
        }
    }
}
</script>

<style lang="scss" scoped>
.main {
    border-block: 1px solid #094567;
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

.active-test {
    background-color: rgb(187, 255, 255);
    border-left: ridge 4px var(--dark-blue);
    border-block: none;
    margin-left: 10px;
    h2 {
        color: #000000;
    
    }
}


.main:hover {
    background-color: #dedede;
    cursor: pointer;
    color: #000000;
}

.active-test:hover {
    background-color: rgb(187, 255, 255);
}

.main.shrink {

    height: auto;
    color: #094567;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: start;

    h2 {
        font-size: var(--standard-text);
        font-weight: 700;
        margin: 0px;
        display: inline;
        padding-right: .5em;
        padding-bottom: .2em;
        border-right: 1px solid #094567;
        border-right: none;
        display: inline-block;
    }

    h3 {
        display: inline;
        font-size: var(--standard-text);
        font-weight: 400;
        border-top: 1px solid var(--dark-blue);
        margin: 0px;
        padding-top: .5em;

    }

}

@media screen and (max-width: 600px) {
    .main.shrink {
        padding: 15px;
        padding-inline: 2px;
        h2 {
            font-size: .7em;
        }

        h3 {
            display: none;
        }
    }
    
}


</style>