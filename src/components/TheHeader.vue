<style>
.el-menu-main {
  margin-right: auto !important;
  margin-left: auto !important;
}
.el-menu.el-menu--horizontal {
  border-bottom: solid 0px #e6e6e6 !important;
}
.menu-item {
  line-height: 60px;
  display: inline-block;
  padding: 0 5px;
  float: left;
  cursor: pointer;
  color: #7b7b7b;
}
.menu-item :hover {
  color: #000;
}

.menu {
}
.nav-link {
  font-size: 16px;
  text-decoration: none;
}
</style>

<template>
  <div class="container-xl">
    <div class="menu">
      <div class="menu-item">
        <router-link :to="{ name: 'home' }" class="nav-link" active-class="active">首页</router-link>
      </div>
      <div class="menu-item" style="float: right;">
        <el-button size="small" type="text" @click="login">登录</el-button>
        <el-button size="small" @click="signup">注册</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    login() {
      this.$router.push({
        name: "login"
      });
    },
    signup() {
      this.$router.push({
        name: "signup"
      });
    }
  }
};
</script>

