const MainRoutes = {
    path: '/main',
    meta: {
        requiresAuth: true
    },
    redirect: '/main',
    component: () => import('@/layouts/full/FullLayout.vue'),
    children: [
        {
            name: 'Dashboard',
            path: '/',
            component: () => import('@/views/dashboard/index.vue')
        },
        {
            name: 'PillReminder',
            path: '/PillReminder',
            component: () => import('@/views/pages/PillReminder.vue')
        },
    ]
};

export default MainRoutes;
