import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/pSU_HomeView.vue'
import OrderView from '../pages/pSU_OrderView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/order',
    name: 'order',
    component: OrderView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
