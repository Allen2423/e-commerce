import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// import Vuetify from 'vuetify'



const app = createApp(App)


// Vue.use(Vuetify); 

app.use(createPinia())
app.use(router)

app.mount('#app')
