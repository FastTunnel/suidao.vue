import ApiService from "@/common/api.service";
import {
  FETCH_PROFILE,
  FETCH_PROFILE_FOLLOW,
  FETCH_PROFILE_UNFOLLOW,
  RESET_ACCESS
} from "./actions.type";
import { SET_PROFILE } from "./mutations.type";

const state = {
  errors: {},
  profile: {}
};

const getters = {
  profile(state) {
    return state.profile;
  }
};

const actions = {
  [RESET_ACCESS](context) {
    return ApiService.post("user/resetAccess")
      .then((data) => {
        context.commit(SET_PROFILE, data.data);
        return data;
      })
      .catch(() => {
        // #todo SET_ERROR cannot work in multiple states
        // context.commit(SET_ERROR, response.data.errors)
      });
  },
  [FETCH_PROFILE](context) {
    return ApiService.post("user/profiles")
      .then((data) => {
        console.log("profiles", data.data);
        context.commit(SET_PROFILE, data.data);
        return data;
      })
      .catch(() => {
        // #todo SET_ERROR cannot work in multiple states
        // context.commit(SET_ERROR, response.data.errors)
      });
  },
  [FETCH_PROFILE_FOLLOW](context, payload) {
    const { username } = payload;
    return ApiService.post(`profiles/${username}/follow`)
      .then(({ data }) => {
        context.commit(SET_PROFILE, data.data.profile);
        return data;
      })
      .catch(() => {
        // #todo SET_ERROR cannot work in multiple states
        // context.commit(SET_ERROR, response.data.errors)
      });
  },
  [FETCH_PROFILE_UNFOLLOW](context, payload) {
    const { username } = payload;
    return ApiService.delete(`profiles/${username}/follow`)
      .then(({ data }) => {
        context.commit(SET_PROFILE, data.profile);
        return data;
      })
      .catch(() => {
        // #todo SET_ERROR cannot work in multiple states
        // context.commit(SET_ERROR, response.data.errors)
      });
  }
};

const mutations = {
  // [SET_ERROR] (state, error) {
  //   state.errors = error
  // },
  [SET_PROFILE](state, profile) {
    state.profile = profile;
    state.errors = {};
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
