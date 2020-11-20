
<style lang="scss">
$hd_height: 80px;
$ft_height: 90px;

$gray: #dedede;
html,
body,
.body,
#app {
  height: 100%;
}
body {
  margin: 0;
}

#app {
  position: relative;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>

<template>
  <div id="app">
    <el-container style="height:100%;">
      <el-header style="height:70px;">
        <RwvHeader />
      </el-header>
      <el-main class="boder-top" style="overflow: unset;">
        <div class="body">
          <router-view></router-view>
        </div>
      </el-main>
      <RwvFooter></RwvFooter>
    </el-container>
    <!-- <GithubCorner></GithubCorner> -->
  </div>
</template>

<script>
import RwvHeader from "@/components/TheHeader";
import RwvFooter from "@/components/TheFooter";
// import GithubCorner from "@/components/GithubCorner";

export default {
  name: "App",
  components: {
    RwvHeader,
    RwvFooter,
    // GithubCorner
  }
};
</script>
 