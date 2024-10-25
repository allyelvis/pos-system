<template>
  <div>
    <h2>Purchase Management</h2>
    <form @submit.prevent="addPurchase">
      <label for="product">Product:</label>
      <input v-model="newPurchase.product" type="text" required />

      <label for="quantity">Quantity:</label>
      <input v-model="newPurchase.quantity" type="number" required />

      <label for="cost">Cost:</label>
      <input v-model="newPurchase.cost" type="number" required />

      <button type="submit">Add Purchase</button>
    </form>

    <h3>All Purchases</h3>
    <ul>
      <li v-for="purchase in purchases" :key="purchase._id">
        {{ purchase.product }} - Qty: {{ purchase.quantity }} - Cost: {{ purchase.cost }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      newPurchase: {
        product: '',
        quantity: 0,
        cost: 0,
      },
      purchases: []
    };
  },
  created() {
    this.loadPurchases();
  },
  methods: {
    loadPurchases() {
      axios.get('/api/purchases')
        .then(response => {
          this.purchases = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    },
    addPurchase() {
      axios.post('/api/purchases', this.newPurchase)
        .then(response => {
          this.purchases.push(response.data);
          this.newPurchase = { product: '', quantity: 0, cost: 0 };
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
};
</script>
