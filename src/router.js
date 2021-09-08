import {createRouter, createWebHistory} from "vue-router";
import CanvasParticle from './components/CanvasParticle.vue'

const NotFoundComponent = { template: '<p>Page not found</p>' }

const routes = [
    {
        path: '/',
        component: CanvasParticle,
        meta: {
            type: 'particles'
        }
    },
    {
        path: '/mesh',
        component: CanvasParticle,
        meta: {
            type: 'mesh'
        }
    },
    {
        path: '/bubbles',
        component: CanvasParticle,
        meta: {
            type: 'bubbles'
        }
    },
    {
        path: '/:pathMatch(.*)*',
        component: NotFoundComponent
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
