// src/router/router.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/views/Home.vue';
import NotFound from '@/components/views/NotFound.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/:catchAll(.*)', // 捕获所有路径
        name: 'NotFound',
        component: NotFound
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
