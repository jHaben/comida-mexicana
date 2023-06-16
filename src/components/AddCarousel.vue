<template>
        <v-card class="ma-2" max-width="400"  max-height="300" color="primary" elevation="8">
            <v-carousel :show-arrows="false">
                <v-carousel-item v-for="(add, i) in adds" :key="i" :src="add.src" cover></v-carousel-item>
            </v-carousel>
        </v-card>
</template>

<script setup>

import { ref } from 'vue';
// data
const adds = ref([
    {
        src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
    },
    {
        src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
    },
    {
        src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
    },
    {
        src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
    },
])

</script>