<template>
  <div id="app">
    <h1>POS System</h1>
    <InvoiceForm />
    <BillForm />
  </div>
</template>

<script>
import InvoiceForm from './components/invoice/InvoiceForm.vue';
import BillForm from './components/bill/BillForm.vue';

export default {
  components: {
    InvoiceForm,
    BillForm
  }
};
</script>

<style>
/* Add any global styles here */
</style>
