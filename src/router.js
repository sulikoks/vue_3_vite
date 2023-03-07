import {createRouter, createWebHistory} from "vue-router";
import HomePage from './views/HomePage.vue'
import ThreeCarPage from './views/ThreeCarPage.vue'
import Canvas from './components/Canvas.vue'

const NotFoundComponent = { template: '<p>Page not found</p>' }

const routes = [
    {
        path: '/',
        component: HomePage,
    },
    {
        name: 'CanvasParticle',
        path: '/particles',
        component: Canvas,
        meta: {
            type: 'particles'
        }
    },
    {
        name: 'CanvasMesh',
        path: '/mesh',
        component: Canvas,
        meta: {
            type: 'mesh'
        }
    },
    {
        name: 'CanvasBubbles',
        path: '/bubbles',
        component: Canvas,
        meta: {
            type: 'bubbles'
        }
    },
    {
        name: 'ThreeCarPage',
        path: '/car',
        component: ThreeCarPage,
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
