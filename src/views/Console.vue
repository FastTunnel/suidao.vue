<style>
.welcome {
  font-size: 50px;
}
.app-box {
}
.app-item {
}
.el-card {
  margin-top: 20px;
}
.el-tabs__header {
  margin-top: 20px;
}
.el-aside {
  background-color: rgba(0, 0, 0, 0.04);
}
</style>

<template>
    <el-container style="height: 100%;">
        <!-- <el-aside width="200px"></el-aside> -->
        <el-main>
            <el-tabs tab-position="left">
                <el-tab-pane label="Web穿透">
                    <div class="app-box">
                        <el-row :gutter="20">
                            <el-col :span="6">
                                <div class="app-item">
                                    <el-card class="box-card">
                                        <div class="text item">列表内容</div>
                                        <div class="text item">列表内容</div>
                                        <div class="text item">列表内容</div>
                                    </el-card>
                                </div>
                            </el-col>
                            <el-col :span="6">
                                <div class="app-item">
                                    <el-card class="box-card">
                                        <div class="text item">列表内容</div>
                                        <div class="text item">列表内容</div>
                                        <div class="text item">列表内容</div>
                                    </el-card>
                                </div>
                            </el-col>
                            <el-col :span="6">
                                <div class="app-item">
                                    <el-card class="box-card">
                                        <div class="text item">列表内容</div>
                                        <div class="text item">列表内容</div>
                                        <div class="text item">列表内容</div>
                                    </el-card>
                                </div>
                            </el-col>
                            <el-col :span="6">
                                <div class="app-item">
                                    <el-card class="box-card">
                                        <div class="text item">列表内容</div>
                                        <div class="text item">列表内容</div>
                                        <div class="text item">列表内容</div>
                                    </el-card>
                                </div>
                            </el-col>
                            <el-col :span="6">
                                <div class="app-item">
                                    <el-card class="box-card">
                                        <div class="text item">列表内容</div>
                                        <div class="text item">列表内容</div>
                                        <div class="text item">列表内容</div>
                                    </el-card>
                                </div>
                            </el-col>
                            <el-col :span="6">
                                <div class="app-item">
                                    <el-card class="box-card">
                                        <div class="text item">列表内容</div>
                                        <div class="text item">列表内容</div>
                                        <div class="text item">列表内容</div>
                                    </el-card>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="端口转发">端口转发</el-tab-pane>
            </el-tabs>
        </el-main>
    </el-container>
</template>

<script>
export default {
  name: "Console",
  data() {
    return {};
  }
};
</script>