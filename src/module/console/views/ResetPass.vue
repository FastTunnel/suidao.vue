<style>
.title {
    padding: 10px 0;
    font-size: 30px;
}

.login {
    text-align: center;
    width: 600px;
    margin: auto;
}
</style>

<template>
    <div class="login">
        <div v-if="step == 1">
            <div class="title">重置密码</div>
            <div style="padding: 10px;">您正在重置账号 <span style="color: red;">{{ userInfo.email }} </span> 的密码</div>
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="新的密码" prop="pass">
                    <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="checkPass">
                    <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
                </el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">重置</el-button>
            </el-form>
        </div>

        <div v-if="step == 2">
            <div class="title">✨重置成功</div>
            <p>恭喜您，您的密码已成功重置，快去登录您的账号吧😝</p>
            <el-button type="primary" plain @click="gologin">立即登录</el-button>
        </div>

        <div v-if="step == 3">
            <div class="title">😔{{ errMsg }}</div>
            <p>重置链接貌似遇到了一些问题，请重新申请找回密码吧！</p>
            <el-button type="primary" plain @click="gorefund">重新找回</el-button>
        </div>
    </div>
</template>

<script>
import ApiService from "@/common/api.service";

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
            step: 1,
            userInfo: {},
            ruleForm: {
                pass: "",
                checkPass: "",
            },
            rules: {
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
                    that.reset();
                } else {
                    console.log("error submit!!");
                    return false;
                }
            });
        },
        reset() {
            let that = this;
            ApiService.post("user/resetpass", {
                token: this.$route.query.token,
                pwd: this.ruleForm.pass,
                check_pwd: this.ruleForm.checkPass,
            })
                .then(res => {
                    that.$message({ message: "密码重置成功", type: "success" });
                    that.step = 2;
                })
                .catch((error) => {
                    that.$message.error(error);
                });
        },
        gologin() {
            this.$router.replace({ name: "login" })
        },
        gorefund() {
            this.$router.replace({ name: "refund" })
        },
        init() {
            let that = this;
            ApiService.post("user/GetRefund", {
                token: this.$route.query.token,
            })
                .then(res => {
                    that.userInfo = res.data;
                })
                .catch((error) => {
                    that.$message.error(error);
                    that.errMsg = error;
                    that.step = 3;
                });
        }
    },
    mounted() {
        this.init();
    }
};
</script>
