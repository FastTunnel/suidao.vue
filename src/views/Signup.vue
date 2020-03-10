<style>
.title {
  padding: 10px 0;
  font-size: 30px;
}
</style>

<template>
  <div>
    <div class="title">注册</div>
    <el-form
      :model="signForm"
      status-icon
      :rules="rules"
      ref="signForm"
      label-width="100px"
      class="sign-form"
    >
      <el-form-item label="注册邮箱" prop="email">
        <el-input v-model="signForm.email"></el-input>
      </el-form-item>
      <el-form-item label="登录密码" prop="pass">
        <el-input type="password" v-model="signForm.pass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="signForm.checkPass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label-width="0px">
        <el-button type="primary" @click="submitForm('signForm')">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import checks from "@/utils/checks.js";
import signService from "@/common/sign.service.js";

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
        if (this.signForm.checkPass !== "") {
          this.$refs.signForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.signForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };

    return {
      signForm: {
        email: "",
        pass: "",
        checkPass: ""
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        email: [{ validator: checkEmail, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      let that = this;
      this.$refs[formName].validate(valid => {
        if (valid) {
          that.sign();
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    sign() {
      console.log("signService", signService);

      return signService
        .sign(this.signForm)
        .then(() => {
          //
        })
        .catch(error => {
          throw new Error(error);
        });
    }
  }
};
</script>
