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
        path: "/user",
        name: "user",
        component: () => import("@/views/UserInfo"),
    },
    {
        path: "/console",
        name: "console",
        component: () => import("@/views/Console"),
    },
]

export default new Router({
    routes,
});