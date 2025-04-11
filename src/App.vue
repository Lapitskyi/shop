<script setup lang="ts">
import { provide } from "vue";
import { useStore } from "./store/store";
const store = useStore();
provide("store", store);
</script>

<template>
  <router-view/>
</template>

<style scoped>
</style>