<style>
</style>

<template>
  <div></div>
</template>

<script>
import Oidc from "oidc-client";

export default {
  name: "Silent",
  data() {
    return { error: "" };
  },
  mounted() {
    console.log("trying to renew the acess_token");
    new Oidc.UserManager().signinSilentCallback();
  }
};
</script>