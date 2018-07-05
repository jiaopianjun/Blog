<template>
  <div class="list" id="list">
    <p class="list-title" :class="{'list-tag':istype === false, 'list-label':istype === true}">
      <icon name="label" :w="26" :h="26" class="icon label"></icon>
      <icon name="tags" :w="30" :h="30" class="icon tags"></icon>
      Vue.js
    </p>
    <div class="list-content">
      <div class="list-section color-g">
        <div class="list-section-banner">
           <img src="./../../images/hdbg2.jpg"/>
        </div>
        <div class="list-section-title cur">
          <router-link :to="{name:'article', params: {'articleId':'articleId'}}" class="a text-ellipsisl">基于Vue开发的点对点聊天系统</router-link>
          <div class="title-label fr" title="项目分类">
             <router-link title="项目开发" :to="{name:'label', params: {'labelId':'labelId'}}" >项目开发</router-link>
             <div class="list-section-info-time fr">2018-09-11</div>
          </div>
        </div>
        <div class="list-section-markdown more-ellipsisl markdown-body">
          每次都说时间就像手中的沙，不知不觉间就悄悄的流走了。你没有一点点感觉，想抓也抓不住，任它溜走。留下的只是回忆还有一段段记忆。
          今天是2017的最后一天，明天就是2018了。
          脑海中回忆去年的这个时候，如同昨日，历历在目，感觉一切好像刚过去，可是不知不觉已经一年了。
          一年过的很快，快的让我们一直以为时间过的很慢，时间很长。总会以还早呢，时间还多呢，今天才几号  几号 ，还早呢，还有明天呢 等来搪塞，给自己一个懒惰的借口。
        </div>
        <div class="list-section-info clearfix">
          <div class="list-section-info-tag fl">
            <router-link title="项目开发" :to="{name:'tags', params: {'tagsId':'tagsId'}}" class="article-tag-list-item">Javascript</router-link>
            <router-link title="项目开发" :to="{name:'tags', params: {'tagsId':'tagsId'}}" class="article-tag-list-item">日记</router-link>
            <router-link title="项目开发" :to="{name:'tags', params: {'tagsId':'tagsId'}}" class="article-tag-list-item">Vue</router-link>
          </div>
          <div class="list-section-info-time fr">2018-09-11</div>
        </div>
      </div>
    </div>
    <div class="list-loading">
      <span class="list-loading-more cur" v-if="loadmore" @click="more">加载更多</span>
      <span class="list-loading-text" v-if="!loadmore && !loading">没有了...</span>
      <div class="loading" v-if="loading">
          <div><span></span></div>
          <div><span></span></div>
          <div><span></span></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'list',
	  data () {
	    return {
	      loading: false,
	      loadmore: true,
	      istype:false
	    }
	  },
	  methods: {
	    more:function(){
	      var _this = this
	      _this.loadmore = false
	      _this.loading = true
	      setTimeout(function(){
	        _this.loadmore = true
	        _this.loading = false
	      },1000)
	    }
	  },
	  destroyed () {
	  },
	  mounted () {
	  },
	  created: function () {
	  	var str = this.$route.path
	    if(str.indexOf('tags') != -1){
	      this.istype = false
	    }else{
	      this.istype = true
	    }
	  }
}
</script>

<style scoped>
  @import './../../sass/stylesheets/list.css'
</style>
