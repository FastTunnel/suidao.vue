import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const routes = [
    {
        path: "/",
        name: "home",
        component: () => import("@/views/Home"),
        meta: {
            requiresAuth: false,
            title: ""
        }
    },
    {
        path: "/callback",
        name: "callback",
        component: () => import("@/views/Callback"),
        meta: {
            requiresAuth: false,
            title: "登陆中"
        }
    },
    {
        path: "/silent",
        name: "silent",
        component: () => import("@/views/Silent"),
    },
    {
        path: "/login",
        name: "login",
        component: () => import("@/views/Login"),
    },
    {
        path: "/signup",
        name: "signup",
        component: () => import("@/views/Signup"),
        meta: {
            requiresAuth: false,
            title: "注册"
        }
    },
    {
        path: "/profile",
        name: "profile",
        component: () => import("@/views/Profile"),
        meta: {
            requiresAuth: true,
            title: "个人信息"
        }
    },
    {
        path: "/console",
        name: "console",
        component: () => import("@/views/Console"),
        meta: {
            requiresAuth: true,
            title: "控制台"
        },
        children: [
            {
                path: '',
                name: 'console-index',
                component: () => import("@/views/Console/Index"),
                meta: {
                    requiresAuth: true,
                    title: "使用说明"
                }
            },
            {
                path: 'tunnel',
                component: () => import("@/views/Console/Tunnel"),
                meta: {
                    requiresAuth: true,
                    title: "隧道管理"
                }
            },
            {
                path: 'client',
                component: () => import("@/views/Console/Client"),
                meta: {
                    requiresAuth: true,
                    title: "客户端管理"
                }
            },
            {
                path: 'download',
                component: () => import("@/views/Console/Download"),
                meta: {
                    requiresAuth: true,
                    title: "下载客户端"
                }
            }
        ],
    },
    {
        path: '/accessdenied',
        name: 'accessDenied',
        component: () => import("@/views/AccessDenied"),
        meta: {
            requiresAuth: false
        }
    },
    {
        // 会匹配所有路径
        path: '*',
        component: () => import("@/views/_404"),
        meta: {
            requiresAuth: false,
            title: "未找到页面"
        }
    }
]

export default new Router({
    mode: "history",
    routes,
});