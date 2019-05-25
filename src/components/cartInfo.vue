<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th>{{$t('lang.CART.cartypeV')}}</th>
          <th>{{$t('lang.CART.priceV')}}</th>
          <th>{{$t('lang.CART.numV')}}</th>
          <th>{{$t('lang.CART.operationV')}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(shop,index) in cartProducts" :key="index">
          <td>{{shop.data.productName}}</td>
          <td>{{shop.data.prodcutPrice}}</td>
          <td>{{shop.num}}</td>
          <td>
            <div @click="delProduct(shop)" class="del-btn">{{$t('lang.CART.delV')}}</div>
          </td>
        </tr>
        <tr v-if="!cartProducts.length" class="nullTr">
          <td colspan="5" class="text-center">{{$t('lang.CART.nullV')}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "cartlist",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["cartProducts"])
  },
  methods: {
    ...mapActions(["delProduct"])
  }
};
</script>
<style lang="scss">
.table {
  width: 100%;
  thead {
    background: #4b4b4c;
    color: white;
    height: 20px;
    th {
      padding: 5px;
      font-size: 18px;
      font-weight: 400;
      background: #0c0c0c;
    }
  }
  td {
    border-bottom: 1px dashed #cec8c8;
    padding: 7px;
    background: #efeeee;
  }
  .del-btn {
    padding: 8px 0px;
    background: #c81623;
    color: white;
    border-radius: 3px;
    cursor: pointer;
  }
  .nullTr > td {
    border: 0;
    font-size: 18px;
    padding: 60px 0;
  }
}
</style>


