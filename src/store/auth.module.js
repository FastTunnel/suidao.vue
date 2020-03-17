import JwtService from "@/common/jwt.service";
import ApiService from "@/common/api.service";
import { SET_AUTH, PURGE_AUTH, SET_ERROR } from "./mutations.type";
import {
  LOGIN,
  LOGOUT,
  REGISTER,
  CHECK_AUTH,
  UPDATE_USER
} from "./actions.type";

const ID_USER = "id_user";

const state = {
  errors: null,
  user: {},
  isAuthenticated: !!JwtService.getToken()
};

const getters = {
  currentUser(state) {
    return state.user;
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
    JwtService.saveToken(state.user.token);
    JwtService.saveItem(ID_USER, state.user);
    ApiService.setHeader();
  },
  [PURGE_AUTH](state) {
    state.isAuthenticated = false;
    state.user = {};
    state.errors = {};
    JwtService.destroyItem(ID_USER);
    JwtService.destroyToken();
  }
};

const actions = {
  [LOGIN](context, credentials) {
    return new Promise((resolve, reject) => {
      ApiService.post("users/login", credentials)
        .then(({ data }) => {
          if (data.success) {
            context.commit(SET_AUTH, data.data);
            resolve(data);
          } else {
            context.commit(SET_ERROR, data.errorMsg);
            reject(data.errorMsg);
          }
        })
        .catch(({ response }) => {
          context.commit(SET_ERROR, response);
        });
    });
  },
  [LOGOUT](context) {
    context.commit(PURGE_AUTH);
  },
  [REGISTER](context, credentials) {
    return new Promise((resolve, reject) => {
      ApiService.post("users/sign", credentials)
        .then(({ data }) => {
          if (data.success) {
            resolve(data);
          } else {
            context.commit(SET_ERROR, data.errorMsg);
            reject(data.errorMsg);
          }
        })
        .catch(({ response }) => {
          context.commit(SET_ERROR, response);
          reject(response);
        });
    });
  },
  [CHECK_AUTH](context) {
    // 检查是否过期
    var user = JwtService.getItem(ID_USER);
    if (user) {
      if (user.token) {
        console.log('user.token', user.token);
      }

      
      context.commit(SET_AUTH, user);
    } else {
      context.commit(PURGE_AUTH);
    }
  },
  [UPDATE_USER](context, payload) {
    const { email, username, password, image, bio } = payload;
    const user = {
      email,
      username,
      bio,
      image
    };
    if (password) {
      user.password = password;
    }

    return ApiService.put("user", user).then(({ data }) => {
      context.commit(SET_AUTH, data.user);
      return data;
    });
  }
};

export default {
  state,
  getters,
  actions,
  mutations,
};