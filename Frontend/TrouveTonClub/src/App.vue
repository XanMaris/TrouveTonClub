<script setup lang="ts">
import Nav from "./components/base/Nav.vue";

</script>

<template>
  <div>
  <Nav></Nav>
  <router-link to="/home">Home</router-link>
  <router-view></router-view>



  <main>
    
  </main>
</div>
</template>

<style scoped>

</style>
