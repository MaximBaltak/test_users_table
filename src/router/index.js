import Vue from 'vue'
import VueRouter from 'vue-router'
import MainComponent from '@/pages/MainComponent'
import UserComponent from '@/pages/UserComponent'

Vue.use(VueRouter)

const routes = [
  { path: '', component: MainComponent, name: 'main' },
  { path: '/:id', component: UserComponent, name: 'user' }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
