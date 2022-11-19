<template>
  <div class="d-flex flex-row w-75 justify-content-center">
    <SearchPanal></SearchPanal>
    <Map :latitude = 45.764043 :longtitude= 4.835659>
    </Map>
  </div>
  <PopUpClub v-if="displayPopUp" @switchDisplay="displayPopUp=!displayPopUp" />
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




