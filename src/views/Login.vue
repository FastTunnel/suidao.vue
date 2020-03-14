<style>
.title {
  padding: 10px 0;
  font-size: 30px;
}
</style>

<template>
  <div>
    <div class="title">登录</div>
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="sign-form"
    >
      <el-form-item label="注册邮箱" prop="email">
        <el-input v-model="ruleForm.email"></el-input>
      </el-form-item>
      <el-form-item label="登录密码" prop="pass">
        <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label-width="0px">
        <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import checks from "@/utils/checks.js";
import signService from "@/common/user.service.js";

export default {
  data() {
    var checkEmail = (rule, value, callback) => {
      if (checks.check_email(value)) {
        callback();
      } else {
        callback(new Error("请输入正确的邮箱"));
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };

    return {
      ruleForm: {
        email: "",
        pass: ""
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        email: [{ validator: checkEmail, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      let that = this;
      this.$refs[formName].validate(valid => {
        if (valid) {
          signService
            .login(this.ruleForm)
            .then(res => {
              if (res.data.success) {
                // {"success":true,"errorCode":0,"errorMsg":"登录成功","data":{"token":"90b2ab24-831f-4f22-a689-b71bc070974d","expire_time":"2020-03-15T00:10:01.1959311+08:00"}}
                // 登录成功
                console.log(res.data);
              } else {
                that.$message({
                  showClose: true,
                  message: res.data.errorMsg,
                  type: "error"
                });
              }
            })
            .catch(error => {
              that.$message({
                showClose: true,
                message: error,
                type: "error"
              });
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>
