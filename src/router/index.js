import { createRouter, createWebHistory } from 'vue-router'
import homeView from '../pages/pSU_homeView.vue'
import orderView from '../pages/pSU_orderView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: homeView
  },
  {
    path: '/order',
    name: 'order',
    component: orderView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
