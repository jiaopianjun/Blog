<template>
  <header class="head" id="hd">
    <div class="hd-nav" :class="{'hd-nav-fixed': isscroll}">
      <section class="hd-nav-container">
        <div class="hd-icon cur fl">
          <span class="icon-img fl"></span>
          <span class="icon-name">故事胶片</span>
        </div>
        <span class="mobile-menu" @click="showmobielmenu">
          <img src="http://jiaopianjun.cc/assets/blogImg/hd.gif"/>
        </span>
        <div class="hd-center fl"></div>
        <div class="hd-search fr">
          <div class="hd-search-box fl">
             <input class="hd-search-input" type="text" placeholder="请输入搜索内容..." @blur="getText($event)" @keydown.enter="gosearch($event)"/>
             <label @click="closesearch($event)"></label>
          </div>
          <div class="hd-search-btn cur fr" @click="search()"></div>
        </div>
      </section>
    </div>
    <img class="hd-bg" src="../../../images/hdbg.jpg"/>
    <h3 class="animated  fadeInUp">The world is so big, I want to see</h3>
    <h4 class="animated  fadeInUp">世界那么大，我想去看看</h4>
  </header>
</template>

<script>
export default {
  name: 'hd',
  data () {
    return {
      searchText: '',
      show: false,
      oldsearchText: '',
      scrolled: false,
      isscroll: false,
      ispt: 'pc'
    }
  },
  ready () {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    showmobielmenu:function(){
      this.$store.commit('menustate',{status:true})
    },
    handleScroll () {
      this.scrolled = window.scrollY
      this.ispt = $(".app").attr('data-mobile')
      if (this.ispt === 'pc') {
        if (this.scrolled > 470) {
          this.isscroll = true
        } else {
          this.isscroll = false
        }
      } else {
        if (this.scrolled > 275) {
          this.isscroll = true
        } else {
          this.isscroll = false
        }
      }
    },
    getText: function ($event) {
      this.searchText = $event.target.value
    },
    search: function () {
      this.ispt = $(".app").attr('data-mobile')
      if (this.ispt === 'pc') {
        if (this.searchText === '' && this.show === false) {
          $('.hd-search-box').addClass('hd-pc-show')
          this.show = true
        } else if (this.searchText === '' && this.show === true) {
          $('.hd-search-box').removeClass('hd-pc-show')
          this.show = false
        } else {
          if (this.searchText !== this.oldsearchText) {
            this.oldsearchText = this.searchText
          }
        }
      } else {
        $('.hd-search-box').addClass('hd-mobile-show')
      }
    },
    closesearch: function ($event) {
      this.ispt = $(".app").attr('data-mobile')
      if (this.ispt === 'mobile') {
        $('.hd-search-box').removeClass('hd-mobile-show')
      }
    },
    gosearch: function ($event) {
      if ($event.target.value !== '' && $event.target.value !== this.oldsearchText) {
        console.log($event.target.value)
        this.oldsearchText = $event.target.value
      }
    }
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  mounted () {
  },
  created: function () {
    window.addEventListener('scroll', this.handleScroll)
  }
}
</script>

<style>
  @import './../../../sass/stylesheets/head.css'
</style>
