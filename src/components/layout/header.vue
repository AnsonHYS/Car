<template>
  <header class="header">
    <div class="nav-title">
      <div class="nav-tab LOGO">
        <img src="../../../static/assets/logo.png">
      </div>
      <div class="nav-tab SEARCH">
        <div class="sDiv">
          <input
            type="text"
            :value="SearchVal"
            @on-enter="Search"
            :placeholder="$t('lang.pleaseWriteV')"
          >
          <button @on-click="Search">{{$t('lang.searchV')}}</button>
        </div>
      </div>
      <div class="nav-tab RL">
        <el-select class="lang" v-model="value" size="mini" @change="selLang" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="Language(item.key)"
            :value="item.value"
          ></el-option>
        </el-select>

        <div class="loginDiv">
          <router-link to="/login">{{$t("lang.loginV")}}</router-link>
          <i class="line"></i>
          <router-link to>{{$t('lang.registV')}}</router-link>
        </div>
      </div>
    </div>
    <ul class="nav">
      <!-- <router-link :to="L.url" v-for="(L,index) in nav" :key="index" :class="L.key==navOn?'on':''" @click="navOn=L.key"> {{Language(L.key)}}</router-link> -->
      <li
        v-for="(L,index) in nav"
        :key="index"
        :class="L.key==navOn?'on a':'a'"
        @click="turnNav(L)"
      >
        {{Language(L.key)}}
        <ul class="second-nav" v-if="L.key=='productV'">
          <li v-for="(Lis,i) in CarList" :key="i" @click="toCar(Lis)">{{Lis.productName}}</li>
        </ul>
      </li>
    </ul>
    <!-- 购物车 -->
    <cart></cart>
  </header>
</template>

<script>
import LangStorage from "@/com/lang";
import cart from "@/components/cart.vue";
export default {
  name: "headerDiv",
  data() {
    return {
      value: "", //語言
      options: [{ value: "zh-CN", key: "ZH" }, { value: "en-US", key: "EN" }],
      nav: [
        { key: "homeV", url: "/home/index" },
        { key: "productV", url: "" },
        { key: "newsV", url: "/home/news" },
        { key: "aboutV", url: "" },

        { key: "contantV", url: "" }
      ],
      SearchVal: "",
      navOn: "homeV", //
      CarList: []
    };
  },
  mounted() {
    this.$nextTick(function() {
      this.value = LangStorage.getLang("zh-CN"); //获取本地库中的语言
      this.getDate();
    });
  },
  methods: {
    getDate: function() {
      this.$http
        .get("/api/seller", {
          params: {}
        })
        .then(response => {
          //这里要使用箭头函数，使用ES5的写法  this是undefined
          console.log(response);

          this.CarList = response.data.data.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    //进入商品页
    toCar: function(data) {
      
      this.$router.push("/home/car/" + data.productId );
    },
    selLang: function(a) {
      var t = this;
      var sel = this.value;
      if (t.$i18n.locale === "zh-CN") {
        t.$i18n.locale = sel; //关键语句
        console.log("en-US");
      } else {
        t.$i18n.locale = sel; //关键语句
        console.log("zh-CN");
      }

      LangStorage.setLang(this.$i18n.locale); // 保存用户习惯
    },
    Language: function(key) {
      this.$i18n.locale;
      let str = "lang." + key;
      return this.$t(str);
    },
    Search: function() {
      this.SearchVal;
      console.log();
    },
    turnNav: function(obj) {
      this.$router.push(obj.url);
      this.navOn = obj.key;
    }
  }, //method end
  components: {
    cart: cart
  }
};
</script>

<style>
.header {
  display: table;
  margin: auto;
  background: white;
  -webkit-box-shadow: 0px 0px 5px -3px black;
  box-shadow: 0px 2px 5px -3px black;
  width: 100%;
  margin-bottom: 2px;
}
.nav-title {
  display: table;
  width: 1200px;
  padding: 20px 0px;
  margin: auto;
}
.nav-tab {
  display: table-cell;
  vertical-align: bottom;
}
.nav-tab.LOGO {
  width: 20%;
  text-align: left;
}
.LOGO img {
  width: 228px;
  height: 46px;
  vertical-align: bottom;
}
.nav-tab.SEARCH {
  padding-left: 50px;
}
.sDiv {
  display: table;
  vertical-align: bottom;
  width: 550px;
}
.sDiv > input {
  display: table-cell;
  vertical-align: bottom;
  width: 420px;
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid #e2e2e2;
  font-size: 18px;
  height: 46px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}
.sDiv > button {
  display: table-cell;
  vertical-align: bottom;
  width: 130px;
  padding: 10px;
  border: 1px solid #f23e2d;
  font-size: 16px;
  background: #f23e2d;
  color: white;
  cursor: pointer;
  user-select: none;
  height: 46px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
.el-select.lang {
  width: 100px;
  display: inline-block;
  margin-right: 70px;
}
.loginDiv {
  display: inline-block;
}
.RL a {
  display: inline-block;
  font-size: 16px;
  color: #737272;
  padding: 0px 5px;
  vertical-align: middle;
  text-align: center;
  cursor: pointer;
}
i.line {
  display: inline-block;
  border-right: 1px solid #c0c0c0;
  height: 14px;
  vertical-align: middle;
}
ul.nav {
  padding: 0;
  margin: auto;
  list-style: none;
  background: #ffffff;
  text-align: left;
  display: table;
  width: 1200px;
}
.a {
  position: relative;
  display: table-cell;
  padding: 5px;
  font-size: 15px;
  width: 97px;
  height: 43px;
  box-sizing: border-box;
  text-align: center;
  line-height: 35px;
  text-decoration: none;
  cursor: pointer;
  user-select: none;
}
.a {
  color: rgb(54, 54, 54);
}
.on {
  background: #fa8378 !important;
  color: white !important;
}
.a:hover {
  background: #ff998f;
  color: white;
}
.a:hover .second-nav {
  display: block;
  background: #ffd7d3 !important;
  color: black;
}
/*二级菜单栏*/
.second-nav {
  display: none;
  position: absolute;
  background: #fcf6c5;
  list-style: none;
  width: 100%;
  border: 0;
  border-bottom: 1px solid white;
  left: 0;
  top: 43px;
  z-index: 999;
}
.second-nav li:hover {
  background: #fa8378;
}
</style>