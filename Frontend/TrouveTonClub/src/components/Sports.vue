<script lang="ts">
import SportButton from "./SportButton.vue";

export default {
  components: {
    SportButton
  }
}
</script>

<template>
    <div id="sports" class="p-4">
        <h2 class="m-4 text-white">Choose your favorite activity</h2>
        <div class="d-flex flex-wrap">
        <SportButton></SportButton>
        <SportButton></SportButton>
        <SportButton></SportButton>
        <SportButton></SportButton>
        <SportButton></SportButton>
        <SportButton></SportButton>
        <SportButton></SportButton>
        <SportButton></SportButton>
        <SportButton></SportButton>
        </div>
        
    </div>
</template>



<style>
#sports{
    width : 100%;
    height : 100vh
}
</style>