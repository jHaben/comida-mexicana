<template>


  <v-app-bar app :elevation="2" rounded color="primary">
    <v-app-bar-title class="text-h4 font-weight-bold">


      Comida Mexicana
    </v-app-bar-title>
    <template v-slot:append>
      <v-btn icon="mdi-heart"></v-btn>

      <v-btn icon="mdi-magnify"></v-btn>

      <v-btn icon="mdi-dots-vertical"></v-btn>
    </template>
  </v-app-bar>
</template>

<script setup>
  //
</script>
