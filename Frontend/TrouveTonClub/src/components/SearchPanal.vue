<template>
  <form class="w-50 bg-white rounded-left p-2 m-5 rounded">
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Genre</label>
      <select class="form-select" aria-label="Disabled select example">
        <option value="1">Masculine</option>
        <option value="2">Feminine</option>
        <option value="3">Mixte</option>

      </select>
    </div>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Catégorie d'âge</label>
      <select class="form-select" aria-label="Disabled select example">
        <option value="1">U10-U11 (Poussins)</option>
        <option value="2">U12-U13 (Benjamins)</option>
        <option value="3">U14-U15 (Minimes)</option>
        <option value="4">U16-U17 (Cadets)</option>
        <option value="5">U18-U19-U20 (Junior)</option>
        <option value="5">Seniors</option>
        
      </select>
    </div>
    <div class="mb-3">
      <label for="adresse" class="form-label">Adresse</label>
      <br>
      <input type="text" class="form-control" placeholder="451 Cr Emile Zola"/>
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <label for="exampleInputEmail1" class="form-label">Categorie</label>
      <select class="form-select" aria-label="Disabled select example">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">...</option>
      </select>
    </div>
    <div class="mb-3 form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1">
      <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" class="btn btn-primary">Trouve les clubs!</button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {

  },
})
</script>
