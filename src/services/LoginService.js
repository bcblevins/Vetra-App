import { store } from '../main';
import axios from 'axios';
import UserService from './UserService';

const http = axios.create({
    baseURL: 'http://localhost:8080',
});

export default { 
    // TODO: This function not working. May need to move login logic from login.vue to this file.
    login(username, password, rememberMe) {
        const loginPromise = http.post('/auth/login', { username, password });

        const fullPromise =  
            loginPromise.then(response => {
                const token = response.data.accessToken.token;
                if (rememberMe) {
                    localStorage.setItem('token', token);
                }
                console.log("Token: ", token);
                const authorizedRequestParams = { headers: { Authorization: `Bearer ${token}` } };

                const userPromise = UserService.getUser(username, token);
                // const rolesPromise = http.get('/api/profile/roles', authorizedRequestParams);
                console.log("UserPromise: ", userPromise);
                // return Promise.all([userPromise, rolesPromise]).then(responses => {
                return Promise.all([userPromise]).then(responses => {
                    const userResponse = responses[0];
                    // const rolesResponse = responses[1];
                    console.log("UserResponse: ", userResponse);
                    store.commit("SET_TOKEN", token);
                    store.commit("SET_USER", userResponse.data);
                    console.log("User: ", store.state.user, "Token: ", store.state.token);
                }).catch(error => {
                    return false;
                });
            }).catch(error => {
                return false;
            });
            // TODO: this line is not being reached. Need to figure out why.
            console.log("FullPromise: ", fullPromise);
        return fullPromise;
    },
    restoreLogin() {
        const token = localStorage.getItem('token');
        if (token) {
            const authorizedRequestParams = { headers: { Authorization: `Bearer ${token}` } };
            const userPromise = UserService.getUser(store.state.user.username, token);
            // const rolesPromise = axios.get('/api/profile/roles', authorizedRequestParams);

            // return Promise.all([userPromise, rolesPromise]).then(responses => {
                return Promise.all([userPromise]).then(responses => {

                const userResponse = responses[0];
                // const rolesResponse = responses[1];

                store.commit("SET_TOKEN", token);
                store.commit("SET_USER", userResponse.data);
            }).catch(error => {
            });
        }
        return Promise.resolve();
    },
}