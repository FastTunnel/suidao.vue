import JwtService from "@/common/jwt.service";
import ApiService from "@/common/api.service";
import { SET_AUTH, PURGE_AUTH, SET_ERROR } from "./mutations.type";
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
  isAuthenticated: !!JwtService.getToken()
};

const getters = {
  currentUser(state) {
    console.log("currentUser", state.user);
    if (state.user && state.user.token) {
      return state.user;
    }

    var json = localStorage.getItem("user")
    if (json) {
      return JSON.parse(json);
    }

    return null;
  },
  isAuthenticated(state) {
    return state.isAuthenticated;
  }
}

const mutations = {
  [SET_ERROR](state, error) {
    state.errors = error;
  },
  [SET_AUTH](state, user) {
    state.isAuthenticated = true;
    state.user = user;
    state.errors = {};

    localStorage.setItem("user", JSON.stringify(user));

    // JwtService.saveToken(state.user.access_token);
    // JwtService.saveItem(ID_USER, state.user);

    // ApiService.setHeader();
  },
  [PURGE_AUTH](state) {
    state.isAuthenticated = false;
    state.user = {};
    state.errors = {};
    // JwtService.destroyItem(ID_USER);
    // JwtService.destroyToken();
    // mgr.signoutRedirect();
  }
};

const actions = {
  [LOGIN](context, credentials) {
    return new Promise((resolve, reject) => {
      ApiService.post("user/login", credentials)
        .then(res => {
          console.log(res);
          context.commit(SET_AUTH, res);
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
          resolve(res);
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