<template>
  <div>
    <h2>Create Bill</h2>
    <form @submit.prevent="submitBill">
      <input v-model="bill.supplierName" placeholder="Supplier Name" required />
      <input v-model="bill.billNumber" placeholder="Bill Number" required />
      <div v-for="(item, index) in bill.items" :key="index">
        <input v-model="item.description" placeholder="Description" required />
        <input v-model="item.quantity" type="number" placeholder="Quantity" required />
        <input v-model="item.price" type="number" placeholder="Price" required />
        <button @click.prevent="removeItem(index)">Remove Item</button>
      </div>
      <button @click.prevent="addItem">Add Item</button>
      <button type="submit">Submit Bill</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bill: {
        supplierName: '',
        billNumber: '',
        items: [{ description: '', quantity: 1, price: 0 }]
      }
    };
  },
  methods: {
    addItem() {
      this.bill.items.push({ description: '', quantity: 1, price: 0 });
    },
    removeItem(index) {
      this.bill.items.splice(index, 1);
    },
    
async submitBill() {
        await this..post('/api/bill/create', this.bill);
        alert('Bill created successfully!');
      }
    }
  };
</script>
