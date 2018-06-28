import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'
import vuex from 'vuex'
import { hybrid } from './until/inside'
import mavonEditor from 'mavon-editor' // markdown编辑器
import 'mavon-editor/dist/css/index.css'
import Icon from 'vue2-svg-icon/Icon.vue'
import animate from 'animate.css'
import githubmarkdowncss from 'github-markdown-css/github-markdown.css'


Vue.component('icon', Icon)

// Vue.use(vuex)

Vue.prototype.$hybrid = hybrid  
Vue.use(VueAxios, axios)
Vue.use(mavonEditor)
import {post,fetch,patch,put} from './until/axios'

//定义全局变量
Vue.prototype.$post = post
Vue.prototype.$fetch = fetch
Vue.prototype.$patch = patch
Vue.prototype.$put = put

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
