import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Jecminek from '../views/Jecminek.vue';
import Jecminek2 from '../views/Jecminek2.vue';
import Agape from '../views/Agape.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/jecminek',
    name: 'Jecminek',
    component: Jecminek
  },
  {
    path: '/jecminek2',
    name: 'Jecminek2',
    component: Jecminek2
  },
  {
    path: '/agape',
    name: 'Agape',
    component: Agape
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
