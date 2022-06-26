import { getUsers } from '@/api/requests'

export default {
  state: {
    users: [],
    count: 10,
    error: {
      isError: false,
      text: 'Ошибка получения данных'
    }
  },
  actions: {
    get (ctx, count = 10) {
      ctx.commit('setCount', count)
      const nextCountUsers = ctx.state.count
      const prevCountUsers = ctx.state.users.length
      let loadingCountUsers
      // расчитываем сколько нужно удалить либо подгрузить пользователей
      if (nextCountUsers > prevCountUsers) {
        ctx.commit('setLoader', true)
        loadingCountUsers = nextCountUsers - prevCountUsers
        getUsers(loadingCountUsers)
          .then(({ data }) => {
            ctx.commit('addUsers', data.results)
            ctx.commit('setError', false)
            ctx.commit('setLoader', false)
          })
          .catch(e => {
            console.log(e)
            ctx.commit('setError', true)
            ctx.commit('setLoader', false)
          })
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
    },
    setError (state, isError) {
      state.error.isError = isError
    }
  },
  getters: {
    getUserId: state => id => {
      return state.users.find(user => user.id.value === id)
    }
  }
}
