import axios from 'axios';

const http = axios.create({
    baseURL: 'http://localhost:3000',
});

export default class UserService {
    login(username, password) {
        return http.post('/auth/login', { username, password });
    }
}