<template>
  <div>
    <h2 v-if="error.statusCode == 404">This is 404 page!wow</h2>
    <h2 v-else>This is 500 error!</h2>
  </div>
</template>

<script>
export default {
  props:['error']
}
</script>
