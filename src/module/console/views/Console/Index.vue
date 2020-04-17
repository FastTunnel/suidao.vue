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
        <router-link class="link" to="profile">个人中心</router-link>获取`AccessKey`
      </div>
      <div class="line">2.
        <router-link class="link" to="/tunnel">创建隧道</router-link>
      </div>
      <div class="line">3.启动客户端软件, 并使用`AccessKey`进行登录, 客户端需一直保持运行状态。</div>
      <div class="line">
        <a
          class="link"
          href="https://github.com/SpringHgui/FastTunnel/blob/master/README.md#%E5%90%84%E7%A7%8D%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F%E8%BF%90%E8%A1%8C%E7%A8%8B%E5%BA%8F%E7%9A%84%E6%96%B9%E5%BC%8F%E4%BB%A5fasttunnelclient%E4%B8%BA%E4%BE%8B"
          target="_blank"
        >查看Mac和Linux如何运行？</a>
      </div>
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