import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Products from '../views/Products.vue';
import Orders from '../views/Orders.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/products', name: 'Products', component: Products },
  { path: '/orders', name: 'Orders', component: Orders },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
