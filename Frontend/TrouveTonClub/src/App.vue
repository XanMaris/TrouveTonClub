<script lang="ts">
import Nav from "./components/base/Nav.vue";

export default {
  components: {
    Nav
  }
}
</script>

<template>
  <div>
  <Nav></Nav>

  <main class="d-flex justify-content-center">
    <router-view></router-view>

    

  </main>
</div>
</template>

<style scoped>

</style>
