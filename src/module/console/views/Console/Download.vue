<style>
.line {
  line-height: 50px;
}
.title {
  padding-bottom: 20px;
  font-size: 25px;
}
.link {
  color: red;
}

.down-box {
  padding-top: 50px;
}
.down-box a {
  padding-right: 50px;
}
</style>

<template>
  <div class="container-xl">
    <div class="title">请根据您的PC版本下载对应的客户端</div>
    <div>
      <a href="https://github.com/SpringHgui/FastTunnel/releases" target="_blank">去Gitbhu下载</a>
    </div>
    
    <div class="down-box">
      <a href="/SuiDao.Client.win-x64.zip" target="_blank">win-x64</a>
      <a href="/SuiDao.Client.osx-x64.zip" target="_blank">osx-x64</a>
      <a href="/SuiDao.Client.linux-x64.zip" target="_blank">linux-x64</a>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: "Download",
  data() {
    return { error: "" };
  },
  mounted() {}
};
</script>