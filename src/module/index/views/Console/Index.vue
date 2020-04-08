<style>
.line {
  line-height: 50px;
}

.link {
  color: #3e5e97;
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
      <div class="line">
        4.
        <a
          class="link"
          href="https://dotnet.microsoft.com/download/dotnet-core/3.1"
          target="_blank"
        >安装 .NET Core Runtime 3.1</a>
      </div>
      <div class="line">5.被穿透方启动客户端软件, 并使用`登录密钥`进行登录, 客户端需一直保持运行状态。</div>
      <div class="line">
        <div style="font-size: 19px;color:red;">特别提醒：本软件目前处于开发阶段，版本迭代频繁，如遇客户端启动异常，请在下载页面下载最新的客户端重试。</div>
      </div>
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