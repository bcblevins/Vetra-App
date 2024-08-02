import axios from 'axios';

const http = axios.create({
    baseURL: 'http://localhost:8080',
});

export default {
    login(username, password) {
        return http.post('/auth/login', { username, password });
    },
    getUser(username, token) {
        http.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        return http.get(`/users/${username}/self`);
    },
    getRoles(token) {
        http.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        return http.get('/roles');
    },
    getName(username, token) {
        http.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        return http.get(`/users/${username}/name`);
    }
}