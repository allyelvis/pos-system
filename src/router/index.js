import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home.vue';
import Inventory from '../components/Inventory.vue';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', component: Home },
    { path: '/home', component: Home },
    { path: '/inventory', component: Inventory },
  ]
});
