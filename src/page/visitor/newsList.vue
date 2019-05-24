<template>
  <div class="carList">
    <div class="perCard" v-for="(obj,i) in NewsList" :key="i"  >
      <div class="card-top"  @click="toCar(obj)">
        <img :src="obj.prodcutImg">
      </div>
      <div class="card-buttom"  @click="toCar(obj)">
        <span class="price">{{"￥"+obj.prodcutPrice+"元"}}</span>
        <span class="carName">{{obj.productName}}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "news",
  data() {
    return {
      NewsList: []
    };
  },
  mounted() {
    this.$nextTick(function() {
      this.getDate();
    });
  },
  methods: {
    //获取数据
    getDate: function() {
      this.$http
        .get("/api/news", {
          params: {}
        })
        .then(response => {
          this.NewsList = response.data.data.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
   
     
  } // method end
};
</script>
<style lang="scss">
$bcolor: #cac7c7;

.perCard {
  display: inline-block;
  border: 1px solid $bcolor;
  text-align: center;
  width: 30%;
  margin: 1%;
  padding: 20px;
  box-sizing: border-box;
   transition: 0.2s;
  img {
    width: 100%;
  }
  .price {
    font-weight: bold;
    color: black;
    display: block;
    font-size: 16px;
    margin: 10px;
  }
  .carName {
    color: black;
  }
  &:hover{
    box-shadow: 0px 0px 16px -5px #828282;
    transform: scale(1.05);
    transition: 0.2s;
    border-color: #e89902;
  }
}
</style>
