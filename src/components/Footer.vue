<template>
  <div class="no-print">
    <v-footer color="primary"  app>
      <v-row>

        <v-col class="text-center mt-4" cols="12">
          {{ new Date().getFullYear() }} 
          
        </v-col>

      </v-row>
    </v-footer>

  </div>
</template>
  
<script setup>

</script>
  
<style>
@media print {
  .no-print {
    display: none !important;
  }
}
</style>

  
