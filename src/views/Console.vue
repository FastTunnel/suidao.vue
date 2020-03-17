<style>
.welcome {
  font-size: 50px;
}
.app-box {
}
.app-item {
  border: 1px solid rgba(0, 0, 0, 0.2);
}
</style>

<template>
    <div class="container-xl">
        <div class="app-box">
            <el-row :gutter="20">
                <el-col :span="6">
                    <div class="app-item">
                        <div>服务器1</div>
                        <div>服务器1</div>
                        <div>服务器1</div>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="app-item">
                        <div>服务器1</div>
                        <div>服务器1</div>
                        <div>服务器1</div>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="app-item">
                        <div>服务器1</div>
                        <div>服务器1</div>
                        <div>服务器1</div>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="app-item">
                        <div>服务器1</div>
                        <div>服务器1</div>
                        <div>服务器1</div>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
export default {
  name: "Console",
  data() {
    return {};
  }
};
</script>