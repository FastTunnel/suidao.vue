
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
  name: "App",
  data() {
    return { error: "" };
  },
  mounted() {
    console.log();
    var mgr = new Oidc.UserManager({
      userStore: new Oidc.WebStorageStateStore(),
      loadUserInfo: true,
      filterProtocolClaims: true,
      response_mode: "query"
    });

    mgr
      .signinRedirectCallback()
      .then(() => {
        window.location.href = "/";
      })
      .catch(function(err) {
        console.log(err);
      });
  }
};
</script>
 