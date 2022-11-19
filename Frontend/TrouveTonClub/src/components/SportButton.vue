<template>
  <div class="m-4">
    <router-link class="text-decoration-none" to="/search">
      <div
        id="sport_button"
        class="d-flex flex-column justify-content-center align-items-center rounded"
      >
        <img id="sport_icon" src="src\images\basketball-ball.png" />
        <p class="mb-0 text-body fs-3 fw-bold">Basketball</p>
      </div>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({});
</script>

<style>
#sport_button {
  height: 200px;
  width: 200px;
  background-color: white;
}

#sport_icon {
  width: 60%;
  margin: 5px;
}
</style>
