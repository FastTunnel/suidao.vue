<style>
.welcome {
  padding-top: 50px;
  font-size: 34px;
  text-align: center;
}
.download{
  padding-top: 150px;
  font-size: 22px;
  text-align: center;
}
</style>

<template>
  <div>
    <div class="welcome">Welcome to SuiDao！</div>
    <div class="welcome">基于开源<el-link :underline="false" href="https://github.com/SpringHgui/FastTunnel" target="_blank">FastTunnel</el-link>实现的内网穿透服务</div>

    <div class="download"><el-link :underline="false" href="https://github.com/SpringHgui/FastTunnel.SuiDao/releases" target="_blank">下载客户端</el-link></div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {};
  }
};
</script>
