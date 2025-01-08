<template>
  <div>
    <h2>Product List</h2>
    <div v-for="product in products" :key="product.id">
      <router-link :to="'/products/' + product.id">{{ product.name }}</router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const products = ref([]);

onMounted(async () => {
  const response = await axios.get('/api/products'); // Update with your API endpoint
  products.value = response.data;
});
</script>
