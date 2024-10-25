<template>
  <div>
    <h2>Create Invoice</h2>
    <form @submit.prevent="submitInvoice">
      <input v-model="invoice.clientName" placeholder="Client Name" required />
      <input v-model="invoice.invoiceNumber" placeholder="Invoice Number" required />
      <div v-for="(item, index) in invoice.items" :key="index">
        <input v-model="item.description" placeholder="Description" required />
        <input v-model="item.quantity" type="number" placeholder="Quantity" required />
        <input v-model="item.price" type="number" placeholder="Price" required />
        <button @click.prevent="removeItem(index)">Remove Item</button>
      </div>
      <button @click.prevent="addItem">Add Item</button>
      <button type="submit">Submit Invoice</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      invoice: {
        clientName: '',
        invoiceNumber: '',
        items: [{ description: '', quantity: 1, price: 0 }]
      }
    };
  },
  methods: {
    addItem() {
      this.invoice.items.push({ description: '', quantity: 1, price: 0 });
    },
    removeItem(index) {
      this.invoice.items.splice(index, 1);
    },
    async submitInvoice() {
      await this..post('/api/invoice/create', this.invoice);
      alert('Invoice created successfully!');
    }
  }
};
</script>
