import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/layout/index'

const routes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    name:'login'
  },
  {
    path:'/login/phonecode',
    component:() => import('@/views/login/components/PhoneCode')
  },
  {
    path:'/login/inputcode',
    component:() => import('@/views/login/components/InputCode')
  },
  
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: '/dashboard',
      name: '首页',
      component: () => import('@/views/dashboard/index')
    }]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
