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

    <h3>推荐下载地址</h3>
    <div>
      <el-link
        :underline="false"
        type="primary"
        href="https://gitee.com/Hgui/FastTunnel.SuiDao/releases"
        target="_blank"
        >Gitee</el-link
      >
    </div>
    <h3>备用下载地址</h3>
    <div>
      <el-link
        :underline="false"
        type="primary"
        href="https://github.com/SpringHgui/FastTunnel.SuiDao/releases"
        target="_blank"
        >Github</el-link
      >
    </div>
    <div style="padding-top: 50px">
      登录方式： 通过个人
      <router-link class="link" to="/profile">AccessKey</router-link>进行登录
    </div>
  </div>
</template>

<script>
export default {
  name: "Download",
  data() {
    return { error: "" };
  },
  mounted() {},
};
</script>
