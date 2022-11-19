<template>
  <div id="map"></div>
</template>

<script lang="ts">
import { onMounted } from "vue";
import leaflet from "leaflet";

export default {
  
  props: {
    latitude: Number,
    longtitude: Number
    },

  setup(props : any){
    console.log(props);
    onMounted(() => {
      let map = leaflet.map("map").setView([props.latitude, props.longtitude], 13);
      leaflet
        .tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
          maxZoom: 19,
          attribution:
            '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        })
        .addTo(map);
    });
  },
}
</script>

<style second>
#map {
  height: 600px;
  width : 100%;
  border-radius: .40rem
}
</style>
