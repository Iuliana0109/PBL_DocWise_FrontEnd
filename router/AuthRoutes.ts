const AuthRoutes = {
    path: '/auth',
    component: () => import('@/layouts/blank/BlankLayout.vue'),
    meta: {
        requiresAuth: false
    },
    children: [
        {
            name: 'Login',
            path: '/auth/login',
            component: () => import('@/views/auth/Login.vue')
        },
        {
            name: 'Register',
            path: '/auth/register',
            component: () => import('@/views/auth/Register.vue')
        },
        {
            name: 'Register2',
            path: '/auth/register2',
            component: () => import('@/views/auth/Register2.vue')
        },
    ]
};

export default AuthRoutes;
