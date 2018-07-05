<template>
  <div class="post" id="post">
    <router-link :to="{name:'admin', params: {}}">返回管理页面</router-link>
    <mavon-editor :ishljs = "true"></mavon-editor>
  </div>
</template>

<script>
export default {
  name: 'post',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>

</style>
