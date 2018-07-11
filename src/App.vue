<template>
  <div class="app" id="app" :data-mobile="ismobile" :class="ismobile">
  <div class="index web mobile">
     <Hd></Hd>
     <div class="container">
       <User></User>
       <keep-alive>
          <router-view :key="key"></router-view>
       </keep-alive>
      </div>
      <Footer></Footer>
  </div>
  </div>
</template>

<script>
import Hd from './components/web/moudle/Hd.vue'
import GoTop from './components/web/moudle/GoTop.vue'
import Footer from './components/web/moudle/Footer.vue'
import User from './components/web/moudle/User.vue'
export default {
  name: 'app',
  components: {
    Hd: Hd,
    GoTop: GoTop,
    Footer: Footer,
    User: User,
  },
  computed: {
    key () {
      return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date()
    }
  },
  data () {
    return {
      ismobile: false,
      myWidth: (window.innerWidth - 500) + 'px'
    }
  },
  methods: {
    myBrowser: function () {
      var userAgentInfo = navigator.userAgent
      var Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPod','iPad','Macintosh']
      var flag = true
      for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
          flag = false
          break
        }
      }
      if(window.orientation == 0 || window.orientation == 180 ) {
        if(window.screen.width <= 768){
          flag = false
        }else{
          flag = true
        }
      }else {
       if(window.screen.width >= 768){
          flag = true
        }else{
          flag = false
        }
      }
      return flag
    }
  },
  mounted () {
    var _this = this
    window.onresize = function windowResize () {
      if (window.innerWidth !== _this.myWidth) {
        var mb = _this.myBrowser()
        if (mb) {
          _this.ismobile = 'pc'
        } else {
          _this.ismobile = 'mobile'
        }
        _this.myWidth = (window.innerWidth - 500) + 'px'
      }
    }
  },
  created: function () {
    var mb = this.myBrowser()
    if (mb) {
      this.ismobile = 'pc'
    } else {
      this.ismobile = 'mobile'
    }
  }
}
</script>

<style>
  @import 'sass/stylesheets/reset.css'
</style>
