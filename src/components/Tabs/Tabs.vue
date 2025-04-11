<script setup lang="ts">

import Tab from "@/components/Tabs/Tab.vue";

const props = defineProps<{ tabs?: string[], activeTab?: string }>()
</script>

<template>
  <div class="overflow-x-auto">
    <div class="flex space-x-4 w-max min-w-full">
      <Tab
          @click="$emit('currentTab', tab)"
          v-for="tab in props.tabs"
          :key="tab"
          :name-tab="tab"
          :activeTab="props.activeTab"
      />

    </div>
  </div>
</template>

<style scoped>

</style>