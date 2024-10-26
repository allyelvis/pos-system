<template>
  <div>
    <h2>Kitchen Panel</h2>
    <ul>
      <li v-for="order in orders" :key="order._id">
        <h3>Order #{{ order.orderNumber }}</h3>
        <ul>
          <li v-for="item in order.items" :key="item._id">
            {{ item.name }} - Quantity: {{ item.quantity }} - Status: {{ item.status }}
          </li>
        </ul>
        <button @click="updateOrderStatus(order, 'In Progress')">In Progress</button>
        <button @click="updateOrderStatus(order, 'Completed')">Completed</button>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      orders: [],
    };
  },
  created() {
    this.fetchOrders();
  },
  methods: {
    fetchOrders() {
      axios.get('/api/orders')
        .then(response => {
          this.orders = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    },
    updateOrderStatus(order, status) {
      order.status = status;
      axios.put(`/api/orders/${order._id}`, { status: status })
        .then(() => {
          this.fetchOrders();
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
}
</script>
