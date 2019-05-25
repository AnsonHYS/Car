import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export const menu = [{
  path: "/bg", redirect: '/bg/menu1', name: 'bgindex', component: () => import('@/page/bg/bgindex.vue'),
  children: [

    { path: 'menu1', name: '目录1(user/admin)', meta: { role: 'user' }, component: () => import('@/page/bg/menu1.vue') },
    { path: 'menu2', name: '目录2(admin)', meta: { role: 'admin' }, component: () => import('@/page/bg/menu2.vue') },
    { path: 'menu3', name: '目录3(admin)', meta: { role: 'admin' }, component: () => import('@/page/bg/menu3.vue') }
  ]
}]

const visit = [{
  path: "/home",
  redirect: '/home/index',
  component: () => import('@/page/home.vue'),
  children: [ //子路由
    {
      path: "index",
      component: () => import('@/page/visitor/index.vue')
    },
    {
      path: "news",
      component: () => import('@/page/visitor/newsList.vue')
    },
    {
      path: "car/:id",
      component: () => import('@/page/visitor/carPage.vue')
    },
    {
      path: "news/:id",
      component: () => import('@/page/visitor/newsDetail.vue')
    },

  ]
},
{
  path: "/login",
  component: () => import('@/page/login/login.vue')
},

]




const router = new Router({
  mode: 'history',
  routes: [
    { // 重定向
      path: '/',
      redirect: '/home/index'
    },
    ...menu,
    ...visit,

  ]
});

export default router
