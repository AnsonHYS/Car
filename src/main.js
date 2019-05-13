// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css' 
import VueI18n from 'vue-i18n'
import Cookies from 'js-cookie'
import LangStorage from '@/com/lang'


Vue.use(ElementUI)
Vue.prototype.$http=axios
Vue.config.productionTip = false

//国际化
Vue.use(VueI18n) // 通过插件的形式挂载
const i18n = new VueI18n({
    
    locale: LangStorage.getLang('zh-CN'),  // 获取用户习惯或初始值
    //this.$i18n.locale // 通过切换locale的值来实现语言切换
    messages: {
      'zh-CN': require('./com/lang/zh'),   // 中文语言包
      'en-US': require('./com/lang/en')    // 英文语言包
    }
})
 

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,//路由
  i18n,//国际化组件
  components: { App },
  template: '<App/>'
})
