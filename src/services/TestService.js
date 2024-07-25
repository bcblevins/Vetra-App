// import axios from 'axios';

// const http = axios.create({
//     baseURL: 'http://localhost:3000',
// });

export default {
    getTests(id) {
        return [
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
        ]
    }
}