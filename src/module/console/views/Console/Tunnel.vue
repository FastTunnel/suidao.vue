<style>
</style>

<template>
  <div class="container-xl">
    <div class="title">隧道管理</div>
    <el-table :data="tunnels">
      <el-table-column prop="name" label="名称"></el-table-column>
      <el-table-column prop="type_name" label="隧道类型"></el-table-column>
      <el-table-column prop="sub_domain" label="子域名"></el-table-column>
      <el-table-column prop="remote_port" label="映射端口"></el-table-column>
      <el-table-column prop="local_ip" label="本地ip"></el-table-column>
      <el-table-column prop="local_port" label="本地端口"></el-table-column>
      <el-table-column prop="addr" label="访问地址" width="240"></el-table-column>
      <!-- <el-table-column prop="server_name" label="服务器"></el-table-column> -->
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
      <el-form :model="form" label-width="120px" :rules="rules" ref="ruleForm">
        <el-form-item label="服务器" prop="server_id">
          <el-select v-model="form.server_id" placeholder="请选择服务器">
            <el-option :label="unselect.label" :value="unselect.val"></el-option>
            <el-option
              :label="item.server_name"
              :value="item.server_id"
              :key="item.server_id"
              :disabled="!item.enabled"
              v-for="(item) in clients"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="隧道类型" prop="tunnel_type">
          <el-radio-group v-model="form.tunnel_type">
            <el-radio :label="1">Web穿透</el-radio>
            <el-radio :label="2">SSH/远程桌面/端口转发</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="隧道名称" prop="name">
          <el-input v-model="form.name" autocomplete="off" placeholder="用于用户区分隧道 如：测试、生产、xx站点"></el-input>
        </el-form-item>
        <el-form-item label="web子域名" prop="sub_domain" v-show="form.tunnel_type == 1">
          <el-input
            v-model="form.sub_domain"
            autocomplete="off"
            placeholder="自定义域名前缀 如：dev_test-1、test-1"
          ></el-input>
        </el-form-item>
        <el-form-item label="映射端口" prop="remote_port" v-show="form.tunnel_type == 2">
          <el-input
            v-model="form.remote_port"
            autocomplete="off"
            placeholder="映射端口：内网端口号映射至服务器的此端口"
          ></el-input>
        </el-form-item>
        <el-form-item label="内网服务IP" prop="local_ip">
          <el-input
            v-model="form.local_ip"
            autocomplete="off"
            placeholder="被穿透的服务所在内网ip地址 默认值：127.0.0.1"
          ></el-input>
        </el-form-item>
        <el-form-item label="内网服务端口" prop="local_port">
          <el-input
            type="number"
            v-model="form.local_port"
            autocomplete="off"
            placeholder="被穿透的服务提供服务的端口号 默认值值：80"
          ></el-input>
        </el-form-item>
        <el-form-item label="" prop="local_port" v-show="form.tunnel_type == 2">
          <el-row>
            <el-button size="mini" type="success" @click="setPort('3389')">3389 (windows远程)</el-button>
            <el-button size="mini" type="warning" @click="setPort('22')">22 (linux远程)</el-button>
            <el-button size="mini" type="danger" @click="setPort('3306')">3306 (mysql)</el-button>
          </el-row>
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
import {
  validateIP,
  validatePort,
  validateSubDomian,
  validateRemotPort
} from "@/utils/validator";

export default {
  name: "Tunnel",
  data() {
    return {
      unselect: { label: "未选择", val: 0 },
      error: "",
      editName: "",
      form: {
        remote_port: "",
        tunnel_id: 0,
        name: "",
        sub_domain: "",
        tunnel_type: 1,
        local_ip: "127.0.0.1",
        local_port: 80,
        server_id: 0
      },
      dialogFormVisible: false,
      rules: {
        tunnel_type: [
          { required: true, message: "请选择隧道类型", trigger: "blur" }
        ],
        server_id: [
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
          {
            required: () => {
              return this.form.tunnel_type == 1;
            },
            validator: (rule, value, callback) => {
              if (this.form.tunnel_type == 1) {
                validateSubDomian(rule, value, callback);
              } else {
                callback();
              }
            },
            trigger: "blur"
          },
          { min: 1, max: 10, message: "长度在 1 到 10 个字符", trigger: "blur" }
        ],
        remote_port: [
          {
            required: () => {
              return this.form.tunnel_type == 2;
            },
            validator: (rule, value, callback) => {
              if (this.form.tunnel_type == 2) {
                validateRemotPort(rule, value, callback);
              } else {
                callback();
              }
            },
            trigger: "blur"
          }
        ],
        local_ip: [{ required: true, validator: validateIP, trigger: "blur" }],
        local_port: [
          { required: true, validator: validatePort, trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    setPort(port) {
      this.form.local_port = port;
    },
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
      this.editName = "修改隧道";
      this.form = row;

      this.dialogFormVisible = true;
    },
    addTunnel(formName) {
      this.editName = "创建隧道";

      this.resetForm();
      this.dialogFormVisible = true;
    },
    resetForm() {
      this.form = {
        remote_port: "",
        tunnel_id: 0,
        name: "",
        sub_domain: "",
        tunnel_type: 1,
        local_ip: "127.0.0.1",
        local_port: 80,
        server_id: 0
      };
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