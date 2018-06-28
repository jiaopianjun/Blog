<template>
  <div>
    <Hd></Hd>
    <div class="container">
       <User></User>
       <Post></Post>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Hd from './web/moudle/Hd.vue'
import Post from './web/moudle/Post.vue'
import GoTop from './web/moudle/GoTop.vue'
import Footer from './web/moudle/Footer.vue'
import User from './web/moudle/User.vue'
export default {
  name: 'index',
  components: {
    Hd: Hd,
    Post: Post,
    GoTop: GoTop,
    Footer: Footer,
    User: User,
  },
  // computed: {
  // },
  data () {
    return {
      a: false
    }
  },
  methods: {

  },
  mounted () {
  },
  created: function () {

  }
}
</script>
<style>
  @import './../sass/stylesheets/index.css'
</style>
