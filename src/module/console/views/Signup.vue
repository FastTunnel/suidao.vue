<style>
.title {
  padding: 10px 0;
  font-size: 30px;
}
.signup {
  text-align: center;
}
</style>
 
<template>
  <div class="signup">
    <div class="title">注册</div>

    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="注册邮箱" prop="email">
        <el-input v-model="ruleForm.email"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input
          type="password"
          v-model="ruleForm.pass"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input
          type="password"
          v-model="ruleForm.checkPass"
          autocomplete="off"
        ></el-input>
      </el-form-item>

      <el-form-item>
        <el-form-item label-width="0px">
          <el-button type="primary" @click="submitForm('ruleForm')"
            >注册</el-button
          >
        </el-form-item>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { REGISTER } from "@/store/actions.type";
import { validateEmail } from "@/utils/validator";

export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        email: "",
        pass: "",
        checkPass: "",
      },
      rules: {
        email: [{ validator: validateEmail, trigger: "blur" }],
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      let that = this;
      this.$refs[formName].validate((valid) => {
        if (valid) {
          that.sign();
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    sign() {
      let that = this;
      this.$store
        .dispatch(REGISTER, {
          email: this.ruleForm.email,
          pwd: this.ruleForm.pass,
          check_pwd: this.ruleForm.checkPass,
        })
        .then(() => {
          window.location = "/";
        })
        .catch((error) => {
          that.$message.error(error);
        });
    },
  },
};
</script>
