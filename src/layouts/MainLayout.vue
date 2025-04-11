<script setup lang="ts">

import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div class="flex flex-col h-screen">
    <Header/>
    <div class="overflow-y-auto flex-1 px-2">
      <router-view/>
    </div>

    <Footer/>
  </div>

</template>

<style scoped>

</style>