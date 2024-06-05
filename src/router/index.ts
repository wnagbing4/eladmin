import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '',
      redirect:'/login'
      // component: ()=>import('@/views/login/Login.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/Login.vue')
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: () => import('../views/common/Dashboard.vue'),
      resirect:'/home',
      children:[
        {
          path:'/home',
          name:'home',
          component:()=>import('../views/sys/home/Home.vue')
        },
        {
          path:'/user',
          name:'user',
          component:()=>import('../views/sys/user/Use.vue')
        }
      ]
    }
    // {
    //   path: '/menu',
    //   name: 'menu',
    //   // redirect: '/HomePage',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/menu/MenuList.vue')
    // }
  ]
})

export default router
