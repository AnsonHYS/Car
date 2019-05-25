<template>
  <div>
    
    <el-carousel :interval="5000" arrow="always" class="swiper" height="600px">
      <el-carousel-item class="imgItem" v-for="(L,i) in cardata.banner" :key="i">
        <img :src="L">
      </el-carousel-item>
    </el-carousel>

    <div class="car-info">
      <div :class="i%2?'':'img_left'" v-for="(L,i) in cardata.desc" :key="i">
        <h4>{{L.txt}}</h4>
        <img :src="L.img">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "carTab",
  data() {
    return {
      showList: []
    };
  },
  props: {
    cardata: {
      type: Object,
      required: true
    },
    tab: {
      type: String,
      required: true
    }
  }, //props end
  created() {},
  mounted() {
    this.$nextTick(function() {
      //this.initData();
    });
  }, //mounted end
  methods: {} //methods end
};
</script>
<style lang="scss">
.swiper {
  width: 1200px;
  margin: auto;
}
.imgItem img {
  width: 100%;
  height: 100%;
}

.car-info {
  & > div {
       display: block;
    text-align: left;
    padding: 50px 150px;
    overflow: hidden;
    margin-bottom: 20px;
    h4 {
      font-size: 22px;
      display: inline-block;
      width: 40%;
      vertical-align: middle;
      padding: 30px;
    }
    img {
      width: 60%;
      height: auto;
      display: inline-block;
      float: left;
    }
  }
}
.img_left {
  img {
    float: right !important;
  }
}
</style>
