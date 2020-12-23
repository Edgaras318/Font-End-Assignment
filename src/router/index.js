import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Work from '../views/Work'
import ViewWork from '../views/ViewWork'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    name: 'Work',
    component: Work
  },
  {
    path: '/view-work/:work_id',
    name: 'ViewWork',
    component: ViewWork
  }
]

const router = new VueRouter({
  routes,
  mode: 'history',
  base: process.env.BASE_URL,
})

export default router
