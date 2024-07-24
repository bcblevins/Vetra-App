<template>
    <div class="main">
        <!-- <TestCard :test="test"/> -->
        <!-- <RxItem :med="med"/> -->
        <!-- <TestItem :test="test"/> -->
        <!-- <Login /> -->
        <!-- <Conversation class="conversation" :messages="messages"/> -->
        <!-- <TestList :tests="tests"/> -->
        <Header />
        <RxList :meds="meds" />
    </div>
</template>

<script>
import TestCard from '@/components/cards/TestCard.vue';
import PetInfoCard from '@/components/cards/PetInfoCard.vue';
import RxItem from '@/components/items/RxItem.vue';
import TestItem from '@/components/items/TestItem.vue';
import Login from '@/components/items/Login.vue';
import Conversation from '@/components/containers/Conversation.vue';
import TestList from '@/components/containers/TestList.vue';
import RxList from '@/components/containers/RxList.vue';
import Header from '@/components/items/Header.vue';


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
            tests: [
                {
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
                {
                    "id": 2,
                    "name": "Heartworm Test",
                    "timestamp": "2024-05-24T00:00:00",
                    "patientID": 1,
                    "doctorUsername": "cakelly4",
                    "results": [
                        {
                            "resultID": 21,
                            "testID": 5,
                            "resultValue": "Negative",
                            "parameterName": "Heartworm Antigen",
                            "rangeLow": null,
                            "rangeHigh": null,
                            "unit": null
                        }
                    ]
                },
                {
                    "id": 3,
                    "name": "CBC",
                    "timestamp": "2024-05-24T00:00:00",
                    "patientID": 1,
                    "doctorUsername": "cakelly4",
                    "results": [
                        {
                            "resultID": 22,
                            "testID": 6,
                            "resultValue": "Normal",
                            "parameterName": "RBC",
                            "rangeLow": "5.5",
                            "rangeHigh": "8.5",
                            "unit": "M/uL"
                        },
                        {
                            "resultID": 23,
                            "testID": 6,
                            "resultValue": "Normal",
                            "parameterName": "HGB",
                            "rangeLow": "12",
                            "rangeHigh": "18",
                            "unit": "g/dL"
                        },
                        {
                            "resultID": 24,
                            "testID": 6,
                            "resultValue": "Normal",
                            "parameterName": "HCT",
                            "rangeLow": "37",
                            "rangeHigh": "55",
                            "unit": "%"
                        },
                        {
                            "resultID": 25,
                            "testID": 6,
                            "resultValue": "Normal",
                            "parameterName": "WBC",
                            "rangeLow": "6",
                            "rangeHigh": "17",
                            "unit": "K/uL"
                        },
                        {
                            "resultID": 26,
                            "testID": 6,
                            "resultValue": "Normal",
                            "parameterName": "PLT",
                            "rangeLow": "170",
                            "rangeHigh": "400",
                            "unit": "K/uL"
                        }
                    ]
                }
            ],
            meds: [
                {
                    "prescriptionId": "1",
                    "name": "Trazodone 50mg",
                    "quantity": "30",
                    "unit": "tablet",
                    "instructions": "Give 1 tablet by mouth 3 hours prior to thunderstorm",
                    "refills": "3",
                    "patientId": "1",
                    "doctorUsername": "cakelly4",
                    "active": "true"
                },
                {
                    "prescriptionId": "2",
                    "name": "Apoquel 16mg",
                    "quantity": "30",
                    "unit": "tablet",
                    "instructions": "Give 1 tablet by mouth every 12 hours",
                    "refills": "0",
                    "patientId": "1",
                    "doctorUsername": "cakelly4",
                    "active": "true"
                },
                {
                    "prescriptionId": "3",
                    "name": "Simparica 40mg",
                    "quantity": "1",
                    "unit": "tablet",
                    "instructions": "Give 1 tablet by mouth every 30 days",
                    "refills": "2",
                    "patientId": "1",
                    "doctorUsername": "cakelly4",
                    "active": "true"
                }
            ],
            messages: [
                {
                    "id": 1,
                    "fromUsername": "cakelly4",
                    "toUsername": "bblevins96",
                    "timestamp": "2024-05-24T00:00:00",
                    "body": "Hello, how are you today?"
                },
                {
                    "id": 2,
                    "fromUsername": "bblevins96",
                    "toUsername": "cakelly4",
                    "timestamp": "2024-05-24T02:00:00",
                    "body": "I'm doing well, thank you for asking."

                },
                {
                    "id": 3,
                    "fromUsername": "cakelly4",
                    "toUsername": "bblevins96",
                    "timestamp": "2024-05-24T02:02:00",
                    "body": "I'm glad to hear that. How is Charlie doing?"
                },
                {
                    "id": 4,
                    "fromUsername": "bblevins96",
                    "toUsername": "cakelly4",
                    "timestamp": "2024-05-24T02:10:00",
                    "body": "He's doing well, thank you for asking."
                }
            ]
        }
    },
    components: {
        PetInfoCard,
        TestCard,
        RxItem,
        TestItem,
        Login,
        Conversation,
        TestList,
        RxList,
        Header
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

    .conversation {
        width: 40vw;
        height: 50vh;
    }
}

.main * {
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
</style>