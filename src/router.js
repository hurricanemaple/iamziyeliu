import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/Layout'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: '/home',
      children: [
        {
          path: 'home',
          name: 'Home',
          component: () => import('@/views/Home')
        },
        {
          path: 'portfolio',
          name: 'Portfolio',
          component: () => import('@/views/Portfolio')
        },
        {
          path: 'words',
          name: 'Words',
          component: () => import('@/views/Words')
        },
        {
          path: 'words/:id',
          name: 'Content',
          component: () => import('@/views/Words/content')
        },
        {
          path: 'videos',
          name: 'Videos',
          component: () => import('@/views/Videos')
        },
        {
          path: 'about',
          name: 'About',
          component: () => import('@/views/About')
        }
      ]
    }
  ]
})
