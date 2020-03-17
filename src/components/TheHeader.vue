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
        <div v-if="!isAuthenticated">
          <el-button size="small" type="text" @click="login">登录</el-button>
          <el-button size="small" @click="signup">注册</el-button>
        </div>
        <div v-if="isAuthenticated">
          <el-dropdown :hide-on-click="false">
            <span class="el-dropdown-link">
              {{currentUser.email}}
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu :hide-on-click="true" slot="dropdown">
              <el-dropdown-item>
                <router-link :to="{ name: 'user'}" class="el-link el-link--default">个人中心</router-link>
              </el-dropdown-item>
              <el-dropdown-item>
                <router-link :to="{ name: 'console'}" class="el-link el-link--default">控制台</router-link>
              </el-dropdown-item>
              <el-dropdown-item @click.native="logOut" divided>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { LOGOUT } from "@/store/actions.type";

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
    },
    logOut() {
      this.$store.dispatch(LOGOUT).then(() => {
        if (this.$router.history.current.name !== "home") {
          this.$router.push({ name: "home" });
        }
      });
    }
  },
  computed: {
    ...mapGetters(["currentUser", "isAuthenticated"])
  },
  mounted() {}
};
</script>

