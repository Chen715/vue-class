import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

//change
import Layout from '@/views/Layout/index.vue'
import Login from '@/views/Login/index.vue'

import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  // path和component对应关系的位置
  routes: [
    {
      path: '/',
      component: Layout,
      children:[
        {
          path:'',
          component:Home
        },
        {
          path:'/category',
          component:Category
        }
      ]
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login,
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
