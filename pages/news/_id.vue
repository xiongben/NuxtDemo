<template>
  <div>
    <h2>news-content</h2>
    <p>newsId:{{$route.params.id}}</p>
    <ul>
      <li><a href="/news">news index</a></li>
    </ul>
  </div>
</template>

<script>
  export default {
    //参数效验
    validate({params}) {
      return /^\d+$/.test(params.id)
    }
  }
</script>
