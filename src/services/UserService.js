import axios from 'axios';

const http = axios.create({
    baseURL: 'http://localhost:8080',
});

http.headers = {
    'Content-type': 'application/json',
};

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
    },
    updateSelf(user, token) {
        http.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        return http.put(`/users/${user.username}/self`, user);
    },
    register(user) {
        return http.post('/users', user);
    }
}