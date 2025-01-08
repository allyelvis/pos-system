import { createRouter, createWebHistory } from 'vue-router';

// Define routes
const routes = [
  {
    path: '/',
    name: 'Home',
    component: {
      template: '<div><h2>Home Page</h2><p>Welcome to the POS system!</p></div>'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: {
      template: '<div><h2>About Us</h2><p>This POS system is built using Vue 3 and Rollup.</p></div>'
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: {
      template: '<div><h2>Contact</h2><p>Feel free to reach out to us for any inquiries.</p></div>'
    }
  }
];

// Create router instance
const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;