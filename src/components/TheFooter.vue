<style lang="scss">
.footer {
  background-color: #f7fbfd;
  width: 100%;
  padding: 40px 150px;
  box-sizing: border-box;
  position: relative;
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
</style>

<template>
  <footer class="footer">
    <div style="">
      <el-link
        href="https://github.com/SpringHgui/suidao.vue"
        :underline="false"
        target="_blank"
        >github</el-link
      >
      <p>Copyright © 2020 SuiDao</p>
    </div>

    <el-link
      href="https://github.com/SpringHgui/FastTunnel"
      target="_blank"
      id="power"
      :underline="false"
      type="info"
      >Power By FastTunnel</el-link
    >
  </footer>
</template>

<script>
export default {};
</script>
