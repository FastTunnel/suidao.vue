// import Vue from "vue";
// import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "home",
        component: () => import("./../views/Home"),
        meta: {
            requiresAuth: false,
        }
    },
    {
        path: "/console.html#/profile",
        name: "profile",
        component: () => import("./../../console/views/Profile"),
        meta: {
            requiresAuth: true,
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