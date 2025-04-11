<script setup lang="ts">
  const currentYear =new Date().getFullYear()
</script>

<template>
  <footer class="flex gap-3 items-center justify-between w-full p-2 bg-[#333] text-white">
    <div class="">Copyright © {{currentYear}}</div>
  </footer>
</template>

<style scoped>

</style>