// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { menu } from '@/router/index.js'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueI18n from 'vue-i18n'
import Cookies from 'js-cookie'
import LangStorage from '@/com/lang'
import store from './store/index'; //引入


Vue.use(ElementUI)
Vue.prototype.$http = axios
Vue.config.productionTip = false

//登录校验
router.beforeEach((to, from, next) => {
     
  if (store.getters.role) { //判断role 是否存在
    console.log("身份："+store.getters.role+" / 目录：");
    console.log(store.getters.router);
    
    if (store.getters.router.length !== 0) {
      next();
    } else {
      let newrouter
      if (store.getters.role == 'admin') {  //判断权限
        console.log("admin目录：");
        console.log(menu);
        newrouter = menu
      } else {
        
        let newchildren = menu[0].children.filter(route => {
          if (route.meta) {
            if (route.meta.role == store.getters.role) {
              return true
            } else
              return false
          } else {
            return true
          }
        });
        console.log('menu');
        console.log(menu);
        newrouter = menu;
        newrouter[0].children = newchildren;
      }

      console.log(newrouter);
      router.addRoutes(newrouter); //添加动态路由

      store.dispatch('Routers', newrouter).then(res => {
        next({ ...to });
      }).catch(() => {

      })
    }
  } else {
    
    if (['/bg'].indexOf(to.path) === -1) {//白名單url
      next();
    } else {//权限目录
      next('/login')
    }
  }
})

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
  store,//vuex

  i18n,//国际化组件
  components: { App },
  template: '<App/>'
})
