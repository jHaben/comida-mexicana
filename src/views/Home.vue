<template>
  <DailyRecipe />
</template>


<script setup>
import { useMeta } from 'vue-meta';
import DailyRecipe from '@/components/DailyRecipe.vue'

useMeta({
  title: 'Comida Mexicana',
  meta: [
    { property: 'og:title', content: 'Receta Diaria' },
    { property: 'og:description', content: 'Consulta aquí cada día tu receta deliciosa.' },
    { property: 'og:url', content: 'https://comida-mexicana.netlify.app/' },
    { property: 'og:image', content: 'https://comida-mexicana.netlify.app/' },
    // other Open Graph tags as needed
  ]
});
// the rest of your component options
</script>


