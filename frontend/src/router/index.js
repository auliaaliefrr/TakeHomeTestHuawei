import { createRouter, createWebHistory } from 'vue-router'
import LandingPageIndex from '../views/Page/LandingPage/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LandingPageIndex
    },
  ]
})


export default router
