<template>
  <div id="home">
    <HeaderDiv></HeaderDiv>
    <!-- 对应的组件内容渲染到router-view中 -->
    <router-view class="contentPart" :key="time"></router-view>
    <FooterDiv></FooterDiv>
  </div>
</template>

<script>
import HeaderDiv from "@/components/layout/header";
import FooterDiv from "@/components/layout/footer";

export default {
  name: "Home",
  data() {
    return {
      time: 1
    };
  },
  methods: {},
   
  components: {
    HeaderDiv,
    FooterDiv
  }
};
</script>

<style lang="scss">
body,
html,
#app {
  height: 100%;
}
div#home {
  min-height: 100%;
}
.Contant {
  width: 1200px;
  margin: 10px auto;
  text-align: left;
  font-size: 14px;
}
.contentPart {
}
</style>
