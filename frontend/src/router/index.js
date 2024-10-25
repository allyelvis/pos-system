import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Auth from '../views/Auth.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/auth', component: Auth },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
import PosHome from '../views/Pos/Home.vue';
import PosSales from '../views/Pos/Sales.vue';
import PosInventory from '../views/Pos/Inventory.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/auth', component: Auth },
  { path: '/pos', component: PosHome },
  { path: '/pos/sales', component: PosSales },
  { path: '/pos/inventory', component: PosInventory },
];
import AccountingDashboard from '../views/Accounting/Dashboard.vue';
import AccountingTransactions from '../views/Accounting/Transactions.vue';
import AccountingFiscalization from '../views/Accounting/Fiscalization.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/auth', component: Auth },
  { path: '/accounting', component: AccountingDashboard },
  { path: '/accounting/transactions', component: AccountingTransactions },
  { path: '/accounting/fiscalization', component: AccountingFiscalization },
];
import CarDealerInventory from '../views/CarDealer/Inventory.vue';
import CarDealerAddCar from '../views/CarDealer/AddCar.vue';
import CarDealerEditCar from '../views/CarDealer/EditCar.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/auth', component: Auth },
  { path: '/cardealer/inventory', component: CarDealerInventory },
  { path: '/cardealer/add', component: CarDealerAddCar },
  { path: '/cardealer/edit/:id', component: CarDealerEditCar },
];
