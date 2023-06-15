<template>
  <v-app>
    <v-sheet color="secondary" height="100%">



      <app-bar />

      <default-view />
      <footer-bar />
    </v-sheet>
  </v-app>
</template>

<script setup>
import AppBar from '@/components/AppBar.vue'
import DefaultView from './View.vue'
import FooterBar from '@/components/Footer.vue'
</script>
