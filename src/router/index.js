import { createRouter, createWebHistory } from 'vue-router'
// there is also createWebHashHistory and createMemoryHistory
import blog from '../views/blog.vue'
import profile from '../views/profile.vue'
import training from '../views/training.vue'
import startWorkout from '../views/startWorkout.vue'
const routerHistory = createWebHistory()

const router = createRouter({
    history: routerHistory,
    routes: [
      {
        path: '/',
        component: blog
      },
      {
        path: '/profile',
        component: profile
      },
      {
        path: '/training',
        component: training
      },
      {
        path: '/start_workout',
        component: startWorkout
      }
    ]
  })

  export default router