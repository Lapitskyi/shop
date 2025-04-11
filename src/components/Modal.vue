<script setup lang="ts">
defineProps<{ showModal: boolean, title?:string }>()
</script>

<template>
  <div
      class="boxShadow rounded-xl  fixed top-0 left-0 right-0 bottom-0 flex-col bg-white items-center justify-center m-auto flex z-50 w-[500px] h-[500px]"
      v-if="showModal"
  >
    <div class="w-full flex justify-between items-center p-4">
      <h3 class="font-bold text-2xl">{{title}}</h3>
      <button
          @click.stop="$emit('closeModal')"
          class="sm:w-6 sm:h-6 w-4 h-4 rounded	border border-gray-400 flex flex-col justify-center items-center "
      >
        <svg class="w-4 h-4" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <g id="cross">
            <line
                x1="7"
                x2="25"
                y1="7"
                y2="25"
                fill="none"
                stroke="#000"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2px"
            />
            <line
                x1="7"
                x2="25"
                y1="25"
                y2="7"
                fill="none"
                stroke="#000"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2px"
            />
          </g>
        </svg>
      </button>
    </div>


    <div class="relative m-auto w-full p-4 scroll-auto overflow-auto h-full max-h-[500px] ">

      <slot></slot>
    </div>

  </div>
</template>

<style scoped>
.boxShadow {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

}
</style>