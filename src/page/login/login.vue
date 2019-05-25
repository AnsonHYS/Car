<template>
  <div class="loginBg">
    <div class="login_box">
      <el-form label-position="right" label-width="90px" :model="loginfrom">
        <el-form-item :label="ACC"  >
          <el-input v-model="loginfrom.user"></el-input>
        </el-form-item>
        <el-form-item :label="PWD">
          <el-input v-model="loginfrom.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="toHome">{{$t('lang.homeV')}}</el-button>
          <el-button type="primary" @click="login(loginfrom)">{{$t('lang.loginV')}}</el-button>
        </el-form-item>
      </el-form>
    </div>

    <div class="tips">
      <label>管理员：admin/123456</label>
      <label>用  户：user/123456</label>
    </div>
  </div>
</template>

<script>
import { menu } from "@/router/index.js";
export default {
  name: "login",
  data() {
    return {
      ACC:'',
      PWD:'',
      loginfrom: {
        user: "",
        password: ""
      }
    };
  },
  created() {
    this.ACC = this.$t('lang.LOGIN.accV');
    this.PWD = this.$t('lang.LOGIN.pwdV');
  },
  methods: {
    toHome() {
      this.$router.push("/home/index");
    },
    login(data) {
      this.$store
        .dispatch("Logins", data)
        .then(res => {
          this.$router.push({ path: "/bg" });
        })
        .catch(err => {});
    }
  }
};
</script>

<style >
.loginBg {
  background: url("/static/assets/common/bg.jpg") no-repeat;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-width: 1000px;
  z-index: -10;
  zoom: 1;
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
  background-position: center 0;
  z-index: 0;
}
.login_box {
  width: 500px;
  position: fixed;
  left: 39%;
  top: 200px;
  border: 1px solid #505252;
  border-radius: 5px;
  padding: 38px 60px 5px 25px;
  text-align: center;
  background: #0e0e0eb0;
}
label.el-form-item__label {
  color: white;
  font-size: 16px;
  text-align: center;
}
.tips {
    background: #fff2cc;
    display: block;
    width: 200px;
    margin: auto;
    padding: 5px;
}
.tips label {
    display: block;
    text-align: center;
}
</style>
