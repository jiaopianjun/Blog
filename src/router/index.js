import Vue from 'vue'
import Router from 'vue-router'
import Post from '@/components/admin/Post'
import Admin from '@/components/admin/Admin'
import Entrance from '@/components/web/Entrance'
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
      component: Home,
      meta: {
        title: '首页',
        keepAlive: false
      }
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        title: '首页',
        keepAlive: false
      }
    },
    {
      path: '/Entrance',
      name: 'Entrance',
      component: Entrance,
      meta: {
        title: '首页',
        keepAlive: false
      }
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: {
        title: '首页',
        keepAlive: false
      }
    },
    {
      path: '/article/:articleId', //文章页面
      name: 'article',
      component: Article,
      meta: {
        title: '首页',
        keepAlive: false
      }
    },
    {
      path: '/tags/:tagsId', // tags 标签列表
      name: 'tags',
      component: List,
      meta: {
        title: '首页',
        keepAlive: false
      }
    },
    {
      path: '/label/:labelId', // label 项目列表
      name: 'label',
      component: List,
      meta: {
        title: '首页',
        keepAlive: false
      }
    },
    {
      path: '/admin/post',
      name: 'post',
      component: Post,
      meta: {
        title: '首页',
        keepAlive: false
      }
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
      meta: {
        title: '首页',
        keepAlive: false
      }
    }
  ]
})

