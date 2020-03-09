
<style lang="scss">
$hd_height: 80px;
$ft_height: 90px;

$gray: #dedede;
html,
body,
#app {
  height: 100%;
}
body {
  margin: 0;
}
._hd {
  height: $hd_height;
  border-bottom: 1px solid $gray;
}
._bd {
  height: calc(100% - #{$hd_height} - #{$ft_height} - 2px);
}
._ft {
  height: $ft_height;
  border-top: 1px solid $gray;
}
#app {
  position: relative;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

<template>
  <div id="app">
    <el-container style="height:100%;">
      <el-header>
        <RwvHeader/>
      </el-header>
      <el-main class="boder-top boder-bottom">
        <div class="body">
          <router-view></router-view>
        </div>
      </el-main>
      <el-footer>
        <RwvFooter></RwvFooter>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import RwvHeader from "@/components/TheHeader";
import RwvFooter from "@/components/TheFooter";

export default {
  name: "App",
  components: {
    RwvHeader,
    RwvFooter
  }
};
</script>
 