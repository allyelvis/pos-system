<template>
  <div>
    <h2>Retail POS System</h2>
    <p>Welcome to the Global Business POS Panel</p>
    <button @click="initiateSale">Initiate Sale</button>
    <ul>
      <li v-for="product in products" :key="product._id">
        <span>{{ product.name }} - Price: {{ product.price }}</span>
        <button @click="addToCart(product)">Add to Cart</button>
      </li>
    </ul>
    <h3>Cart</h3>
    <ul>
      <li v-for="item in cart" :key="item._id">{{ item.name }} - Qty: {{ item.qty }}</li>
    </ul>
    <button @click="completeSale">Complete Sale</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      products: [],
      cart: []
    };
  },
  created() {
    this.loadProducts();
  },
  methods: {
    loadProducts() {
      axios.get('/api/products')
        .then(response => {
          this.products = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    },
    addToCart(product) {
      const item = this.cart.find(i => i._id === product._id);
      if (item) {
        item.qty++;
      } else {
        this.cart.push({ ...product, qty: 1 });
      }
    },
    completeSale() {
      axios.post('/api/sales', { items: this.cart })
        .then(() => {
          this.cart = [];
          alert('Sale completed successfully!');
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
};
</script>
