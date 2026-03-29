import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/HomePage.vue'
import Product from '@/views/ProductsPage.vue'
import About from '@/views/AboutPage.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/products', component: Product },
  { path: '/about', component: About },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        top: 100,
      }
    }

    if (savedPosition) {
      return savedPosition
    }

    return { top: 0 } 
  }
})

export default router