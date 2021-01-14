export const state = () => ({
  list: [
    'Lorem ipsum',
    'dolor sit amet',
    'consetetur sadipscing elitr'
  ]
})

export const mutations = {
  add (state, title) {
    state.list.push("66666")
  }
}

export const getters = {
  get1 (state) {
    return state.list
  }
}
