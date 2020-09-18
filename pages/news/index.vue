<template>
  <div>
    <h2>news index page</h2>
    <p>newsid:{{$route.params.newsId}}</p>
    <ul>
      <li><a href="/">home</a></li>
      <li><nuxt-link :to="{name:'news-id',params:{id:111}}">news1</nuxt-link></li>
      <li><nuxt-link :to="{name:'news-id',params:{id:222}}">news2</nuxt-link></li>
      <li><a href="/news/333fff">news3</a></li>
    </ul>
  </div>
</template>
