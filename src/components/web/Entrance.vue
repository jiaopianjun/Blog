<template>
   <div class="label" id="label">
       <div class="label-cont">
          <p class="title">
             <icon name="label" :w="30" :h="30" class="icon"></icon>归类
          </p>
          <div class="label-section">
            <div class="label-project">
               <h4>Label</h4>
               <div class="label-box">
                  <router-link :to="{name:'label', params: {'labelId':'lableId'}}" class="s-ts">前端(123)</router-link>
               </div>
            </div>
            <div class="label-tags">
               <h4>Tags</h4>
               <div class="label-box">
                  <router-link :to="{name:'tags', params: {'tagsId':'tagsId'}}" class="s-ts">前端嗄嘎达萨嘎(123)</router-link>
               </div>
            </div>
            <div class="label-timeline">
                <h4>Timeline</h4>
                <div class="label-box">
                   <div class="label-line">
                     <p class="line-date">2018-06 (12)</p>
                     <ul class="line-list">
                       <li>
                          <router-link :to="{name:'article', params: {'articleId':'articleId'}}"  class="text-ellipsisl">nginx使用二级域名配置多个项目2018-06-27</router-link>
                          <em>2018-06-05</em>
                       </li>
                     </ul>
                   </div>
                </div>
            </div>
          </div>
       </div>
   </div>
</template>

<script>
export default {
  name: 'label4',
  components: {
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
  @import './../../sass/stylesheets/Entrance.css'
</style>
