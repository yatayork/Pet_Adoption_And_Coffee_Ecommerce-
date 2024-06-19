import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AdoptView from '../views/AdoptView.vue'
import AboutView from '../views/AboutView.vue'
import ShoppingView from '../views/ShoppingView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/',
      name: 'adopt',
      component: AdoptView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/shopping',
      name: 'shopping',
      component: ShoppingView
    }
  ]
})

export default router
