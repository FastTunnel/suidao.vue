
<style lang="scss">
$hd_height: 80px;
$ft_height: 90px;

$gray: #dedede;
html,
body,
.body,
#app {
  height: 100%;
}
body {
  margin: 0;
}

#app {
  position: relative;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>

<template>
  <div id="app">登录中...</div>
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
 