<template>
  <div id="app">
    <Header />
    <Sidebar />
    <div class="main-content">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Sidebar from './components/Sidebar.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Sidebar,
    Footer
  }
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.main-content {
  flex: 1;
  padding: 20px;
}

@media (max-width: 768px) {
  #app {
    flex-direction: column;
  }
  .main-content {
    padding: 10px;
  }
}
</style>