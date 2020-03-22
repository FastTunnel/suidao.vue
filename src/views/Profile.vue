<style>
.welcome {
  font-size: 50px;
}
</style>

<template>
  <div>{{currentUser.profile.name}}</div>
</template>

<script>
import { FETCH_PROFILE } from "@/store/actions.type";

import { mapGetters } from "vuex";
export default {
  name: "Profile",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["currentUser", "profile", "isAuthenticated"])
  },
  // watch: {
  //   $route(to) {
  //     this.$store.dispatch(FETCH_PROFILE, to.params);
  //   }
  // },
  mounted() {
    console.log("FETCH_PROFILE");
    this.$store.dispatch(FETCH_PROFILE);
  }
};
</script>