<template>
  <div id="home">
  	 
     <HeaderDiv></HeaderDiv>
     <!-- 对应的组件内容渲染到router-view中 -->
     <router-view></router-view>
     <FooterDiv></FooterDiv>
  </div>
</template>

<script>
	import HeaderDiv from '@/components/layout/header'
	import FooterDiv from '@/components/layout/footer'
	
export default {
  name: 'Home',
  data(){
  	return{
  		
  	}
  },
  methods:{
  	 
  },
  components:{
  	HeaderDiv,
  	FooterDiv
  }
}
</script>

<style>
.Contant {
    width: 1200px;
    margin: 10px auto;
    text-align: left;
    font-size: 14px;
}
</style>
