import ApiService from "@/common/api.service";
import {
  ADD_APP,
  DEL_TUNNEL,
  FETCH_TUNNELS,
  UPDATE_TUNNEL_ENABLED
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
  [UPDATE_TUNNEL_ENABLED](context, param) {
    return new Promise((resolve, reject) => {
      ApiService.post("Tunnel/UpdateEnabled", param).then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      });
    })
  },
  [ADD_APP](context, param) {
    return new Promise((resolve, reject) => {
      ApiService.post("Tunnel/AddTunnel", param).then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      });
    })
  },
  [DEL_TUNNEL](context, param) {
    return new Promise((resolve, reject) => {
      console.log("DEL_TUNNEL");
      ApiService.post("Tunnel/DelTunnel", param).then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      });
    })
  },
  [FETCH_TUNNELS](context, param) {
    return new Promise((resolve, reject) => {
      ApiService.post("tunnel/GetTunnels", param).then(res => {
        context.commit(SET_TUNNELS, res);
        resolve(res);
      }).catch(error => {
        reject(error);
      });
    })
  }
}

export default {
  state,
  actions,
  mutations,
  getters
};