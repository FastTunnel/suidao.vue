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
</style>

<template>
  <div class="container-xl">
    <div class="title">欢迎使用FastTunnel</div>
    <div>
      <div class="line">1.
        <router-link class="link" to="/console/client">创建自定义客户端</router-link>以获取`登录密钥`
      </div>
      <div class="line">2.
        <router-link class="link" to="/console/tunnel">创建隧道</router-link>
      </div>
      <div class="line">3.
        <router-link class="link" to="/console/download">下载客户端软件</router-link>
      </div>
      <div class="line">4.
        <a class="link" href="https://dotnet.microsoft.com/download/dotnet-core/3.1" target="_blank">安装 .NET Core Runtime 3.1</a>
      </div>
      <div class="line">5.启动客户端软件, 并使用`登录密钥`进行登录</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return { error: "" };
  },
  mounted() {}
};
</script>