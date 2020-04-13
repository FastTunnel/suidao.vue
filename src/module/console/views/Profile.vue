<style>
.info {
  text-align: center;
}
</style>

<template>
  <div class="info">当前功能正在开发中...</div>
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
  mounted() {
    console.log("FETCH_PROFILE");
    this.$store.dispatch(FETCH_PROFILE);
  }
};
</script>