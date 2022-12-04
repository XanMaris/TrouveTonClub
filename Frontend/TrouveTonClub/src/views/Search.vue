<template>
  <div class="d-flex flex-row w-75 justify-content-center">
    <SearchPanal @clubs="clubs = $event"></SearchPanal>
    <Map :latitude = 45.764043 :longtitude= 4.835659 @club_id="club_id = $event" :clubs="clubs" @displayPopUp = "displayPopUp = $event">
    </Map>
  </div>
  <!-- bouton temporaire -->
  <PopUpClub v-if="displayPopUp" @switchDisplay="displayPopUp = !displayPopUp" :club="clubs[club_id]"/>
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
      clubs : ['first', 'second', 'third', 'fourth', 'five', 'six', 'seven', 'eight'],
      club_id : 0
    }
  }
}
</script>




