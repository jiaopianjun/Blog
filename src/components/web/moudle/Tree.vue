<template>
  <nav class="menu" id="navmenu" :class="{'menufix': isscroll}">
    <ul>
       <li class="cur current">
	       <icon name="home" :w="25" :h="25" class="icon"></icon>
	       <icon name="home_h" :w="25" :h="25" class="icon_h"></icon>
      	   Home
       </li>
       <li class="cur">
	       <icon name="label" :w="25" :h="25" class="icon"></icon>
	       <icon name="label_h" :w="25" :h="25" class="icon_h"></icon>
	       Label
       </li>
       <li class="cur">
	       <icon name="about" :w="25" :h="25" class="icon"></icon>
	       <icon name="about_h" :w="25" :h="25" class="icon_h"></icon>
	       About
       </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'navmenu',
  data () {
    return {
      scrolled: false,
      scrolled: false,
      isscroll: false,
      ispt: 'pc'
    }
  },
  ready () {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods:{
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

<style scoped>
  @import './../../../sass/stylesheets/nav.css'
</style>
