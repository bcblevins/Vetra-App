<template>
    <div class="main">
        <!-- <TestCard :test="test"/> -->
        <!-- <RxItem :med="med"/> -->
        <!-- <TestItem :test="test"/> -->
        <Login />
    </div>
</template>

<script>
import TestCard from '@/components/cards/TestCard.vue';
import PetInfoCard from '@/components/cards/PetInfoCard.vue';
import RxItem from '@/components/items/RxItem.vue';
import TestItem from '@/components/items/TestItem.vue';
import Login from '@/components/items/Login.vue';
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
                "name": "Fecal Analysis",
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
            med: {
                "prescriptionId": "1",
                "name": "Trazodone 50mg",
                "quantity": "30",
                "unit": "tablet",
                "instructions": "Give 1 tablet by mouth 3 hours prior to thunderstorm",
                "refills": "3",
                "patientId": "1",
                "doctorUsername": "cakelly4",
                "active": "true"
            }
        }
    },
    components: {
        PetInfoCard,
        TestCard,
        RxItem,
        TestItem,
        Login
    },

}
</script>

<style lang="scss" scoped>
.main {
    background-color: #F1F7FF;
    width: 90vw;
    height: 90vh;

    .pet-info {
        width: 40vw;
        height: 50vh;
    }
}
</style>