<style>
</style>

<template>
  <div class="container-xl">
    <el-table :data="tunnels">
      <el-table-column prop="name" label="名称"></el-table-column>
      <el-table-column prop="sub_domain" label="子域名"></el-table-column>
      <el-table-column prop="local_ip" label="本地ip"></el-table-column>
      <el-table-column prop="local_port" label="本地端口"></el-table-column>
      <el-table-column prop="enabled" label="启用状态"></el-table-column>
    </el-table>
    <div style="margin-top: 20px">
      <el-button @click="addTunnel()">创建</el-button>
    </div>
    <!-- Form -->
    <el-dialog title="创建应用" :visible.sync="dialogFormVisible">
      <el-form :model="form" label-width="80px" :rules="rules" ref="ruleForm">
        <el-form-item label="隧道类型" prop="app_type">
          <el-radio-group v-model="form.app_type">
            <el-radio :label="1">Web穿透</el-radio>
            <el-radio :label="2" disabled>端口转发</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="隧道名称" prop="name">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="子域名" prop="sub_domain">
          <el-input v-model="form.sub_domain" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="本地IP" prop="local_ip">
          <el-input v-model="form.local_ip" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="本地端口" prop="local_port">
          <el-input type="number" v-model="form.local_port" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submit('ruleForm')">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { ADD_APP, FETCH_TUNNELS } from "@/store/actions.type";
export default {
  name: "Tunnel",
  data() {
    return {
      dialogFormVisible: false,
      error: "",
      form: {
        name: "",
        sub_domain: "",
        app_type: 1,
        local_ip: "127.0.0.1",
        local_port: 80
      },
      rules: {
        app_type: [
          { required: true, message: "请选择隧道类型", trigger: "blur" }
        ],
        name: [
          { required: true, message: "请输入隧道名称", trigger: "blur" },
          { min: 1, max: 10, message: "长度在 3 到 10 个字符", trigger: "blur" }
        ],
        sub_domain: [
          { required: true, message: "请输入子域名", trigger: "blur" },
          { min: 1, max: 10, message: "长度在 1 到 10 个字符", trigger: "blur" }
        ],
        local_ip: [
          { required: true, message: "请输入本地IP", trigger: "blur" }
        ],
        local_port: [
          { required: true, message: "请输入本地端口", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    addTunnel() {
      this.dialogFormVisible = true;
    },
    submit(formName) {
      let that = this;
      this.$refs[formName].validate(valid => {
        if (valid) {
          that.$store.dispatch(ADD_APP, that.form);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    init() {
      this.$store.dispatch(FETCH_TUNNELS, {});
    },
    toggleSelection() {}
  },
  computed: {
    ...mapGetters(["tunnels"])
  },
  mounted() {
    this.init();
  }
};
</script>