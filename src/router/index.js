import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from "../components/Login";
import Notebooks from '@/components/NotebookList.vue'
import NoteDetail from '@/components/NoteDetail.vue'
import TrashDetail from '@/components/TrashDetail.vue'

Vue.use(VueRouter)

const routes = [
     {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'Login',
        component: Login

    },
    {
        path: '/notebooks',
        component: Notebooks
    },
    {
        path: '/note/:noteId',
        component: NoteDetail
    },
    {
        path: '/trash/:noteId',
        component: TrashDetail
    }
]

const router = new VueRouter({
    routes
})

export default router
