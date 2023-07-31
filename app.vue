<script setup lang="ts">
const dircion = Direction()
const { dir } = dircion
</script>

<template>
  <div :dir="dir">
    <NuxtLayout />
  </div>
</template>


<style>
.spotlight[data-v-23167fd6]{
  background: linear-gradient(45deg, #cbdc00 0%, #e4e236 50%, #e16500 100%) !important;
}
</style>