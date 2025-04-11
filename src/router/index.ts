import {createRouter, createWebHistory} from 'vue-router'
import MainLayout from "@/layouts/MainLayout.vue";
import EmailView from "@/pages/EmailView.vue";



const routes = [
    {
        path: '/',
        name: 'MainLayout',
        component: MainLayout,
        children:[
            {
                path: '',
                name: 'Products',
                component: ()=>import('@/pages/Products.vue'),
            },

        ],
    },{ path: "/email", component: EmailView }

]
const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router