<template>
  <div class="no-print"  >
  <v-footer color="primary" app>
    <v-row>

      <v-col class="text-center mt-4" cols="12">
        {{ new Date().getFullYear() }} — <strong>Construida sobre <a
            href="https://rocasolida.tech">RocaSolida.Tech</a></strong>
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

  