// import Vue from "vue";
// import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "console",
        component: () => import("./../views/Console"),
        meta: {
            requiresAuth: true,
            title: "控制台"
        },
        children: [
            {
                path: '',
                name: 'console-index',
                component: () => import("./../views/Console/Index"),
                meta: {
                    requiresAuth: true,
                    title: "使用说明"
                }
            },
            {
                path: 'tunnel',
                component: () => import("./../views/Console/Tunnel"),
                meta: {
                    requiresAuth: true,
                    title: "隧道管理"
                }
            },
            // {
            //     path: 'client',
            //     component: () => import("./../views/Console/Client"),
            //     meta: {
            //         requiresAuth: true,
            //         title: "客户端管理"
            //     }
            // },
            {
                path: 'download',
                component: () => import("./../views/Console/Download"),
                meta: {
                    requiresAuth: false,
                    title: "下载客户端"
                }
            },
            {
                path: 'problems',
                component: () => import("./../views/Console/Problems"),
                meta: {
                    requiresAuth: false,
                    title: "常见问题"
                }
            },
        ],
    }, {
        path: '/profile',
        name: 'profile',
        component: () => import("./../views/Profile"),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/accessdenied',
        name: 'accessDenied',
        component: () => import("./../views/AccessDenied"),
        meta: {
            requiresAuth: false
        }
    },
    {
        path: '/signup',
        name: 'signup',
        component: () => import("./../views/Signup"),
        meta: {
            requiresAuth: false
        }
    },
    {
        path: '/login',
        name: 'login',
        component: () => import("./../views/Login"),
        meta: {
            requiresAuth: false
        }
    },
    {
        // 会匹配所有路径
        path: '*',
        component: () => import("./../views/_404"),
        meta: {
            requiresAuth: false,
            title: "未找到页面"
        }
    }
]

export default new VueRouter({
    // mode: "history",
    routes,
});