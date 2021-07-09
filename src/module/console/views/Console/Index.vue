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
    <div class="title">欢迎使用SuiDao(隧道)</div>
    <div>
      <div class="line">1.
        在<router-link class="link" to="profile">个人中心</router-link>获取用于客户端登录的`AccessKey`
      </div>
      <div class="line">2.
        在<router-link class="link" to="/tunnel">创建隧道</router-link>页面，创建需要穿透的隧道信息。
      </div>
      <div class="line">3.下载并启动客户端软件, 根据提示录入`AccessKey`进行登录, 登录成功后根据映射信息提示进行访问你的服务。</div>
      <div class="line">
        <a
          class="link"
          href="https://github.com/SpringHgui/FastTunnel/blob/master/README.md#run-on-linuxmac-os"
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
