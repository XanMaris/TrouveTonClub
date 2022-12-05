import { createApp } from 'vue'
import App from './App.vue'
import router from '@/routes/index'
import { createPinia } from 'pinia'
import './assets/main.css'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router).mount('#app')
