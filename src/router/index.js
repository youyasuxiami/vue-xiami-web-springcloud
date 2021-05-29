import Vue from 'vue'
import Router from 'vue-router'

// 写路由导入的页面
import HomeIndex from '@/views/home'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: HomeIndex,
            children: [
                {
                    path: '/',
                    name:'/',
                    component: () => import('@/views/index')
                },
                {
                    path: '/info',
                    name: '/info',
                    component: () => import('@/views/info')
                },
                {
                    path: '/about',
                    name: '/about',
                    component: () => import('@/views/about')
                },
                {
                    path: '/sort',
                    name: '/sort',
                  component: () => import('@/views/sort')
                },
                {
                    path: '/classify',
                    name: '/classify',
                    component: () => import('@/views/classify')
                },
                {
                    path: '/tag',
                    name: '/tag',
                    component: () => import('@/views/tag')
                },
                {
                    path: '/messageBoard',
                    name: '/messageBoard',
                    component: () => import('@/views/messageBoard')
                }
            ]
        },
        {
            path: '/404',
            name: '/404',
            component: () => import('@/views/404')
        },
        {
            path: '/500',
            name: '/500',
            component: () => import('@/views/500')
        },
        {
            path: '/502',
            name: '/502',
            component: () => import('@/views/502')
        },
        {
            path: '/*',
            name: '/*',
            component: () => import('@/views/404')
        }
    ]
});
