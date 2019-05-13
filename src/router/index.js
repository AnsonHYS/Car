import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

// 页面组件 webpackChunkName 注释可以友好化分包的名称 需 webpack 2.4+
// 使用 require + resolve 可以获得更好的通用性 但不支持 webpackChunkName 注解 用 id 做感觉可读性不好
// const HELLO    = () => import( /* webpackChunkName: "index" */ '@/components/HelloWorld');
export default new Router({
  mode: 'history',
  routes: [{
      path: "/home",
      component: () => import('@/page/home.vue'),
      children: [ //子路由
        {
          path: "index",
          component: () => import('@/page/visitor/index.vue')
        },

      ]
    },
    { // 重定向
      path: '/',
      redirect: '/home/index'
    },
  ]
})

// export default new Router({
//   mode: 'history',
//   routes: [{
//     path: '/',
//     name: 'HelloWorld',
//     component: resolve => require(['@/components/HelloWorld'], resolve)

//   }]
// })

// 
