import axios from 'axios';

const http = axios.create({
    baseURL: 'http://localhost:8080',
});

export default {
    getMeds(id, token) {
        http.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        let response = http.get(`/patients/${id}/prescriptions`);
        return response;
    },
    getRefillRequests(petId, id, token) {
        http.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        let response = http.get(`patients/${petId}/prescriptions/${id}/requests`);
        return response;
    },
    
    sendRefillRequest(id, petId, token) {
        http.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        let response = http.post(`patients/${petId}/prescriptions/${id}/requests`,
            {
                prescriptionId: id,
                status: "PENDING",
                requestDate: new Date().toISOString()
            }
        );
        return response;
    }
}