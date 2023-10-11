import JwtService from "@/common/jwt.service";
import ApiService from "@/common/api.service";
import { SET_AUTH, PURGE_AUTH, SET_ERROR } from "./mutations.type";
import { REFUND } from "./actions.type";
import {
  LOGIN,
  LOGIN_CODE,
  LOGOUT,
  REGISTER,
  CHECK_AUTH,
  UPDATE_USER
} from "./actions.type";

import Mgr from '@/common/SecurityService';
let mgr = new Mgr();

const ID_USER = "id_user";

const state = {
  errors: null,
  user: null,
  token: "",
};

const getters = {
  currentUser(state) {
    if (state.user && state.user.token) {
      console.log("currentUser", state.user);
      return state.user;
    }

    var json = localStorage.getItem("user")
    if (json) {
      var user = JSON.parse(json);
      console.log("currentUser", user);
      return user;
    }

    console.log("currentUser", null);
    return null;
  }
}

const mutations = {
  [SET_ERROR](state, error) {
    state.errors = error;
  },
  [SET_AUTH](state, user) {
    state.user = user;
    state.errors = {};

    localStorage.setItem("user", JSON.stringify(user));

    // JwtService.saveToken(state.user.access_token);
    // JwtService.saveItem(ID_USER, state.user);

    // ApiService.setHeader();
  },
  [PURGE_AUTH](state) {

    state.user = null;
    state.errors = {};
    localStorage.removeItem("user");
    // JwtService.destroyItem(ID_USER);
    // JwtService.destroyToken();
    // mgr.signoutRedirect();
  }
};

const actions = {
  [REFUND](context, data) {
    return ApiService.post("user/refund", data)
  },
  [LOGIN](context, credentials) {
    return new Promise((resolve, reject) => {
      ApiService.post("user/login", credentials)
        .then(res => {
          console.log(res);
          context.commit(SET_AUTH, res.data);
          // if (data.success) {
          //   context.commit(SET_AUTH, res);
          //   resolve(data);
          // } else {
          //   context.commit(SET_ERROR, data.errorMsg);
          //   reject(data.errorMsg);
          // }
          resolve(res);
        })
        .catch(({ response }) => {
          console.log(response);
          context.commit(SET_ERROR, response);
        });
    });
  },
  [LOGIN_CODE]() {
    mgr.signIn();
  },
  [CHECK_AUTH](context) {
    // 检查是否过期
    var user = JwtService.getItem(ID_USER);
    console.log(user);
    if (user) {
      context.commit(SET_AUTH, user);
    } else {
      context.commit(PURGE_AUTH);
    }
  },
  [LOGOUT](context) {
    context.commit(PURGE_AUTH);
  },
  [REGISTER](context, credentials) {
    return new Promise((resolve, reject) => {
      ApiService.post("user/sign", credentials)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          context.commit(SET_ERROR, err);
          reject(err);
        });
    });
  },
  [UPDATE_USER](context, user) {
    context.commit(SET_AUTH, user);
  }
};

export default {
  state,
  getters,
  actions,
  mutations,
};