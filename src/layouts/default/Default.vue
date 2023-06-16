<template>
  <v-app>
    <v-sheet color="secondary" height="100%">
      <app-bar />
      <v-container>
        <div v-if="isLargeScreen">
          <v-row>
            <v-col></v-col>
            <v-col class="d-flex justify-center">
              <default-view />
            </v-col>
            <v-col class="d-flex justify-center align-center">
              <add-carousel />
            </v-col>
          </v-row>
        </div>
        <div  v-else>
              <default-view />
              <add-carousel />
        </div>
      </v-container>
      <v-sheet color="transparent" height="75" />
      <footer-bar />
    </v-sheet>
  </v-app>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import AppBar from '@/components/AppBar.vue'
import DefaultView from './View.vue'
import FooterBar from '@/components/Footer.vue'
import AddCarousel from '@/components/AddCarousel.vue'

const isLargeScreen = ref(window.innerWidth >= 800)

const updateWindowWidth = () => {
  isLargeScreen.value = window.innerWidth >= 800
}

onMounted(() => {
  window.addEventListener('resize', updateWindowWidth)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateWindowWidth)
})
</script>
