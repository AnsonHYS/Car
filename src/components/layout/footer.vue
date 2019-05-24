<template>
  <div class="footer">
    <ul class="f-ul">
      <li v-for="(L,i) in navs" :key="i">
        <span @click="goPage(L.url)">{{Language(L.key)}}</span>
      </li>
    </ul>
    <!-- 底部帮助 -->
    <div class="clear footer_help">
      <div class="clear footer_container">
        <div class="clear pull-left">
          <p class="tab-title">{{$t('lang.FOOTER.deliverTypeV')}}</p>
          <ul class="clear full-ul">
            <li class="full-li">{{$t('lang.FOOTER.takeV')}}</li>
            <li class="full-li">{{$t('lang.FOOTER.deliveryServerV')}}</li>
            <li class="full-li">{{$t('lang.FOOTER.outDeliveryV')}}</li>
          </ul>
        </div>
        <div class="clear pull-left">
          <p class="tab-title">{{$t('lang.FOOTER.payTypeV')}}</p>
          <ul class="clear full-ul">
            <li class="full-li">{{$t('lang.FOOTER.cashPayV')}}</li>
            <li class="full-li">{{$t('lang.FOOTER.onlinePayV')}}</li>
          </ul>
        </div>
        <div class="clear pull-left">
          <p class="tab-title">{{$t('lang.FOOTER.afterSalesV')}}</p>
          <ul class="clear full-ul">
            <li class="full-li">{{$t('lang.FOOTER.policyV')}}</li>
            <li class="full-li">{{$t('lang.FOOTER.repareV')}}</li>
            <li class="full-li">{{$t('lang.FOOTER.cancelV')}}</li>
          </ul>
        </div>
      </div>
    </div>
    <p>{{$t('lang.FOOTER.telV')}}：13424267646&nbsp;&nbsp; Copyright {{$t('lang.AuthorV')}} © 2019 &nbsp;&nbsp;{{$t('lang.FOOTER.productV')}}：20190510</p>
  </div>
</template>
 
<script>
export default {
  name: "FooterDiv",
  data() {
    return {
      navs: [
         { key: "homeV", url: "/home/index" },
        { key: "productV", url: "" },
        { key: "aboutV", url: "" },
        { key: "newsV", url: "/home/news" },
        { key: "contantV", url: "" }
       
      ]
    };
  },
  methods: {
    goPage: function(url) {
      console.log(url);
    },
    Language: function(key) {
      this.$i18n.locale;
      let str = "lang." + key;
      return this.$t(str);
    },
  }
};
</script>

<style>
.footer {
  border-top: 1px solid whitesmoke;
  padding-bottom: 10px;
  width: 100%;
  bottom: 0px;
  background: black;
  clear: both;
  color: white;
}
/*帮助功能*/
.clear.footer_help {
    background: #464646;
    padding: 20px;
    margin-bottom: 20px;
}

.footer_container {
    width: 1200px;
    margin: auto;
}
.pull-left {
    display: inline-block;
    width: 33%;
    vertical-align: top;
}
p.tab-title {
    font-size: 15px;
    font-weight: bold;
    font-family: 微軟雅黑;
}
li.full-li {
    list-style: none;
    font-size: 12px;
    margin: 5px;
    color: #b3b3b3;
    cursor: pointer;
}
.full-li:hover{
    color: #ef8e8e;
}
.f-ul {
  width: 1200px;
  list-style: none;
  margin: 10px auto;
}

ul.f-ul li {
  display: inline-block;
  cursor: pointer;
  vertical-align: bottom;
  border-right: 1px solid #cecece;
}
ul.f-ul li :hover {
  color: #39b3e1;
}
ul.f-ul li:last-child {
  border-right: none;
}
ul.f-ul li > span {
  margin: 10px;
  vertical-align: bottom;
}
</style>