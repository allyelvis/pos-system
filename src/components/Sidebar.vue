<template>
  <aside>
    <ul>
      <li><router-link to="/home">Home</router-link></li>
      <li><router-link to="/inventory">Inventory</router-link></li>
      <li><router-link to="/sales">Sales</router-link></li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: 'Sidebar'
};
</script>

<style scoped>
aside {
  width: 200px;
  background-color: #f4f4f4;
  padding: 15px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
}
</style>
