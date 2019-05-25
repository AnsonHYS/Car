<template>
  <div class="news" ref="contentDIV">
    <div class="new-top">
      <span>{{News.date}} &nbsp;&nbsp;&nbsp;&nbsp;{{News.position}}</span>
      <router-link to="/home/news">{{$t('lang.backV')}}</router-link>
    </div>
    <div>
      <div class="news-l">
        <strong>{{News.title}}</strong>
        <img :src="News.imgs">
      </div>
      <div class="news-r" v-html="News.content">{{News.content}}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "newsInfo",
  data() {
    return {
      id: "",
      NewsList: [],
      News: new Object()
    };
  },
  mounted() {
    this.$nextTick(function() {
      this.getDate();
      this.id = this.$route.params.id; //新闻id
      this.setHeights();
    });
  },
  methods: {
      setHeights(){
          var dom = this.$refs.contentDIV;
          dom.style.minHeight = (document.body.offsetHeight -360)+'px';
      },
    //获取数据
    getDate: function() {
      var OBJ;
      this.$http
        .get("/api/news", {
          params: {}
        })
        .then(response => {
          this.NewsList = response.data.data.data;
          OBJ = this.NewsList.filter(per => {
            if (per.newId == this.id) {
              return per;
            }
          });
          this.News = OBJ[0];
        })
        .catch(error => {
          console.log(error);
        });
    }
  } // method end
};
</script>
<style lang="scss">
.news {
  text-align: left;
  width: 1200px;
  margin: 10px auto;
  display: table;
  margin-bottom: 50px;
  .new-top {
    position: relative;
    span {
      font-size: 12px;
      color: #a5a7a7;
      margin: 30px 0 15px 0;
      display: inherit;
    }
    a {
      text-decoration: none;
      position: absolute;
      top: 0;
      right: 0;
      color: #ffffff;
      font-size: 16px;
      background: #f23e2d;
      padding: 5px 20px;
      border-radius: 3px;
    }
  }
  .news-l {
    display: table-cell;
    width: 35%;
    padding: 10px 60px 10px 0;
    border-right: 1px solid #dedcdc;

    img {
      width: 100%;
    }
    strong {
      font-size: 18px;
      display: block;
      margin-bottom: 20px;
    }
  }
  .news-r {
    display: table-cell;
    width: 65%;
    padding: 10px 0px 10px 60px;
    & > p {
      line-height: 30px;
    }
  }
}
</style>

