import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Post from '@/components/admin/Post'
import Admin from '@/components/admin/Admin'


Vue.use(Router)

export default new Router({
  // mode: 'history',
  // hashbang: false,
  // history: false,
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/home',
      name: 'index',
      component: Index
    },
    {
      path: '/admin/post',
      name: 'post',
      component: Post
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin
    }
  ]
})
