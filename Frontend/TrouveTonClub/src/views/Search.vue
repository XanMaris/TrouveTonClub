<script lang="ts">
import Map from "../components/Map.vue";
import SearchPanal from "../components/SearchPanal.vue";

export default {
  components: {
    Map,
    SearchPanal
  }
  
}
</script>

<template>
    <div class="d-flex flex-row w-75 justify-content-center">
      <SearchPanal></SearchPanal>
      <Map :latitude = 45.764043 :longtitude= 4.835659></Map>
    </div>
</template>


