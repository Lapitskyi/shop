<script setup lang="ts">

import {ref, watch} from "vue";

const props = defineProps<{
  pageSize: number,
  totalCount: number,
  currentPage: number,
  portionSize: number,
}>()
const emit = defineEmits(["changePage"]);

const pageCount = ref(0)

const handlePageClick = (page: number) => {
  if (page >= 1 && page <= pageCount.value) {
    emit('changePage', page);
  }
};

watch(
    () => props.totalCount,
    () => {
      pageCount.value = Math.ceil(props.totalCount / props.pageSize);
    })
</script>

<template>
  <ul class="flex items-center justify-center w-full gap-1">
    <li
        @click="currentPage !== page && handlePageClick(page)"
        :class="currentPage === page ? 'bg-gray-400 cursor-not-allowed' : 'bg-white  cursor-pointer '"
        class="w-10 h-10 flex flex-col items-center justify-center p-2 border border-gray-400 rounded"
        v-for="page in pageCount"
        :key="page">{{ page }}
    </li>
  </ul>

</template>

<style scoped>

</style>