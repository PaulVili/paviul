import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: () => import('../views/HomePage.vue')    
  },
  {
    path: '/notifications',
    name: 'NotificationsPage',
    component: () => import('../views/NotificationsPage.vue')
  },
  {
    path: '/profile',
    name: 'ProfilePage',
    component: () => import('../views/ProfilePage.vue')
  },
  {
    path: '/activity',
    name: 'ActivityPage',
    component: () => import('../views/ActivityPage.vue')
  },
  {
    path: '/settings',
    name: 'SettingsPage',
    component: () => import('../views/SettingsPage.vue')
  },
  {
    path: '/balance',
    name: 'MarketPlaceBalancePage',
    component: () => import('../views/MarketPlaceBalancePage.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
