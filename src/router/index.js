import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
    children: [
      {
        path: '/profile',
        name: 'ProfilePage',
        component: () => import('../views/ProfilePage.vue')
      },
      
    ]
  },
  {
    path: '/notifications',
    name: 'NotificationsPage',
    component: () => import('../views/NotificationsPage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
