export default {
  toggle (state, todo) {
    todo.done = !todo.done
  },
  add (state, { text }) {
    state.list.push({
      text,
      done: false
    })
  },
}
