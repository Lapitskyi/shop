<script setup lang="ts">
import RatingStar from "@/components/RatingStar.vue";
import {ref} from "vue";

type Product = {
  category: string,
  description: string,
  id: number,
  title: string,
  price: number,
  image: string,
  rating: {
    rate: number,
    count: number
  }
}
defineProps<{ product: Product, hideDescription?: boolean, isProductInCart?: boolean, disabled?:boolean }>()

const showDescription = ref(false)

const toggleDescription = () => {
  showDescription.value = !showDescription.value
}
</script>

<template>
  <div class="flex flex-col gap-2 max-w-[320px] w-full h-full  border border-gray-400 rounded p-3">
    <div class="flex w-full  flex-col items-center justify-center ">
      <img class="w-[150px] h-[150px] object-contain" :src="product.image"
           :alt="product.title">
    </div>

    <h3 class="font-bold">{{ product.title }}</h3>
    <div v-if="hideDescription" class="">
      <p class="text-xs">{{
          showDescription ? product.description : product.description.slice(0, 160) + (product.description.length > 160 ? "..." : "")
        }}</p>

      <button v-if="product.description.length>160" class="w-max ml-auto flex " @click="toggleDescription">
        {{ showDescription ? '(Hide)' : '(More)' }}
      </button>

    </div>

    <p v-else class="text-xs">{{ product.description }}</p>


    <RatingStar :rating="product.rating.rate" :count="product.rating.count"/>

    <div class="text-2xl font-semibold mt-auto ">&#x20AC {{ product.price }}</div>
    <button
        :disabled
        @click="$emit('addToCart', product)"
        :class="isProductInCart ?'bg-green-600 text-white' :'bg-white hover:bg-gray-300 hover:disabled:bg-white'"
        class="flex items-center justify-center p-2 border w-full rounded cursor-pointer disabled:cursor-not-allowed">
      {{ isProductInCart ? "Product in Cart" : "Add to Car" }}
    </button>

  </div>
</template>

<style scoped>

</style>