<script setup lang="ts">

defineProps<{
  nameTab:string,
  activeTab?:string,
}>()
</script>

<template>
  <div class="cursor-pointer px-4 py-2 flex flex-col items-center justify-center rounded-lg text-nowrap whitespace-nowrap hover:bg-gray-300"
       :class="activeTab === nameTab ? 'bg-gray-400' : 'border border-gray-400'">
    {{ nameTab }}
  </div>
</template>

<style scoped>

</style>