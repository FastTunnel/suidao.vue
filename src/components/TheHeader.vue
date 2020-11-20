<style>
.el-menu-main {
  margin-right: auto !important;
  margin-left: auto !important;
}
.el-menu.el-menu--horizontal {
  border-bottom: solid 0px #e6e6e6 !important;
}
.menu-item {
  line-height: 70px;
  display: inline-block;
  padding: 0 5px;
  float: left;
  cursor: pointer;
  color: #7b7b7b;
}
.menu-item :hover {
  color: #000;
}

.nav-link {
  font-size: 16px;
  text-decoration: none;
}
.el-image__inner {
  vertical-align: baseline;
}
.logo {
  width: 28px;
  height: 28px;
  top: 8px;
  left: -11px;
}
#logo {
  font-family: "Dosis";
  font-size: 1.7rem;
}
</style>

<template>
  <div class="container-xl">
    <div class="menu">
      <div class="menu-item">
        <el-link
          href="/#/"
          :underline="false"
          id="logo"
        >
          <!-- <el-image class="logo" src="/logo.png" fit="fit"></el-image> -->
          SuiDao
        </el-link>
      </div>
      <div
        class="menu-item"
        style="float: right;"
      >
        <div v-if="!isAuthenticated">
          <el-button
            size="medium"
            type="text"
            @click="login"
          >登录</el-button>
          <el-button
            size="medium"
            @click="signup"
            type="primary"
            round
          >注册</el-button>
        </div>
        <div v-if="isAuthenticated">
          <a
            href="/console.html#/"
            class="nav-link router-link-exact-active active"
          >
            <div
              class="menu-item"
              style="padding-right: 45px;"
            >控制台</div>
          </a>
          <el-dropdown :hide-on-click="false">
            <span class="el-dropdown-link">
              {{ currentUser && currentUser.profile ? currentUser.profile.name:""}}
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu
              :hide-on-click="true"
              slot="dropdown"
            >
              <router-link
                :to="{ name: 'profile'}"
                class="el-link el-link--default"
              >
                <el-dropdown-item>个人中心</el-dropdown-item>
              </router-link>
              <el-dropdown-item
                @click.native="logOut"
                divided
              >退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { LOGIN_CODE } from "@/store/actions.type";
import Mgr from "@/common/SecurityService";
let mgr = new Mgr();

export default {
  data() {
    return {
      publicPath: process.env.BASE_URL,
      activeIndex: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    login() {
      this.$store.dispatch(LOGIN_CODE);
    },
    loginByPwd() {
      this.$router.push({
        name: "login"
      });
    },
    signup() {
      window.location.href = "/console.html#/signup";
    },
    logOut() {
      // this.$store.dispatch(LOGOUT).then(() => {
      //   if (this.$router.history.current.name !== "home") {
      //     this.$router.push({ name: "home" });
      //   }
      // });
      mgr.signOut();
    }
  },
  computed: {
    ...mapGetters(["currentUser", "isAuthenticated"])
  },
  mounted() {}
};
</script>

