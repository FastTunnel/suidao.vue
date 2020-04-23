// import Vue from "vue";
// import axios from "axios";
import VueAxios from "vue-axios";
import JwtService from "@/common/jwt.service.js";
import { API_URL } from "@/common/config.js";

const ApiService = {
  init() {
    Vue.use(VueAxios, axios);
    Vue.axios.defaults.baseURL = API_URL;
    console.log('baseURL', API_URL);
  },

  setHeader() {
    Vue.axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${JwtService.getToken()}`;
  },

  query(resource, params) {
    return Vue.axios.get(resource, params).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  },

  get(resource, slug = "") {
    return Vue.axios.get(`${resource}/${slug}`).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  },

  post(resource, params) {
    return new Promise((resole, reject) => {
      Vue.axios.post(`${resource}`, params)
        .then((res) => {
          if (res.data.success) {
            resole(res.data.data);
          } else {
            reject(res.data.errorMsg);
          }
        }).catch(error => {
          console.log('axios', error);
          reject('网络异常请稍后重试！');
        })
    });
  },

  update(resource, slug, params) {
    return Vue.axios.put(`${resource}/${slug}`, params);
  },

  put(resource, params) {
    return Vue.axios.put(`${resource}`, params);
  },

  delete(resource) {
    return Vue.axios.delete(resource).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  }
};

export default ApiService;

