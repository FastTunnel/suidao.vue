import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const routes = [
    {
        path: "/",
        name: "home",
        component: () => import("./../views/Home"),
        meta: {
            requiresAuth: false,
            title: "免费内网穿透工具"
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

export default new Router({
    // mode: "history",
    routes,
});