// import Vue from 'vue'
import App from './App.vue'
import router from "./router";
// import ElementUI from 'element-ui';
import store from "@/store";
import ApiService from "../../common/api.service";
import { UPDATE_USER, LOGOUT } from "@/store/actions.type";

import '@/assets/scss/main.scss'
import '@/assets/scss/element-variables.scss'
import '@/assets/scss/elment-adgust.scss'
// import Mgr from '@/common/SecurityService';
// let mgr = new Mgr();

ApiService.init();
Vue.config.productionTip = true
Vue.use(ELEMENT, { size: 'medium', zIndex: 3000 });

// Ensure we checked auth before each page load.
router.beforeEach((to, from, next) => {
  console.log('-- beforeEach', from.name, "->", to.name);
  if (to.meta.title)
    document.title = "隧道 " + to.meta.title

  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (!requiresAuth) {
    next();
    return;
  }

  console.log(store.getters);
  if (store.getters.currentUser && store.getters.currentUser.token) {
    next();
    return;
  }

  next({ name: 'login' })

  // if (requiresAuth) {
  //   mgr.getUser(true).then(user => {
  //     if (user) {
  //       store.dispatch(UPDATE_USER, user);
  //     } else {
  //       store.dispatch(LOGOUT, user);
  //     }
  //   }).catch(err => {
  //     console.log(err);
  //   })
  //   next();
  // } else {
  //   mgr.getUser().then(user => {
  //     if (user) {
  //       store.dispatch(UPDATE_USER, user);
  //     } else {
  //       store.dispatch(LOGOUT, user);
  //     }
  //   }).catch(err => {
  //     console.log(err);
  //   })
  //   next();
  // }
});
router.onError((e) => {
  console.log(e);
});

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
