import ApiService from "@/common/api.service";
import {
  ADD_CLIENT,
  FETCH_CLIENTS
} from "./actions.type";
import { SET_CLIENTS } from "./mutations.type";

const state = {
  clients: [],
}

const getters = {
  clients(state) {
    return state.clients;
  }
}

const mutations = {
  [SET_CLIENTS](state, clients) {
    state.clients = clients;
  },
}

const actions = {
  // [ADD_CLIENT](context, param) {
  //   return new Promise((resolve, reject) => {
  //     ApiService.post("Client/AddClient", param).then(
  //       res => {
  //         resolve(res);
  //       }).catch(err => {
  //         reject(err);
  //       });
  //   })
  // },
  [FETCH_CLIENTS](context, param) {
    return new Promise((resolve, reject) => {
      ApiService.post("Server/GetServers", param).then(res => {
        context.commit(SET_CLIENTS, res);
        resolve(res);
      }).catch(err => {
        reject(err);
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