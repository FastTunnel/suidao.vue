import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import ElementUI from 'element-ui';
import '@/assets/scss/element-variables.scss'
import '@/assets/scss/main.scss'

Vue.config.productionTip = false
Vue.use(ElementUI, { size: 'small', zIndex: 3000 });

// Ensure we checked auth before each page load.
// router.beforeEach((to, from, next) =>
//   Promise.all([store.dispatch(CHECK_AUTH)]).then(next)
// );

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
