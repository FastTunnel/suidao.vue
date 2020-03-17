import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import ElementUI from 'element-ui';
import store from "./store";
import ApiService from "./common/api.service";
import { CHECK_AUTH } from "./store/actions.type";

import '@/assets/scss/element-variables.scss'
import '@/assets/scss/main.scss'

console.log('----启动----');

ApiService.init();
Vue.config.productionTip = false
Vue.use(ElementUI, { size: 'medium', zIndex: 3000 });

// Ensure we checked auth before each page load.
router.beforeEach((to, from, next) => {
  console.log('-- beforeEach', from.name, "->", to.name);
  Promise.all([store.dispatch(CHECK_AUTH)]).then(next)
});

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
