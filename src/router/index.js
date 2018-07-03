import Vue from 'vue'
import Router from 'vue-router'
import Post from '@/components/admin/Post'
import Admin from '@/components/admin/Admin'
import Label from '@/components/web/Label'
import About from '@/components/web/About'
import Home from '@/components/web/Home'
import Article from '@/components/web/Article'
import List from '@/components/web/List'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  // hashbang: false,
  // history: false,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/home/article',
      name: 'article',
      component: Article
    },
    {
      path: '/home/list',
      name: 'list',
      component: List
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/label',
      name: 'label',
      component: Label
    },
    {
      path: '/about',
      name: 'about',
      component: About
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
