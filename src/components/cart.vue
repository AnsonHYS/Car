<template>
  <div class="cartDiv inout3s" ref="cart">
    <!-- 固定栏 -->
    <div class="cart_door inout3s">
      <!-- 打開购物车 -->
      <div class="cartOpen" @click="showCart">
        <div class="c-group">
          <i class="cartOpen_icon top-show"></i>
          <span class="cartOpen_txt h-d inout3s">购物车</span>
        </div>
      </div>

      <!-- 回到頂部 -->
      <div class="go_top" @click="goTop">
        <div class="c-group">
          <i class="top_icon top-show"></i>
          <span class="top_txt h-d inout3s">顶部</span>
        </div>
      </div>
    </div>

    <!------------------ 购物车内容 ------------------->
    <div class="cart-contant">
      <div class="cart_header">
        <span class="cart_txts">
          <i class="cart_icon"></i>购物车
        </span>
        <span class="cart_close" @click="closeCart"></span>
      </div>
      <div class="cart_middle">
        <!-- 主内容 -->
      </div>
      <div class="cart_footer">
        <div class="cart_num_div">
          <span class="cart_num">0</span>件商品
        </div>
        <div class="cart_total_div">
          共计：
          <span class="cart_total">￥0.00</span>
        </div>
        <a class="buyBtn">去购物车结算</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "cart",
  data() {
    return {
      CarList: [],
      showflag: false
    };
  },
  mounted() {
    this.$nextTick(function() {});
  },
  methods: {
    showCart: function() {
      var dom = this.$refs.cart;
      this.showflag = !this.showflag ? true : false;

      dom.style.right = "0px";
    },
    closeCart: function() {
      var dom = this.$refs.cart;
      this.showflag = !this.showflag ? true : false;
      dom.style.right = "-300px";
    },
    goTop: function() {
      var scrollToTop = window.setInterval(function() {
        var pos = window.pageYOffset;
        if (pos > 0) {
          window.scrollTo(0, pos - 20); // how far to scroll on each step
        } else {
          window.clearInterval(scrollToTop);
        }
      }, 1); // how fast to scroll (this equals roughly 60 fps)
    }
  } // method end
};
</script>
<style lang="scss">
.cartDiv {
  position: fixed;
  background: antiquewhite;
  z-index: 99;
  height: 100%;
  top: 0;
  zoom: 1;
  width: 300px;
  box-sizing: border-box;
  right: -300px;
  .cart_door {
    position: absolute;
    width: 6px;
    background: #f23e2d;
    left: -6px;
    height: 100%;

    & > div {
      width: 35px;
      height: 35px;
      background: #e6a23c;
      right: 0px;
      position: absolute;
    }
    .c-group {
      position: relative;
      .top-show {
        position: absolute;
        display: inline-block;
        z-index: 5;
        background: #409eff;
        width: 35px;
        height: 35px;
        left: 0;
      }
      .h-d {
        position: absolute;
        width: 62px;
        display: inline-block;
        background: #f23e2d;
        color: white;
        height: 35px;
        line-height: 35px;
        top: 0;
        left: 0;
        z-index: 1;
      }
      .cartOpen_icon {
        background: #f23e2d url(../../static/assets/common/toolbars.png) -50px 0px
          no-repeat;
      }
      .top_icon {
        background: #f23e2d url(../../static/assets/common/toolbars.png) -50px -250px
          no-repeat;
      }
    }
    .cartOpen {
      top: 50%;
    }
    .cartOpen:hover,
    .go_top:hover {
      .h-d {
        left: -62px !important;
      }
    }

    .go_top {
      bottom: 5%;
    }
  }
  .cart-contant {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 3;
    background: #efeeee;
    .cart_header {
      height: 40px;
      background: #ffffff;
      display: table;
      width: 100%;
      .cart_txts {
        display: table-cell;
        width: 85%;
        line-height: 40px;
        .cart_icon {
          background: url(/static/img/toolbars.aef5f2a.png) 9px 10px no-repeat;
          display: inline-block;
          width: 40px;
          height: 40px;
          position: absolute;
          left: 0;
        }
      }
      .cart_close {
        display: table-cell;
        width: 15%;
        background: #ffe1de url(/static/img/toolbars.aef5f2a.png) 13px -236px no-repeat;
        cursor: pointer;
      }
    }
    .cart_middle {
      height: calc(100% - 90px);
    }
    .cart_footer {
      background: #4b4b4c;
      height: 50px;
      padding: 5px;
      width: 100%;
      position: relative;
      overflow: hidden;
      & > div {
        text-align: left;
        font-size: 12px;
        height: 20px;
        line-height: 20px;
        color: #ffffff;
        & > span {
          font-weight: bold;
          color: #ff9a01;
          padding: 5px;
        }
      }
      a.buyBtn {
        position: absolute;
        background-color: #c81623 !important;
        color: white;
        padding: 6px;
        right: 6px;
        top: 10px;
      }
    }
  }
}
.inout3s {
  -webkit-transition: left 0.3s ease-in-out 0.1s !important;
  -moz-transition: left 0.3s ease-in-out 0.1s !important;
  transition: left 0.3s ease-in-out 0.1s !important;
}
</style>
