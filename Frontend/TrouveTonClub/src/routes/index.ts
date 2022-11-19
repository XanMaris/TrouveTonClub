import Home from '@/views/Home.vue'
import Search from '@/views/Search.vue'
import { createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history : createWebHistory(), 
    routes : [
        {path : '/search', name : 'Search', component : Search},
        {path : '/home', name : 'Home', component : Home}
    ]
})

export default router