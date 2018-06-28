<template>
  <div class="index web mobile">
    <Hd></Hd>
    <div class="container">
       <User></User>
       <!-- <Tree></Tree> -->
       <Post></Post>
<!--        <Label></Label>
       <List></List>
       <Article></Article>
       <About></About>
       <Search></Search> -->
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Hd from './web/moudle/Hd.vue'
import Tree from './web/moudle/Tree.vue'
import Post from './web/moudle/Post.vue'
import GoTop from './web/moudle/GoTop.vue'
import Footer from './web/moudle/Footer.vue'
import User from './web/moudle/User.vue'
import About from './web/About.vue'
import Article from './web/Article.vue'
import Label from './web/Label.vue'
import List from './web/List.vue'
import Search from './web/Search.vue'
export default {
  name: 'index',
  components: {
    Hd: Hd,
    Tree: Tree,
    Post: Post,
    GoTop: GoTop,
    Footer: Footer,
    User: User,
    About: About,
    Article: Article,
    Label: Label,
    List: List,
    Search: Search
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
  @import './../sass/stylesheets/index.css'
</style>
