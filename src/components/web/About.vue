<template>
	<div class="about" id="about">
		<p><icon name="about" :w="30" :h="30" class="icon"></icon>关于</p>
    <div class="about-cont">
      <div class="me markdown-body">
        😄😄😄 &nbsp;&nbsp;&nbsp;喜欢篮球，摄影，旅游，新鲜事物的前端小白菜
      </div>
      <div class="yy">—— 落叶他乡树，寒灯独叶人</div>
      <p class="title">蓦然回首，我就在这里</p>
      <div class="contact">
         <a class="weixin" title="微信"></a>
         <a class="wxpb" title="微信公众平台：故事胶片"></a>
         <a class="qq" title="qq" href="tencent://AddContact/?fromId=50&fromSubId=1&subcmd=all&uin=709420995" target="_blank"></a>
         <a class="ins" title="ins" href="https://www.instagram.com/jiaopianjun/" target="_blank"></a>
         <a class="nice" title="nice" href="http://www.oneniceapp.com/user/6383514" target="_blank"></a>
         <a class="email" title="email" href="mailto:cuixinjob@126.com" target="_blank"></a>
      </div>
    </div>
	</div>
</template>

<script>
export default {
  name: 'about',
  components: {

  },
  data () {
    return {
      a: false
    }
  },
  methods: {

  },
  mounted () {
    document.body.addEventListener('touchstart', function(){ });
  },
  created: function () {
    
  }
}
</script>
<style scoped>
  @import './../../sass/stylesheets/about.css'
</style>
