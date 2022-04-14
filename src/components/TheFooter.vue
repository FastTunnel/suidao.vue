<style lang="scss">
.footer {
  background-color: #022144;
  // background-image:url('../assets/images/rJ4Y4q5nmK.jpg');
  background-size: cover;
  width: 100%;
  padding: 50px 0 25px 0;
  box-sizing: border-box;
  position: relative;
  text-align: center;
  color: #fff;
  font-family: "Open Sans", sans-serif;
}

.el-footer {
  padding: 0;
}
#power {
  position: absolute;
  bottom: 0.5rem;
  right: 0.5rem;
  font-size: 0.5rem;
}
.links a {
  padding-right: 1rem;
}
</style>

<template>
  <footer class="footer">
    <div style="position: fixed; right: 40px; bottom: 20px; height: 200px">
      <img :src="mp" style="height: 100px" alt="qq交流群" />
    </div>
    <div class="links">
      <div>
        <el-link
          :underline="false"
          href="https://github.com/SpringHgui/FastTunnel"
          target="_blank"
          ><img
            alt="GitHub Repo stars"
            src="https://img.shields.io/github/stars/springhgui/fasttunnel?style=social"
        /></el-link>
        <el-link
          :underline="false"
          href="https://gitee.com/Hgui/FastTunnel"
          target="_blank"
        >
          <img
            src="https://gitee.com/Hgui/FastTunnel/badge/star.svg?theme=gvp"
            alt="star"
          />
        </el-link>
      </div>
      <p>Copyright © 2020 SuiDao</p>
    </div>

    <!--
          <el-link
          href="https://github.com/SpringHgui/FastTunnel"
          target="_blank"
          id="power"
          :underline="false"
          type="info"
        >Power By FastTunnel</el-link> -->
  </footer>
</template>

<script>
export default {
  data() {
    return {
      mp: require("@/assets/images/mp.png"),
      qqGroup: require("@/assets/images/qq_group.png"),
    };
  },
};
</script>
