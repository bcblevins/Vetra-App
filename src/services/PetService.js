import axios from 'axios';

const http = axios.create({
     baseURL: 'http://localhost:8080',
});

export default {
    getPetsTest(token) {
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
    },
    getPets(token) {
        http.defaults.headers.common['Authorization'] = 'Bearer ' + token;
        return http.get('/patients');
    },
    getPet(patientId, token) {
        http.defaults.headers.common['Authorization'] = 'Bearer ' + token;
        return http.get('/patients/' + patientId);
    },
    imgSource(id) {
        return '/src/assets/img/' + id + '.jpg'
    },
}