<template>


  <v-app-bar class="no-print" app :elevation="2" rounded color="primary">
    <v-app-bar-title  class="text-h4 font-weight-bold">



      Receta Mexicana Diaria
    </v-app-bar-title>
    <template v-slot:append>
      <!-- <v-btn icon="mdi-heart"></v-btn>

      <v-btn icon="mdi-magnify"></v-btn>

      <v-btn icon="mdi-dots-vertical"></v-btn> -->
    </template>
  </v-app-bar>
</template>

<script setup>
  //
</script>

<style>
@media print {
  .no-print {
    display: none !important;
  }
}

</style>
