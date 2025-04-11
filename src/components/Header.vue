<script setup lang="ts">

import CartImage from "@/assets/images/Cart.vue";
import Logo from "@/assets/images/Logo.vue";
import Modal from "@/components/Modal.vue";
import Cart from "@/components/Cart.vue";
import {computed, ref, watch} from "vue";

const showModal = ref(false)

const cartItems = ref(JSON.parse(localStorage.getItem('cart')) || []);
const totalCount = computed(() => {
  return cartItems.value.reduce((total, item) => total + item.quantity, 0);
});

</script>

<template>
  <header class="flex gap-3 items-center justify-between w-full p-2 bg-[#333] text-white">
    <Logo/>
    <div class="flex gap-1 items-center relative cursor-pointer">
      <div v-if="totalCount !==0" class="absolute -top-3 right-0 bg-red-500 p-0.5 w-4 h-4 rounded-full flex items-center justify-center flex-col ">
        <p class="text-white text-xs">{{totalCount}}</p>
      </div>

      <CartImage @click="showModal=true" class="w-6 h-6 fill-white"/>
    </div>

  </header>
  <Modal v-if="showModal" :show-modal="showModal" @closeModal="showModal=false" :title="'Cart'">
    <Cart/>
  </Modal>
</template>

<style scoped>

</style>