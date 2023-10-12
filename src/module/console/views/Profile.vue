<style>
.info {
  text-align: center;
}
</style>

<template>
  <div class="info">
    <el-main class="container-lg">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>AccessKey</span>
          <el-button style="float: right; padding: 3px 0" type="text" @click="resetKey">重置<i
              class="el-icon-refresh-right el-icon--right"></i> </el-button>
        </div>
        <div class="text item">{{ profile.access_key == '' ? '未生成,请重置' : profile.access_key }}</div>
        <div class="text item" style="padding-top:1em;color:#999;">请妥善保管您的AccessKey</div>
      </el-card>
    </el-main>
  </div>
</template>

<script>
import { FETCH_PROFILE, RESET_ACCESS } from "@/store/actions.type";

import { mapGetters } from "vuex";
export default {
  name: "Profile",
  data() {
    return {};
  },
  methods: {
    resetKey() {
      this.$store.dispatch(RESET_ACCESS);
    }
  },
  computed: {
    ...mapGetters(["profile"])
  },
  mounted() {
    this.$store.dispatch(FETCH_PROFILE);
  }
};
</script>