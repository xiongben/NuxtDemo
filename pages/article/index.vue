<template>
  <div class="box">


    <TestButton/>
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        <input :checked="todo.done" type="checkbox" @change="toggle(todo)">
        <span :class="{ done: todo.done }">
          {{ todo }}
        </span>
      </li>
      <li><input placeholder="What needs to be done?" @keyup.enter="addTodo"></li>
      <p>====</p>
      <button @click="$store.commit('increment')">
        {{ $store.state.counter }}
      </button><br>
      <p>======</p>
      <ul>
        <li v-for="(article, index) in articles" :key="index">
          <span>{{ article }}</span>
        </li>
      </ul>
      <h2>Comments <small>(nested under articles)</small></h2>
      <ul>
        <li v-for="(comment, index) in comments" :key="index">
          <span>{{ comment }}</span>
        </li>
      </ul>
    </ul>
    <button @click="$store.commit('article/add')">
      add article
    </button><br>
    <ul>
      <li><a href="/">home</a></li>
    </ul>
  </div>
</template>

<script>
import {mapMutations, mapGetters} from 'vuex';
export default {
  // components: {
  //   TestButton
  // }
  name: "Article",
  computed: mapGetters({
    todos: 'todos/todos',
    articles: 'article/get1',
    comments: 'article/get1'
  }),
  methods:{
    addTodo(e){
      const text = e.target.value
      if (text.trim()) {
        this.$store.commit('todos/add', { text })
      }
      e.target.value = ''
    },
    ...mapMutations({
      toggle: 'todos/toggle'
    })
  },
  watch: {
    todos(newData, oldData){
      // console.log(newData);
    }
  }
}
</script>

<style scoped>
.box{
  width: 100%;
  background: aliceblue;
}
.head{
  width: 3.75rem;
  height: 0.5rem;
  line-height: 0.5rem;
  text-align: center;
  background: #35495e;
  color: #fff;
}
</style>
