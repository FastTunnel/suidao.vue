<style>
.app-box {
}
.app-item {
}
.el-card {
  margin-top: 20px;
}
.el-tabs__header {
  margin-top: 10px;
}
.el-aside {
  background-color: rgba(0, 0, 0, 0.04);
}
.app-item .box-card {
  height: 130px;
  margin: 10px;
}
.app-item.add i {
  line-height: 80px;
  font-size: 36px;
  color: rgb(0, 0, 0, 0.3);
}
.add .box-card {
  text-align: center;
  cursor: pointer;
}
.el-menu-vertical-ft {
  height: 100%;
}
.title {
  padding-bottom: 20px;
  font-size: 25px;
}
</style>

<template>
  <el-container style="height: 100%;">
    <!-- 侧边栏导航 -->
    <el-aside width="200px">
      <el-menu default-active="2" class="el-menu-vertical-ft" router>
        <el-menu-item :index="item.index" :key="index" v-for="(item, index) in menu">
          <i :class="item.icon"></i>
          <span slot="title">{{item.title}}</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <!-- 子页面 -->
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: "Console",
  data() {
    return {
      menu: [
        {
          title: "使用说明",
          icon: "el-icon-notebook-2",
          index: "/console/"
        },
        {
          title: "客户端管理",
          icon: "el-icon-monitor",
          index: "/console/client"
        },
        {
          title: "隧道管理",
          icon: "el-icon-share",
          index: "/console/tunnel"
        },
      ],
      lazy: true
    };
  },
  methods: {
    clickTab(e) {
      console.log(e);
    }
  }
};
</script>