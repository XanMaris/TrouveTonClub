import Home from '@/views/Home.vue'
import { createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history : createWebHistory(), 
    routes : [
        {path : '/home', name : 'Home', component : Home}
    ]
})

export default router