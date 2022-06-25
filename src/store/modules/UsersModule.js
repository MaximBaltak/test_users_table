import { getUsers } from '@/api/requests'

export default {
  state: {
    users: [],
    count: 10
  },
  actions: {
    get (ctx, count = 10) {
      ctx.commit('setCount', count)
      const nextCountUsers = ctx.state.count
      const prevCountUsers = ctx.state.users.length
      let loadingCountUsers
      if (nextCountUsers > prevCountUsers) {
        loadingCountUsers = nextCountUsers - prevCountUsers
        getUsers(loadingCountUsers)
          .then(({ data }) => {
            ctx.commit('addUsers', data.results)
          })
          .catch(e => console.log(e))
      } else if (nextCountUsers < prevCountUsers) {
        loadingCountUsers = prevCountUsers - nextCountUsers
        ctx.commit('removeUsers', loadingCountUsers)
      }
    }
  },
  mutations: {
    addUsers (state, users) {
      state.users.push(...users)
    },
    setCount (state, count) {
      state.count = count
    },
    removeUsers (state, count) {
      let i = 0
      while (i <= count) {
        state.users.pop()
        i++
      }
    }
  },
  getters: {
    getUserId: state => id => {
      return state.users.find(user => user.id.value === id)
    }
  }
}
