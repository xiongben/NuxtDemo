<template>
  <div>
    <h1>this is nuxt demo!</h1>
    <ul>
      <li><nuxt-link :to="{name:'index'}">home</nuxt-link></li>
      <li><nuxt-link :to="{name:'about'}">about</nuxt-link></li>
      <li><nuxt-link :to="{name:'news',params:{newsId:3306}}">news</nuxt-link></li>
      <li><nuxt-link :to="{name:'list'}">List Page</nuxt-link></li>
      <li><nuxt-link :to="{name:'article'}">article Page</nuxt-link></li>
    </ul>
    <TestButton/>
  </div>
</template>

<script>
// import TestButton from "@/components/TestButton"

export default {
  // components: {
  //   TestButton
  // }

}
</script>

<style>

</style>

