import axios from 'axios';

const http = axios.create({
    baseURL: 'http://localhost:8080',
});

export default {
    // getMeds(id, token) {
    //     return [
    //         {
    //             "prescriptionId": "1",
    //             "name": "Trazodone 50mg",
    //             "quantity": "30",
    //             "unit": "tablet",
    //             "instructions": "Give 1 tablet by mouth 3 hours prior to thunderstorm",
    //             "refills": "3",
    //             "patientId": "1",
    //             "doctorUsername": "cakelly4",
    //             "active": "true"
    //         },
    //         {
    //             "prescriptionId": "2",
    //             "name": "Apoquel 16mg",
    //             "quantity": "30",
    //             "unit": "tablet",
    //             "instructions": "Give 1 tablet by mouth every 12 hours",
    //             "refills": "0",
    //             "patientId": "1",
    //             "doctorUsername": "cakelly4",
    //             "active": "true"
    //         },
    //         {
    //             "prescriptionId": "3",
    //             "name": "Simparica 40mg",
    //             "quantity": "1",
    //             "unit": "tablet",
    //             "instructions": "Give 1 tablet by mouth every 30 days",
    //             "refills": "2",
    //             "patientId": "1",
    //             "doctorUsername": "cakelly4",
    //             "active": "true"
    //         }
    //     ];
    // },
    getMeds(id, token) {
        http.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        let response = http.get(`/patients/${id}/prescriptions`);
        return response;
    }
}