<template>
    <div>
        <TestCard :test="test"/>
    </div>
</template>

<script>
import TestCard from '@/components/cards/TestCard.vue';
import PetInfoCard from '@/components/cards/PetInfoCard.vue';
export default {
    data() {
        return {
            pet: {
                "id": "1",
                "name": "Charlie",
                "birthday": "2020-02-20",
                "species": "Canine",
                "breed": "Terrier Mix",
                "sex": "SF",
                "ownerUsername": "bblevins96"
            },
            test: {
                "id": 1,
                "name": "CBC",
                "timestamp": "2024-05-24T00:00:00",
                "patientID": 1,
                "doctorUsername": "cakelly4",
                "results": [
                    {
                        "resultID": 17,
                        "testID": 4,
                        "resultValue": "Positive",
                        "parameterName": "Hookworms",
                        "rangeLow": null,
                        "rangeHigh": null,
                        "unit": null
                    },
                    {
                        "resultID": 18,
                        "testID": 4,
                        "resultValue": "Negative",
                        "parameterName": "Roundworms",
                        "rangeLow": null,
                        "rangeHigh": null,
                        "unit": null
                    },
                    {
                        "resultID": 19,
                        "testID": 4,
                        "resultValue": "Negative",
                        "parameterName": "Whipworms",
                        "rangeLow": null,
                        "rangeHigh": null,
                        "unit": null
                    },
                    {
                        "resultID": 20,
                        "testID": 4,
                        "resultValue": "Negative",
                        "parameterName": "Tapeworms",
                        "rangeLow": null,
                        "rangeHigh": null,
                        "unit": null
                    }
                ]
            },
        }
    },
    components: {
        PetInfoCard,
        TestCard
    },

}
</script>

<style lang="scss" scoped>
div {
    width: 90vw;
    height: 90vh;
    background-color: #F1F7FF;

    .pet-info {
        width: 40vw;
        height: 50vh;
    }
}
</style>