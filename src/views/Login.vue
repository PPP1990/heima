<!--  -->
<template>
  <div class="login-container">
    <div class="login-box">
      <!-- 头像盒子 -->
      <div class="avatar-box">
        <img src="../assets/imgs/logo.png" alt="" />
      </div>
      <!-- 登录表单区 -->
      <el-form
        ref="loginform"
        class="login-form"
        :model="formData"
        :rules="loginrules"
      >
        <el-form-item prop="username">
          <el-input
            prefix-icon="iconfont icon-users"
            v-model="formData.username"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            prefix-icon="iconfont icon-3702mima"
            v-model="formData.password"
          ></el-input>
        </el-form-item>
        <el-form-item class="btns">
          <el-button type="primary" @click="loginformCheck">提交</el-button>
          <el-button type="info" @click="reset">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        username: "1222",
        password: "2",
      },
      loginrules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 10,
            message: "长度在 6 到 10 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    reset() {
      this.$refs.loginform.resetFields();
    },
    loginformCheck() {
      this.$refs.loginform.validate(async (validate) => {
        if (!validate) return;
        else {
          const { data: res } = await this.$http.post("login", this.formData);
          if (res.meta.status != 200)
            this.$messagebox("登录失败，请确认账户信息");
          else {
            this.$messagebox("登录成功！");
            window.sessionStorage.setItem("token", res.data.token);
            setTimeout(() => {
              this.$router.push("/home").bind(this);
            }, 2000);
          }
        }
      });
    },
  },
};
</script>
<style lang='less' scoped>
.login-container {
  background-color: #2b4b6b;
  height: 100%;

  .login-box {
    width: 450px;
    height: 300px;
    background-color: white;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    .avatar-box {
      width: 130px;
      height: 130px;
      border: 1px solid #eeeeee;
      border-radius: 50%;
      padding: 10px;
      box-shadow: 0 0 10px #dddddd;
      position: absolute;
      left: 50%;
      top: 0;
      transform: translate(-50%, -50%);
      background-color: white;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: #eeeeee;
      }
    }
  }
}
.login-form {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;

  .btns {
    display: flex;
    justify-content: flex-end;
  }
}
</style>