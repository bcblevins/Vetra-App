import axios from 'axios';

const http = axios.create({
    baseURL: 'http://localhost:8080',
});


export default {
    getNotificationsTest() {
        return [
            {
                "id": 1,
                "patientId": 1,
                "messageId": 1,
                "requestId": 0,
                "testId": 0,
                "isRead": false,
                "timestamp": "2024-08-01T12:00:00"
            },
            {
                "id": 2,
                "patientId": 1,
                "messageId": 0,
                "requestId": 1,
                "testId": 0,
                "isRead": false,
                "timestamp": "2024-08-04T12:00:00"
            },
            {
                "id": 3,
                "patientId": 1,
                "messageId": 0,
                "requestId": 0,
                "testId": 1,
                "isRead": false,
                "timestamp": "2024-08-01T12:00:00"
            }
        ];
    }
}