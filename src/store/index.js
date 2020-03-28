import Vue from "vue";
import Vuex from "vuex";

import auth from "./auth.module";
import profile from "./profile.module";
import tunnel from "./tunnel.module";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        auth,
        profile,
        tunnel
    }
});