<template>
  <div class="newList">
    <div class="newCard" v-for="(obj,i) in NewsList" :key="i">
      <div class="card-left" @click="toNews(obj)">
        <img :src="obj.imgs">
      </div>
      <div class="card-right" @click="toNews(obj)">
        <strong>{{obj.title}}</strong>
        <span>{{obj.date}} -  {{obj.position}}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "news",
  data() {
    return {
      id:"",
      NewsList: [],
      News:new Object,
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
    toNews:function(obj){
      this.$router.push("/home/news/"+obj.newId);
    }
  } // method end
};
</script>
<style lang="scss">
.newList {
  width: 1200px;
  text-align: left;
  margin: 1% auto;
  .newCard {
    cursor: pointer;
    padding: 20px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-transition: 0.2s;
    transition: 0.2s;
    border-bottom: 1px solid #f3efef;
    transition: 0.3s;
    &:hover {
      box-shadow: 0px 0px 15px -2px #d6d6d6;
      transition: 0.3s;
    }
    .card-left {
      display: table-cell;
      width: 300px;
      height: auto;
      img {
        width: 100%;
      }
    }
    .card-right {
      position: relative;
      display: table-cell;
      vertical-align: top;
      padding-left: 34px;
      width: 840px;
      strong {
        font-size: 22px;
      }
      span {
        position: absolute;
        left: 34px;
        bottom: 15px;
      }
    }
  }
}
</style>
