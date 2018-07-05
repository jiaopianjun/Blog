<template>
  <div class="article " id="at">
    <div class="article-cont">
        <div class="article-label">
           <router-link :to="{name:'label', params: {'labelId':'lableId'}}">
           <em>项目经验</em>
           </router-link>
        </div>
		<h3 class="article-title">代码如何编写的</h3>
		<div class="article-info">
           <div class="article-info-tags">
              <router-link :to="{name:'tags', params: {'tagsId':'tagsId'}}">VUE</router-link>
           </div>
           <span class="article-info-time">2018-06-06 周三</span>
		</div>
		<div class="article-markdown markdown-body">
            <div data-v-3c126c9b="" class="markdown-body content"><h2 id="-">前言</h2>
<p>之前的项目都是通过<a href="http://www.tdon.site/post/6">《一个域名下多个Vue.js项目的nginx配置》</a>来进行部署的。随着项目的增多，单个域名部署开始变得麻烦了，访问起来效果也不是很好。所以准备通过二级域名来进行项目部署，记录一下自己配置的过程。</p>
<h2 id="-">部署过程</h2>
<h4 id="1-">1. 阿里云配置域名解析</h4>
<p><img src="http://p508dzzc2.bkt.clouddn.com/nginx/nginx-domain.png" alt="nginx-domain"></p>
<h4 id="2-nginx-">2. nginx配置项目</h4>
<pre><code class="lang-nginx"><span class="hljs-keyword">http</span> {
    <span class="hljs-literal">include</span>       /etc/nginx/mime.types;
    default_type  application/octet-stream;

    log_format  <span class="hljs-keyword">main</span>  <span class="hljs-string">'<span class="hljs-variable">$remote_addr</span> - <span class="hljs-variable">$remote_user</span> [<span class="hljs-variable">$time_local</span>] "<span class="hljs-variable">$request</span>" '</span>
                      <span class="hljs-string">'<span class="hljs-variable">$status</span> <span class="hljs-variable">$body_bytes_sent</span> "<span class="hljs-variable">$http_referer</span>" '</span>
                      <span class="hljs-string">'"<span class="hljs-variable">$http_user_agent</span>" "<span class="hljs-variable">$http_x_forwarded_for</span>"'</span>;

    access_log  /var/log/nginx/access.log  <span class="hljs-keyword">main</span>;
    sendfile        on;
    keepalive_timeout  <span class="hljs-number">65</span>;

    upstream nuxtblog {
        server <span class="hljs-number">127.0</span>.<span class="hljs-number">0</span>.<span class="hljs-number">1</span>:<span class="hljs-number">3000</span>;
    }

    /*主域名配置*/
    <span class="hljs-keyword">server</span> {
        listen <span class="hljs-number">80</span>;
        server_name tdon.site;
        client_max_body_size <span class="hljs-number">2</span>M;

        location / {
            proxy_pass   http://nuxtblog;
            add_header <span class="hljs-string">'Access-Control-Allow-Origin'</span> <span class="hljs-string">'http://www.tdon.site'</span>;
            index  index.html index.htm;
        }

        /*省略其他配置*/
    }

    /*新增二级域名配置*/
    <span class="hljs-keyword">server</span> {
        listen <span class="hljs-number">80</span>;
        server_name music.tdon.site;

        location / {
            <span class="hljs-literal">root</span>   /<span class="hljs-literal">home</span>/don/tdonsite/listen-music;
            try_files <span class="hljs-variable">$uri</span> <span class="hljs-variable">$uri</span>/ @router;
            index  index.html index.htm;
        }

        <span class="hljs-keyword">location</span> @<span class="hljs-keyword">router</span> {
            rewrite ^.*$ /index.html last;
        }
    }
}
</code></pre>
</div> 
		</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'at',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>


<style scoped>
	@import './../../sass/stylesheets/article.css'
</style>
