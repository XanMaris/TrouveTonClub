<template>
  <div id="map" ></div>
</template>

<script lang="ts">
import { onMounted } from "vue";
import { useClubStore } from '@/stores/club';
import leaflet from "leaflet";  

export default {
  
  props: {
    latitude: Number,
    longtitude: Number,
  
    },
    data(){
      return {}
    },

  setup(props : any, context : any){

    onMounted(() => {
      const club = useClubStore();  
      let map = leaflet.map("map").setView([props.latitude, props.longtitude], 13);
      leaflet
        .tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
          maxZoom: 19,
          attribution:
            '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        })
        .addTo(map);
        
        console.log(club.getClub(10).nom);
        leaflet.marker([props.latitude, props.longtitude]).addTo(map).on('click', ()=>{
          context.emit("club_id", 4);
          context.emit("displayPopUp", true);
        });
        leaflet.marker([props.latitude + 0.01, props.longtitude+ 0.01]).addTo(map);
    });
  },

  methods:{}
}
</script>

<style second>
#map {
  height: 600px;
  width : 100%;
  border-radius: .40rem
}
</style>
