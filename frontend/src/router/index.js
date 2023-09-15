import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CartView from '../views/CartView.vue'

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/shop",
    name: "shop",
    component: () =>
      import(/* webpackChunkName: "shop" */ "../views/ShopView.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () =>
      import(/* webpackChunkName: "contact" */ "../views/ContactView.vue"),
  },
  {
    path: "/admin",
    name: "admin",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AdminView.vue"),
  },
  {
    path: "/singleview/:prodID",
    name: "single-view",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SingleView.vue"),
    props: true,
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login"*/ "../views/LoginView.vue")
  },
  {
    path: "/register",
    name: "register",
    component: () =>
      import("../views/RegisterView.vue")
  },
  {
    path: "/cart",
    name: "cart",
    component: () =>
      import("../views/CartView.vue")
  },
  {
    path: "/checkout",
    name: "checkout",
    component: () =>
      import("../views/CheckoutView.vue")
  }

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
