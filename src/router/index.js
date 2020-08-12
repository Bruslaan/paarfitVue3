import { createRouter, createWebHistory } from 'vue-router'
// there is also createWebHashHistory and createMemoryHistory
import blog from '../views/blog.vue'
import test from '../views/test.vue'
const routerHistory = createWebHistory()

const router = createRouter({
    history: routerHistory,
    routes: [
      {
        path: '/',
        component: blog
      },
      {
        path: '/test',
        component: test
      }
    ]
  })

  export default router