<template>
  <div class="d-flex flex-row w-75 justify-content-center">
    <SearchPanal></SearchPanal>
    <Map :latitude = 45.764043 :longtitude= 4.835659>
    </Map>
  </div>
  <!-- bouton temporaire -->
  <button @click='displayPopUp=true'>POP UP (bouton temporaire)</button>
  <PopUpClub v-if="displayPopUp" @switchDisplay="displayPopUp = !displayPopUp" :club="{nom:'test2', localisation:'Lyon', lien:'www.google.com'}"/>
</template>

<script lang="ts">
import Map from "../components/Map.vue";
import SearchPanal from "../components/SearchPanal.vue";
import PopUpClub from "@/components/PopUpClub.vue";
export default {
  components: {
    Map,
    SearchPanal,
    PopUpClub
  },
  data() {
    return {
      displayPopUp: true,
    }
  }
  
}
</script>




