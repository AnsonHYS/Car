<template>
  <div class="Cars" ref="contentDIV">
    <div class="i-header">
      <div class="i-nav">
        <strong>{{Car.productName}}</strong>
        <ul class="i-nav-ul">
            
          <li :class="tab=='outer'?'hov':''" @click="goTab('outer')">{{$t('lang.CART.outerV')}}</li>
          <li :class="tab=='inner'?'hov':''" @click="goTab('inner')">{{$t('lang.CART.innerV')}}</li>
          <li :class="tab=='power'?'hov':''" @click="goTab('power')">{{$t('lang.CART.powerV')}}</li>
          <li :class="tab=='buy'?'hov':''" @click="goTab('buy')">{{$t('lang.CART.buyV')}}</li>
        </ul>
      </div>
    </div>

    <carBuy v-if="tab=='buy'&& Car.productId" :cardata="Car"></carBuy>
    <carTab v-else-if="tab!='buy'" :tab="tab" :cardata="DATA"></carTab>
  </div>
</template>
<script>
import Cookies from 'js-cookie'
import carTab from "@/components/product/carTab.vue";
import carBuy from "@/components/product/carBuy.vue";
export default {
  name: "carInfo",
  data() {
    return {
      tab: "",
      id: "",
      List: [],
      Car: new Object(),
      DATA: {banner:{},desc:{}}
    };
  },
  watch: {//监听路由，
    '$route' (to, from) {
        this.$router.go(0);
    }
},
  mounted() {
    this.$nextTick(function() {
      this.getDate();
      this.id = this.$route.params.id; //新闻id
      this.setHeights();
    });
  },
  methods: {
    setHeights() {
      var dom = this.$refs.contentDIV;
      dom.style.minHeight = document.body.offsetHeight - 360 + "px";
    },
    //获取数据
    getDate: function() {
      var OBJ;
      this.$http
        .get("/api/seller", {
          params: {}
        })
        .then(response => {
          this.List = response.data.data.data;
          OBJ = this.List.filter(per => {
            if (per.productId == this.id) {
              return per;
            }
          });
          this.initDate(OBJ[0]);
          var hisTab = Cookies.set('cartab');
          var  tab = hisTab?hisTab:'outer';
          this.goTab(tab);
        })
        .catch(error => {
          console.log(error);
        });
    },
    initDate: function(data) {
      this.Car = data;
      var outer = data.outer.split("@@");
      var inner = data.inner.split("@@");
      var power = data.power.split("@@");
      this.Car.outer = outer;
      this.Car.inner = inner;
      this.Car.power = power;
    },
    goTab: function(tab) {
       
        this.tab = tab;
        Cookies.set('cartab', tab);
      if (tab != "buy") {
         this.DATA.banner =this.Car.carBanner;
         this.DATA.desc = this.setTabData();
      }
    },
    setTabData: function() {
      var key = this.tab;

      var key2 = key + "IMG";
      const txtList = this.Car[key];
      const imgList = this.Car[key2];

      var LIST = [];
      for (var i = 0; i < txtList.length; i++) {
        const obj = new Object();
        obj["img"] = imgList[i];
        obj["txt"] = txtList[i];
        LIST.push(obj);
      }
      return LIST;
    }
  }, // method end
  components: {
    carTab: carTab,
    carBuy: carBuy
  }
};
</script>
<style lang="scss">
.i-header {
  background: #f5f5f5;
}
.hov {
  color: red;
}
.i-nav {
  width: 1200px;
  margin: auto;
  overflow: hidden;
  padding: 5px;
  strong {
    display: inline-block;
    float: left;
    font-size: 26px;
  }
  .i-nav-ul {
    display: inline-block;
    float: right;
    li {
      list-style: none;
      display: inline-block;
      padding: 5px;
      cursor: pointer;
      font-size: 16px;
    }
  }
}
</style>

