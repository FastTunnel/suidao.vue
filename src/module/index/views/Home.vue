<style>
/* .welcome::before {
  display: inline-block;
  content: "";
  height: 100%;
  vertical-align: middle;
} */

.welcome {
  font-size: 34px;
  height: 400px;
  position: relative;
  text-align: center;
  top: 100px;
}
.download {
  padding-top: 100px;
  font-size: 2rem;
  text-align: center;
}
.notice-title {
  font-size: 40px;
  text-align: center;
  padding: 15px;
  font-weight: 400;
}
.notice-title-sub {
  font-size: 1rem;
  text-align: center;
  padding: 5px 0 15px 0;
}
.notice-box .notice-box-title {
  text-align: center;
  font-size: 1.2rem;
  color: #586ebd;
}
.notice-box {
  min-height: 150px;
}
.bgimg {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: -70px;
  z-index: -1;
}
.bgimg1 {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
}
</style>

<template>
  <div>
    <img class="bgimg" :src="bgimgSrc" />
    <div class="container-xl">
      <div class="welcome">
        <h1>
          基于开源<el-link
            :underline="false"
            href="https://github.com/SpringHgui/FastTunnel"
            target="_blank"
            >FastTunnel</el-link
          >免费内网穿透服务
        </h1>
      </div>
    </div>
    <!-- 场景 -->
    <div class="container-xl">
      <h3 class="notice-title">使用场景</h3>
      <div class="notice-title-sub">多种应用场景，你能想到的都能做到！</div>
      <div class="notice-title-sub">更多惊喜，等你发现！</div>
      <el-row :gutter="20">
        <el-col :xs="24" :sm="12" :md="6" :lg="6">
          <el-card class="box-card" shadow="hover">
            <div class="notice-box">
              <div class="notice-box-title">家中建站</div>
              <p class="notice-box-body">
                我是站长，无需公网IP，不用机房托管，虚拟主机的价格，独立服务器的配置，建网站，私有云。
              </p>
            </div>
          </el-card>
        </el-col>
        <el-col :xs="24" :sm="12" :md="6" :lg="6">
          <el-card class="box-card" shadow="hover">
            <div class="notice-box">
              <div class="notice-box-title">远程桌面</div>
              <p class="notice-box-body">
                我常出差：链接系统远程桌面，在外模拟家中电脑，手机也能远程桌面，提取资料简单快捷。
              </p>
            </div>
          </el-card>
        </el-col>
        <el-col :xs="24" :sm="12" :md="6" :lg="6">
          <el-card class="box-card" shadow="hover">
            <div class="notice-box">
              <div class="notice-box-title">ERP互联互通</div>
              <p class="notice-box-body">
                我是账务，支持OA办公/财务软件/连锁店管理，把分支办公室连起来，还支持远程操作打印机。
              </p>
            </div>
          </el-card>
        </el-col>
        <el-col :xs="24" :sm="12" :md="6" :lg="6">
          <el-card class="box-card" shadow="hover">
            <div class="notice-box">
              <div class="notice-box-title">SVN代码库</div>
              <p class="notice-box-body">
                我是程序员，抱上笔记本，来一场说走就走的旅行，知你如知己，正如写到这，想到了你此刻的目光。
              </p>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <!-- 特色 -->
    <div class="container-xl">
      <h3 class="notice-title">产品特色</h3>
      <el-row :gutter="20">
        <el-col :xs="24" :sm="12" :md="6" :lg="6">
          <el-card class="box-card" shadow="hover">
            <div class="notice-box">
              <div class="notice-box-title">跨平台客户端支持</div>
              <p class="notice-box-body">
                支持多个平台的客户端, window, linux, mac等.
              </p>
            </div>
          </el-card>
        </el-col>
        <el-col :xs="24" :sm="12" :md="6" :lg="6">
          <el-card class="box-card" shadow="hover">
            <div class="notice-box">
              <div class="notice-box-title">多种安全级别控制</div>
              <p class="notice-box-body">
                可以根据需要设置通过域名白名单，账号验证访问，数据加密等。
              </p>
            </div>
          </el-card>
        </el-col>
        <el-col :xs="24" :sm="12" :md="6" :lg="6">
          <el-card class="box-card" shadow="hover">
            <div class="notice-box">
              <div class="notice-box-title">无需设置路由端口映射</div>
              <p class="notice-box-body">
                第三代内网穿透工具，无需设置路由端口映射，无需公网IP，很多用户都是动态IP，没有关系一样可以实现内网穿透。
              </p>
            </div>
          </el-card>
        </el-col>
        <el-col :xs="24" :sm="12" :md="6" :lg="6">
          <el-card class="box-card" shadow="hover">
            <div class="notice-box">
              <div class="notice-box-title">永久免费</div>
              <p class="notice-box-body">所有注册用户均永久免费提供穿透服务</p>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <!-- 下载 -->
    <!-- <div class="container-xl">
      <div class="download">
        <el-link
          :underline="false"
          href="https://github.com/SpringHgui/FastTunnel.SuiDao/releases"
          target="_blank"
          >下载客户端</el-link
        >
      </div>
    </div> -->
    <!-- <img
      class="bgimg1"
      :src="src"
    > -->
    <div style="margin-bottom: 100px"></div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      bgimgSrc: require("@/assets/images/qiqiq.svg"),
      src: require("@/assets/images/1A-dj.svg"),
    };
  },
};
</script>
