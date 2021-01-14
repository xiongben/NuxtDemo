<template>
  <div class="box">
    test button component box
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        <input :checked="todo.done" type="checkbox" @change="toggle(todo)">
        <span :class="{ done: todo.done }">
          {{ todo }}
        </span>
      </li>
    </ul>
  </div>
</template>
<script>
  import {mapGetters} from "vuex";

  export default {
    computed: mapGetters({
      todos: 'todos/todos',
    }),
    watch:{
      todos:function (newData, oldData){
        console.log(newData);
      }
    }
  }
</script>
<style scoped>
  .box{
    width: 100%;
    /*height: 100px;*/
    background: blue;
  }
</style>
