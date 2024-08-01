import { store } from "../main";
import axios from "axios";
import UserService from "./UserService";

const http = axios.create({
  baseURL: "http://localhost:8080",
});

export default {
  async login(username, password, rememberMe) {
    console.log("Starting login: ", username, password, rememberMe);

    try {
      const loginResponse = await http.post("/auth/login", { username, password });
      console.log("Login response received: ", loginResponse);

      const token = loginResponse.data.accessToken.token;
      console.log("Token received: ", token);

      const userResponse = await UserService.getUser(username, token);
      console.log("User response received: ", userResponse);

      if (!userResponse || !userResponse.data) {
        console.log("Invalid user response");
        throw new Error("Invalid user response");
      }

      store.commit("SET_TOKEN", token);
      console.log("Token committed to store");

      store.commit("SET_USER", userResponse.data);
      console.log("User committed to store");

      const rolesResponse = await UserService.getRoles(token);
      console.log("Roles response received: ", rolesResponse);

      if (!rolesResponse || !rolesResponse.data) {
        console.log("Invalid roles response");
        throw new Error("Invalid roles response");
      }

      store.commit("SET_ROLES", rolesResponse.data);
      console.log("Roles committed to store");

      const tokenSuccess = !!token;
      const userSuccess = !!userResponse.data;
      const rolesSuccess = !!rolesResponse.data;

      console.log("Final success states: ", tokenSuccess, userSuccess, rolesSuccess);

      return tokenSuccess && userSuccess && rolesSuccess;
    } catch (error) {
      console.log("Error during login process: ", error);
      return false;
    }
  },
  restoreLogin() {
    const token = localStorage.getItem("token");
    if (token) {
      const authorizedRequestParams = {
        headers: { Authorization: `Bearer ${token}` },
      };
      const userPromise = UserService.getUser(store.state.user.username, token);
      // const rolesPromise = axios.get('/api/profile/roles', authorizedRequestParams);

      // return Promise.all([userPromise, rolesPromise]).then(responses => {
      return Promise.all([userPromise])
        .then((responses) => {
          const userResponse = responses[0];
          // const rolesResponse = responses[1];

          store.commit("SET_TOKEN", token);
          store.commit("SET_USER", userResponse.data);
        })
        .catch((error) => {});
    }
    return Promise.resolve();
  },
};

/*
login(username, password, rememberMe) {
    const loginPromise = http.post("/auth/login", { username, password });

    const fullPromise = loginPromise
      .then(response => {
        const token = response.data.accessToken.token;
        if (rememberMe) {
          localStorage.setItem("token", token);
        }
        const authorizedRequestParams = {
          headers: { Authorization: `Bearer ${token}` },
        };

        const userPromise = UserService.getUser(username, token);
        const rolesPromise = http.get('/roles', authorizedRequestParams);
        return Promise.all([userPromise, rolesPromise]).then(responses => {
            const userResponse = responses[0];
            const rolesResponse = responses[1];

            store.commit("SET_TOKEN", token);
            store.commit("SET_USER", userResponse.data);
            store.commit("SET_ROLES", rolesResponse.data);

          })
          .catch((error) => {
            return false;
          });
      })
      .catch((error) => {
        return false;
      })

    return fullPromise;
  },
*/
