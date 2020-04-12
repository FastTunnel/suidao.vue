<style>
</style>

<template>
  <div class="container-xl">
    <div class="title">客户端管理</div>
    <el-table :data="clients" style="width: 100%">
      <el-table-column prop="client_name" label="名称"></el-table-column>
      <el-table-column prop="client_key" label="登录密钥"></el-table-column>
      <el-table-column prop="create_time" label="创建时间"></el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="handleClick(scope.row)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div style="margin-top: 20px">
      <el-button @click="addClient()">创建</el-button>
    </div>
    <!-- Form -->
    <el-dialog :title="editName" :visible.sync="dialogFormVisible">
      <el-form :model="form" label-width="120px" :rules="rules" ref="ruleForm">
        <el-form-item label="客户端名称" prop="name">
          <el-input v-model="form.name" autocomplete="off" placeholder="如：家、公司等，一个客户端可配置多个隧道"></el-input>
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
import { ADD_CLIENT, FETCH_CLIENTS } from "@/module/index/store/actions.type";
export default {
  name: "Client",
  data() {
    return {
      error: "",
      editName: "",
      form: {
        client_id: 0,
        name: ""
      },
      dialogFormVisible: false,
      rules: {
        name: [
          { required: true, message: "请输入客户端名称", trigger: "blur" },
          { min: 1, max: 10, message: "长度在 3 到 10 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    handleClick(row) {
      this.editName = "修改客户端";
      console.log(row);
      this.form.client_id = row.client_id;
      this.form.name = row.client_name;
      this.dialogFormVisible = true;
    },
    addClient() {
      this.editName = "创建客户端";
      this.dialogFormVisible = true;
    },
    submit(formName) {
      let that = this;
      this.$refs[formName].validate(valid => {
        if (valid) {
          that.$store
            .dispatch(ADD_CLIENT, that.form)
            .then(
              () => {
                that.dialogFormVisible = false;
                that.$message({ message: "操作成功", type: "success" });
                that.initData();
              },
              err => {
                that.$message.error(err);
              }
            )
            .catch(err => {
              console.log("client", err);
              that.$message.error(err);
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    initData() {
      this.$store
        .dispatch(FETCH_CLIENTS)
        .then(() => {})
        .catch(error => {
          this.$message.error(error);
        });
    }
  },
  computed: {
    ...mapGetters(["clients"])
  },
  mounted() {
    this.initData();
  }
};
</script>