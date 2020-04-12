import Vue from 'vue'
import App from './App.vue'
import store from "./store";
import ApiService from "../../common/api.service";

import '@/assets/scss/element-variables.scss'
import '@/assets/scss/main.scss'

ApiService.init();
Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
