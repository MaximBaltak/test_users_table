import Vue from 'vue'
import Vuex from 'vuex'
import usersModule from '@/store/modules/UsersModule'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    users: usersModule
  }
})
