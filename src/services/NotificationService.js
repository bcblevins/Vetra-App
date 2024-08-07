import axios from 'axios';

// content type set explicitly to avoid errors. Without this, sending the integer in markRead() causes this error: "Content-Type 'application/x-www-form-urlencoded;charset=UTF-8' is not supported"
const http = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        'Content-type': 'application/json'
    }
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
    },
    getNotifications(token) {
        http.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        return http.get('/notifications');
    },
    markRead(notificationId, token) {
        http.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        return http.post('/notifications', notificationId); 
    }

}