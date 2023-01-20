import { createRouter, createWebHistory } from 'vue-router'

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
    redirect:'/dashboard',
    component: () => import('@/views/dashboard/index')
  },
  {
    path: '/dashboard',
    component: () => import('@/views/dashboard/index')
  },
  {
    path:'/musiclistdetail',
    component:()=> import('@/views/dashboard/components/MusicListDetail')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
