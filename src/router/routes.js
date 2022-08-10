import { createRouter, createWebHistory } from "vue-router"
import HomePage from '../components/HomePage.vue'
import ViewPokemon from '../components/ViewPokemon.vue'
import UpdatePokemon from '../components/UpdatePokemon.vue'
import CreatePokemon from '../components/CreatePokemon.vue'



const routes = [
    {path:'/',component:HomePage},
    {path:'/view/:id',component:ViewPokemon},
    {path:'/update/:id',component:UpdatePokemon},
    {path:'/create',component:CreatePokemon},
]


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});


export default router