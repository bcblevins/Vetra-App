// import axios from 'axios';

// const http = axios.create({
//     baseURL: 'http://localhost:3000',
// });

export default {
    getMessages(id) {
        return [
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
                "body": "She's doing well, thank you for asking."
            }
        ];
    }
}