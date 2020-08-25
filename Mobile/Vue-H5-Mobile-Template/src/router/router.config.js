/**
 * 路由配置文件
 */
export const constantRouterMap = [{
    path: '/',
    component: () =>
        import ('../views/layouts/index.vue'),
    redirect: '/home',
    meta: { title: '首页', keepAlive: false },
    children: [{
            path: '/home',
            name: 'Home',
            component: () =>
                import ('../views/home/index.vue'),
            meta: { title: '首页', keepAlive: false }
        },
        {
            path: '/about',
            name: 'About',
            component: () =>
                import ('../views/home/about.vue'),
            meta: { title: '关于', keepAlive: false }
        }
    ]
}]