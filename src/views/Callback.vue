<style>
</style>

<template>
  <div class="container-xl">{{error}}</div>
</template>

<script>
import Oidc from "oidc-client";
import { UPDATE_USER } from "@/store/actions.type";

export default {
  name: "callback",
  data() {
    return { error: "" };
  },
  mounted() {
    let that = this;
    new Oidc.UserManager({ response_mode: "query" })
      .signinRedirectCallback()
      .then(function(user) {
        //  登录成功
        that.$store.dispatch(UPDATE_USER, user);
        window.location = "/";
      })
      .catch(function(e) {
        that.error = e;
      });
  }
};
</script>