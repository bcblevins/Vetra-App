import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import { createStore } from "./stores";
import loginService from "./services/LoginService";

import App from "./App.vue";
import router from "./router";

export const store = createStore();

loginService.restoreLogin().then(() => {
  const app = createApp(App);
  app.use(createPinia());
  app.use(store);
  app.use(router);

  app.mount("#app");
});
