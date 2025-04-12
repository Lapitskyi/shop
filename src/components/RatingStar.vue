<script setup lang="ts">

import RateStar from "@/assets/images/RateStar.vue";

const {rating = 0} = defineProps<{ rating?: number, count?: number }>()

</script>

<template>
  <div class="flex items-center gap-1">
    <div class="flex gap-0.5 items-center">
      <RateStar v-for="star in 5"
                :key="star"
                class="w-3 h-3 md:h-5 md:w-5"
                :fill="star <= Math.floor(rating) ? 'gold' : 'lightgray'"
                :half="star === Math.ceil(rating) && rating % 1 !== 0"
      />
    </div>

    <p class="text-xs">({{ count }})</p>
  </div>
</template>
