<style>
</style>

<template>
  <div class="container-xl">
    <el-table :data="tunnels">
      <el-table-column prop="name" label="名称"></el-table-column>
      <el-table-column prop="sub_domain" label="子域名"></el-table-column>
      <el-table-column prop="local_ip" label="本地ip"></el-table-column>
      <el-table-column prop="local_port" label="本地端口"></el-table-column>
      <el-table-column prop="client_name" label="客户端"></el-table-column>
      <el-table-column prop="enabled" label="启用状态">
        <template slot-scope="scope">
          <el-switch
            v-model="scope.row.enabled"
            active-color="#13ce66"
            inactive-color="#ff4949"
            @change="changeEnable($event, scope.row)"
          ></el-switch>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="handleClick(scope.row)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div style="margin-top: 20px">
      <el-button @click="addTunnel('formName')">创建</el-button>
    </div>
    <!-- Form -->
    <el-dialog :title="editName" :visible.sync="dialogFormVisible">
      <el-form :model="form" label-width="80px" :rules="rules" ref="ruleForm">
        <el-form-item label="客户端" prop="client_id">
          <el-select v-model="form.client_id" placeholder="请选择自定义客户端">
            <el-option :label="unselect.label" :value="unselect.val"></el-option>
            <el-option
              :label="item.client_name"
              :value="item.client_id"
              :key="item.client_id"
              v-for="(item) in clients"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="隧道类型" prop="app_type">
          <el-radio-group v-model="form.app_type">
            <el-radio :label="1">Web穿透</el-radio>
            <el-radio :label="2" disabled>SSH/远程桌面</el-radio>
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
import {
  ADD_APP,
  FETCH_TUNNELS,
  FETCH_CLIENTS,
  UPDATE_TUNNEL_ENABLED
} from "@/store/actions.type";
export default {
  name: "Tunnel",
  data() {
    return {
      unselect: { label: "未选择", val: 0 },
      error: "",
      editName: "",
      form: {
        tunnel_id: "",
        name: "",
        sub_domain: "",
        app_type: 1,
        local_ip: "127.0.0.1",
        local_port: 80,
        client_id: 0
      },
      dialogFormVisible: false,
      rules: {
        app_type: [
          { required: true, message: "请选择隧道类型", trigger: "blur" }
        ],
        client_id: [
          {
            validator: (rule, value, callback) => {
              if (value == 0) {
                callback(new Error("请选择客户端"));
              } else {
                callback();
              }
            },
            required: true,
            trigger: "blur"
          }
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
    changeEnable(value, row) {
      let that = this;
      this.$store
        .dispatch(UPDATE_TUNNEL_ENABLED, {
          tunnel_id: row.tunnel_id,
          enabled: value
        })
        .then(res => {
          that.$message({ message: "更新成功", type: "success" });
        })
        .catch(err => {
          that.$message.error(err);
        });
    },
    handleClick(row) {
      this.editName = "修改应用";
      this.form.tunnel_id = row.tunnel_id;
      this.form.name = row.name;
      this.form.sub_domain = row.sub_domain;
      this.form.local_ip = row.local_ip;
      this.form.local_port = row.local_port;
      this.form.client_id = row.client_id;

      this.dialogFormVisible = true;
    },
    addTunnel(formName) {
      this.editName = "创建应用";
      this.form.tunnel_id = 0;
      this.form.name = "";
      this.form.sub_domain = "";
      this.form.local_ip = "127.0.0.1";
      this.form.local_port = 80;
      this.form.client_id = 0;

      this.dialogFormVisible = true;
    },
    submit(formName) {
      let that = this;
      this.$refs[formName].validate(valid => {
        if (valid) {
          that.$store
            .dispatch(ADD_APP, that.form)
            .then(() => {
              that.dialogFormVisible = false;
              that.$message({ message: "操作成功", type: "success" });
              that.init();
            })
            .catch(err => {
              that.$message.error(err);
            });
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
      this.$store.dispatch(FETCH_CLIENTS);
      this.$store
        .dispatch(FETCH_TUNNELS, {})
        .then(() => {})
        .catch(err => {
          this.$message.error(err);
        });
    }
  },
  computed: {
    ...mapGetters(["tunnels", "clients"])
  },
  mounted() {
    this.init();
  }
};
</script>