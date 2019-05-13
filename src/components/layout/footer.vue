<template>
  <div class="footer">
    <ul class="f-ul">
      <li v-for="(L,i) in navs" :key="i">
        <span @click="goPage(L.url)">{{L.key}}</span>
      </li>
    </ul>
    <p>{{$t('lang.FOOTER.telV')}}：13424267646&nbsp;&nbsp; Copyright    {{$t('lang.AuthorV')}}  © 2019 &nbsp;&nbsp;{{$t('lang.FOOTER.productV')}}：20190510</p>
    
  </div>
</template>
 
<script>
 
export default {
  name: "FooterDiv",
  data() {
    return {
      navs: []
    };
  },
  methods: {
    goPage: function(url) {
      console.log(url);
    }
  }
};
</script>

<style>
.footer {
 position: absolute;
    border-top: 1px solid whitesmoke;
    padding-bottom: 10px;
    width: 100%;
    bottom: 0px;
    background: black;
    clear: both;
    color: white;
   
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