import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import LandingView from '../views/LandingView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LandingView
    },
    {
      path: '/productView',
      name: 'Product',
      component: () => import('../views/ProductView.vue')
    },
    {
      path: '/shopView',
      name: 'Shop',
      component: () => import('../views/ShopView.vue')
    },
    {
      path: '/registerView',
      name: 'Register',
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/LoginView',
      name: 'Login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/checkoutView',
      name: 'Checkout',
      component: () => import('../views/CheckoutView.vue')
    },
    {
      path: '/accountView',
      name: 'Account',
      component: () => import('../views/AccountView.vue'),
      children: [
        {
          path: '/accountView/',
          name: 'Manage Account',
          component: () => import('../components/ManageAccount.vue')
        },
        {
          path: '/accountView/profileView',
          name: 'Profile',
          component: () => import('../components/ProfileView.vue')
        },
      ]
    },
    {
      path: '/cartView',
      name: 'Cart',
      component: () => import('../views/CartView.vue')
    },
    {
      path: '/orderView',
      name: 'Order',
      component: () => import('../views/OrderView.vue')
    },
  ]
})

export default router
