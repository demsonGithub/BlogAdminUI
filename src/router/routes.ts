import { RouteRecordRaw } from 'vue-router'
import Layout from '@/components/HelloWorld.vue'

export const constantRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Login',
    // component: () => import('../views/Login/index.vue')
    component: Layout
  }
]
