<template>
    <div class="main">
        <div class="heading">
            <h2> {{ test.name }} </h2>
            <br>
            <h4 class="doctor-name"> {{ doctorName }} </h4>
            <br>
            <h3 class="timestamp"> {{ formattedTimeStamp }} </h3>
        </div>
        <table class="results">
            <tr>
                <th>Parameter</th>
                <th>Result</th>
                <th>Unit</th>
                <th>Low Normal</th>
                <th>High Normal</th>
            </tr>
            <tr v-for="result in test.results" :key="result.resultID" :class="{'abnormal': abnormal(result)}">
                <td> {{ result.parameterName }} </td>
                <td> {{ result.resultValue }} </td>
                <td> {{ result.unit }} </td>
                <td> {{ result.rangeLow }} </td>
                <td> {{ result.rangeHigh }} </td>
            </tr>
        </table>
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
        doctorName() {
            return this.test.doctorUsername;
        },

    },
    methods: {
        abnormal(result) {
            // "+" is used to convert strings to numbers
            return +result.resultValue < +result.rangeLow || +result.resultValue > +result.rangeHigh;
        }
    },

}
</script>

<style lang="scss" scoped>
.main {
    color: #094567;
    background-color: rgb(255, 255, 255);
    border: 2px solid #094567;
    border-radius: 5px;
    padding: 10px;
    width: 75vw;

    .heading {
        padding: 20px;
        padding-block: 0px;
        margin-block: 20px;
        margin-left: 10px;
        border-left: 2px solid #094567;
        width: auto;
        display: inline-block;

        h2 {
            font-size: 2em;
            font-weight: 700;
        }
    }

    .heading * {
        display: inline;
        padding-right: 10px
    }
    

    .results {
        padding: 20px;
        border-collapse: collapse;
        margin: 10px;
        width: 95%;

        th {
            border-bottom: 2px solid #094567;
            padding-inline: 3px;
            padding-block: 2px;
            text-align: left;
            background-color: #aae0ff;
        }

        td {
            padding-inline: 3px;
            padding-block: 2px;

        }

        tr:nth-child(odd) {
            background-color: #c1ced3;
        }

        tr.abnormal {
            background-color: #ff6e6e;
            color: black;
        }
    }
}

@media screen and (max-width: 1024px) {
    .main {
        .heading {

            h2 {
                font-size: 1em;
            }

            .doctor-name {
                display: none;
            }

            .timestamp {
                display: none;
            }
        }

        .results {
            font-size: 0.6em;
            width: 100%;
            margin: 0px;
        }
    }
    
}

</style>