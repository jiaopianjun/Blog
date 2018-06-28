<template>
	<div>
		<Hd></Hd>
		<div class="container">
		   <User></User>
		</div>
		<Footer></Footer>
	</div>
</template>

<script>
import Hd from './moudle/Hd.vue'
import GoTop from './moudle/GoTop.vue'
import Footer from './moudle/Footer.vue'
import User from './moudle/User.vue'
export default {
  name: 'index',
  components: {
    Hd: Hd,
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
<style scoped>
  @import './../../sass/stylesheets/index.css'
</style>
