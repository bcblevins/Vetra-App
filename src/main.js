import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createStore } from './stores'


import App from './App.vue'
import router from './router'

export const store = createStore();
const app = createApp(App)

app.use(createPinia())
app.use(store)
app.use(router)

app.mount('#app')
