// import axios from 'axios';

// const http = axios.create({
//     baseURL: 'http://localhost:3000',
// });

export default {
    list() {
        return [
            {
                patientId: "3",
                name: "Arlo",
                birthday: "01/01/2019",
                species: "Feline",
                sex: "CM",
                ownerUsername: "bblevins96",
            },
            {
                patientId: "1",
                name: "Charlie",
                birthday: "03/03/2015",
                species: "Canine",
                sex: "SF",
                ownerUsername: "bblevins96",
            },
            {
                patientId: "2",
                name: "Sunny",
                birthday: "01/01/2017",
                species: "Feline",
                sex: "CM",
                ownerUsername: "bblevins96",
            }
        ];
    }
}