<template>
  <div class="content">
    <el-carousel :interval="4000" type="card" width="100%" height="439px">
      <el-carousel-item v-for="(item,i) in bannerList" :key="i">
        <img :src="item.path" class="banners">
      </el-carousel-item>
    </el-carousel>
    <!--车型概览  -->
    <div class="part">
      <h4>
        <span>{{$t('lang.INDEX.carytypeV')}}</span>
      </h4>
      <carList></carList>
    </div>
    <!-- 媒体中心 -->
    <div class="part">
      <h4>
        <span>{{$t('lang.INDEX.mediaV')}}</span>
        <i class="underline"></i>
      </h4>
      <ul class="news">
        <li v-for="(Item,i) in newsList" :key="i" @click="toNews(Item)">
          <label class="news-date">{{Item.date}}</label>

          <label class="news-img">
            <img :src="Item.imgs">
          </label>
          <label class="news-title">{{Item.title}}</label>
        </li>
      </ul>
      <span class="more" @click="toMore">{{$t('lang.INDEX.moreV')}}</span>
    </div>
    <!--精彩推荐  -->
    <div class="part">
      <h4>
        <span>{{$t('lang.INDEX.hotV')}}</span>
      </h4>
      <ul class="hot">
        <li v-for="(Item ,i) in bannerList" :key="i">
          <label class="hot-img">
            <img :src="Item.path">
          </label>
        </li>
      </ul>
    </div>
     
  </div>
</template>
<script>
import carList from "@/components/product/CarList.vue";
export default {
  name: "index",
  data() {
    return {
      bannerList: [
        {
          path: "../static/assets/common/banner.jpg",
          name: "1",
          date: "05/23"
        },
        {
          path: "../static/assets/lc/lc-banner-2.jpg",
          name: "1",
          date: "05/23"
        },
        {
          path: "../static/assets/is/is-banner-2.jpg",
          name: "1",
          date: "05/23"
        },
        {
          path: "../static/assets/is/is-banner-3.jpg",
          name: "1",
          date: "05/23"
        },
        {
          path: "../static/assets/lc/lc-banner-1.jpg",
          name: "1",
          date: "05/23"
        }
      ],
      newsList: []
    };
  },
  mounted() {
    this.getNews();
  },
  methods: {
    getNews: function() {
      this.$http
        .get("/api/news", {
          params: {}
        })
        .then(response => {
          this.newsList = response.data.data.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    //新闻列表页
    toMore:function(){
      this.$router.push('/home/news');
    },
     toNews:function(obj){
      this.$router.push("/home/news/"+obj.newId);
    }
  },
  components: {
    carList: carList
  }
};
</script>
<style >
.content {
  width: 100%;
}
.banners {
  width: 100%;
  height: auto;
}
.part {
  width: 1200px;
  margin: 20px auto;
  padding: 0;
}
.part h4 {
  font-size: 26px;
  position: relative;
  margin: 30px auto;
}
.hot li {
  display: inline-block;
  float: left;
  width: 49%;
  height: 300px;
  margin: 0.5%;
  overflow: hidden;
}
ul.hot {
  display: block;
  position: relative;
  overflow: hidden;
}

.hot-img img {
  transition: 0.3s;
  width: 100%;
  height: auto;
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
  -webkit-transition: -webkit-transform 1000ms
    cubic-bezier(0.335, 0.015, 0.46, 0.995);
  transition: transform 1000ms cubic-bezier(0.335, 0.015, 0.46, 0.995);
}
.hot li:hover .hot-img img {
  -webkit-transform: scale(1.2);
  -ms-transform: scale(11.2);
  transform: scale(1.2);
  -webkit-transition: -webkit-transform 1000ms
    cubic-bezier(0.335, 0.015, 0.46, 0.995);
  transition: transform 1000ms cubic-bezier(0.335, 0.015, 0.46, 0.995);
  transition: 0.3s;
}
ul.news {
  padding: 0;
  margin: 0;
  width: 100%;
  display: block;
  overflow: hidden;
  position: relative;
}
.news li {
  display: inline-block;
  width: 22.9%;
  min-height: 270px;
  padding: 10px;
  text-align: left;
  float: left;
  border-radius: 3px;
  margin: 1%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border: 1px solid #dcd9de;
  list-style: none;
}
.news li:hover {
  box-shadow: 0px 0px 22px -8px #171717;
  transition: 0.2s;
  border: 1px solid #bbbbbb;
}
label.news-date {
  display: block;
  text-align: left;
  font-weight: bold;
  font-size: 18px;
  margin: 10px;
}
label.news-title {
  text-align: left;
  display: block;
  padding: 5px;
}
.news-img img {
  display: block;
  width: 100%;
  height: 130px;
}
.part h4 span {
  background: white;
  display: inline-block;
  font-size: 28px;
  z-index: 99;
  padding: 0 20px;
}
.part h4:after {
  content: "";
  display: block;
  border-bottom: 1px solid #c7c7c7;
  margin-top: -17px;
  width: 100%;
}
span.more {
  display: inline-block;
 transition: 0.2s;
  padding: 5px 10px;
  width: 100px;
  cursor: pointer;

  user-select: none;
}
.more:hover{
  background: black;
  color: white;
  
  transition: 0.2s;
  font-size: 14px;
}
</style>
