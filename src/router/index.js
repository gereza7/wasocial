import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Chatgeneral from '../views/Chatgeneral.vue'

const routes = [
  {
    path: '/chatgeneral',
    redirect: '/'
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/'
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/chatgeneral',
    name: 'Chatgeneral',
    component: Chatgeneral,

  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})



export default router

