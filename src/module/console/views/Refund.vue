<style>
.title {
  padding: 10px 0;
  font-size: 30px;
}

.login {
  text-align: center;
}
</style>

<template>
  <div class="login">
    <div class="title">找回密码</div>
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="sign-form">
      <el-form-item label="注册邮箱" prop="email">
        <el-input v-model="ruleForm.email"></el-input>
      </el-form-item>
      <el-form-item label-width="100px">
        <el-button type="primary" @click="submitForm('ruleForm')">找回</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { validateEmail } from "@/utils/validator";
import ApiService from "@/common/api.service";

export default {
  data() {
    return {
      ruleForm: {
        email: "",
      },
      rules: {
        email: [{ validator: validateEmail, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      let that = this;
      this.ruleForm.origin = location.origin;
      this.$refs[formName].validate(valid => {
        if (valid) {
          const loading = this.$loading({
            lock: true,
            text: '找回中，请稍等...',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)'
          });

          ApiService.post("user/refund", this.ruleForm)
            .then(res => {
              that.$message({ message: res.errorMsg, type: "success" });
              loading.close();
            })
            .catch(error => {
              console.log(error);
              that.$message.error(error);
              loading.close();
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  },
  computed: {
    ...mapState({
      errors: state => state.auth.errors
    })
  }
};
</script>
