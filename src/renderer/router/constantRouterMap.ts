import { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    { path: '/:pathMatch(.*)*', component: () => import("@renderer/views/404.vue") },
    { path: '/', name: '总览', component: () => import('@renderer/components/layer/Layer.vue') },
    { path: '/Print', name: '打印', component: () => import('@renderer/views/Print.vue') },
]

export default routes
