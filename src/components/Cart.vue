<script setup lang="ts">
import {ref, computed} from 'vue';

const cartItems = ref(JSON.parse(localStorage.getItem('cart')) || []);


const totalPrice = computed(() => {
  return cartItems.value.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
});

const removeItem = (id: number) => {
  cartItems.value = cartItems.value.filter(item => item.id !== id);
  localStorage.setItem('cart', JSON.stringify(cartItems.value));
}
</script>

<template>
  <div class="flex flex-col gap-2 w-full h-full ">
    <div v-if="cartItems.length > 0"
         class="flex flex-col  w-full h-full">

      <div class="flex flex-col gap-2 w-full h-full">
        <div
            class="product"
            v-for="product in cartItems"
            :key="product.id"
        >
          <img class="w-8 h-8" :src="product.image" alt="">
          <div>
            <h5 class="text-xs">{{ product.title }}</h5>
            <button @click="removeItem(product.id)" class="text-[10px] text-red-700 cursor-pointer underline">Remove</button>
          </div>

          <div  class="flex gap-1 items-center border border-gray-200 rounded p-1 bg-gray-100 ">
            <button class="w-6 h-6 cursor-not-allowed">-</button>
            {{ product.quantity }}
            <button class="w-6 h-6 cursor-not-allowed">+</button>
          </div>

            <p>&#x20AC {{ product.price }}</p>


        </div>
      </div>

      <div class="flex items-center justify-end gap-2 w-max p-2 border border-gray-200 ml-auto rounded" >

        <p class="">Total: &#x20AC {{ totalPrice }}</p>
        <button @click="$router.push('/email')" class="bg-green-600 text-white uppercase w-max p-2 border border-gray-400 rounded hover:bg-green-400 cursor-pointer ">
            Proceed to checkout
        </button>
      </div>

    </div>
    <p v-else class="text-center text-2xl font-medium">Your cart is empty.</p>


  </div>
</template>

<style scoped>
.product {
  display: grid;
  grid-template-columns: 40px 1fr 60px 60px;
  column-gap: 10px;
  align-items: center;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
</style>