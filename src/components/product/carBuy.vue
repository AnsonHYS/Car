<template>
  <div ref="contentDIV">
    <div class="buyDiv">
      <img :src="cardata.prodcutImg">
      <div class="BUY">
        <label>{{$t('lang.CART.cartypeV')}}:{{cardata.productName}}</label>
        <label>{{$t('lang.CART.priceV')}}：{{cardata.prodcutPrice}}</label>
        <label>
          {{$t('lang.CART.numV')}}：
          <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="选择数量"></el-input-number>
        </label>
        <div>
          <button class="cart-b btn" @click="addToCart({cardata,num})">{{$t('lang.CART.cartBtnV')}}</button>
          <!-- <button class="buy-b btn">立即购买</button> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "carBuy",
  data() {
    return {
      num: 1
    };
  },
  props: {
    cardata: {
      type: Object,
      required: true
    }
  }, //props end
  mounted() {
    this.setHeights();
  }, //mounted end
  computed: {
    ...mapGetters(["cartLists"])
  },
  methods: {
    ...mapActions(["addToCart"]),
    handleChange: function(obj) {},
    setHeights() {
      var dom = this.$refs.contentDIV;
      dom.style.minHeight = document.body.offsetHeight - 360 + "px";
    }
  } //methods end
};
</script>
<style lang="scss">
.buyDiv {
  width: 1200px;
  margin: auto;
  img {
    width: 50%;
    padding: 20px;
    margin: 20px;
    border-radius: 3px;
  }
  .BUY {
    label {
      display: block;
      font-size: 26px;
      margin: 20px;
      text-align: left;
      padding-left: 40%;
    }
    .btn {
      padding: 10px 50px;
      border: 0;
      cursor: pointer;
      width: 300px;
      font-size: 20px;
      color: white;
      background: black;
      border-radius: 3px;
      margin: 10px 50px;
    }
    .cart-b {
      background: red !important;
    }
  }
}
</style>
