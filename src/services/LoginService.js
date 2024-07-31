import { router } from '../main';
import { store } from '../main';
import axios from 'axios';

export default { 
    // TODO: This function not working. May need to move login logic from login.vue to this file.
    restoreLogin() {
        const token = localStorage.getItem('token');
        if (token) {
            const authorizedRequestParams = { headers: { Authorization: `Bearer ${token}` } };
            const userPromise = axios.get('/api/profile', authorizedRequestParams);
            const rolesPromise = axios.get('/api/profile/roles', authorizedRequestParams);

            return Promise.all([userPromise, rolesPromise]).then(responses => {
                const userResponse = responses[0];
                const rolesResponse = responses[1];

                store.commit(
                    'SET_LOGIN_INFO', 
                    { 
                        token: token, 
                        user: userResponse.data,
                        roles: rolesResponse.data 
                    }
                );
                router.push('/');
            }).catch(error => {
            });
        }
        return Promise.resolve();
    },
}