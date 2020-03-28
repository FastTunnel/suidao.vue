import ApiService from "@/common/api.service";
import {
  ADD_APP,
  FETCH_TUNNELS
} from "./actions.type";
import { SET_TUNNELS } from "./mutations.type";

const state = {
  tunnels: [],
}

const getters = {
  tunnels(state) {
    return state.tunnels;
  }
}

const mutations = {
  [SET_TUNNELS](state, tunnels) {
    state.tunnels = tunnels;
  },
}

const actions = {
  [ADD_APP](context, param) {
    ApiService.post("Tunnel/AddTunnel", param).then(res => {
      console.log(res);
    })
  },
  [FETCH_TUNNELS](context, param) {
    ApiService.post("tunnel/GetTunnels", param).then(res => {
      state.tunnels = res;
      context.commit(SET_TUNNELS, res);
      return;
    }).catch(error => {
      return error;
    });
  }
}

export default {
  state,
  actions,
  mutations,
  getters
};