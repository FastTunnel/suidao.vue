<style>
.title {
  padding: 10px 0;
  font-size: 30px;
}
</style>
user_id,
email,
pwd,
sign_time
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
      <el-form-item label="登录密码" prop="pwd">
        <el-input type="password" v-model="signForm.pwd" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="check_pwd">
        <el-input type="password" v-model="signForm.check_pwd" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label-width="0px">
        <el-button type="primary" @click="submitForm('signForm')">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapState } from "vuex";
import checks from "@/utils/checks.js";
import { REGISTER } from "@/store/actions.type";

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
        if (this.signForm.check_pwd !== "") {
          this.$refs.signForm.validateField("check_pwd");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.signForm.check_pwd) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };

    return {
      signForm: {
        email: "",
        pwd: "",
        check_pwd: ""
      },
      rules: {
        pwd: [{ validator: validatePass, trigger: "blur" }],
        check_pwd: [{ validator: validatePass2, trigger: "blur" }],
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
      this.$store
        .dispatch(REGISTER, this.signForm)
        .then(() => this.$router.push({ name: "home" }))
        .catch(error => {
          this.$message.error(error);
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
