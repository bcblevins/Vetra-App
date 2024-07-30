import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createStore } from './stores'
import axios from 'axios'


import App from './App.vue'
import router from './router'

const store = createStore();
const app = createApp(App)

app.use(createPinia())
app.use(store)
app.use(router)
app.use(axios)

app.mount('#app')
