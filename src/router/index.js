import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const routes = [
    {
        path: "/",
        name: "home",
        component: () => import("@/views/Home"),
    },
    {
        path: "/callback",
        name: "callback",
        component: () => import("@/views/Callback"),
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
    },
    {
        path: "/profile",
        name: "profile",
        component: () => import("@/views/Profile"),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/console",
        name: "console",
        component: () => import("@/views/Console"),
        meta: {
            requiresAuth: true
        },
        children: [
            {
                path: '',
                name:'console-index',
                component: () => import("@/views/Console/Index"),
            },
            {
                path: 'tunnel',
                component: () => import("@/views/Console/Tunnel"),
            },
            {
                path: 'client',
                component: () => import("@/views/Console/Client"),
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
            requiresAuth: false
        }
    }
]

export default new Router({
    mode: "history",
    routes,
});