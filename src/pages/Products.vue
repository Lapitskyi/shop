<script setup lang="ts">
import Modal from "@/components/Modal.vue";

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

import Card from "@/components/Card.vue";

import {getProducts, getProductsCategory} from "@/service/products.js";
import {computed, onMounted, ref, inject} from "vue";
import Pagination from "@/components/Pagination.vue";
import Tabs from "@/components/Tabs/Tabs.vue";
import Cart from "@/components/Cart.vue";
import { Store } from "@/store/store";

const activeTab = ref('all')
const category = ref([])
const products = ref<Product[]>([])
const currentPage = ref(1)
const pageSize = 10;
const showModal = ref(false)

const store = inject("store") as Store;

const selectActiveTab = (tab: string) => {
  showModal.value = false;
  activeTab.value = tab;
  currentPage.value = 1;
}

const changePage = (page: number) => {
  showModal.value = false;
  currentPage.value = page
}

const selectedProducts = computed(() => {
  if (activeTab.value === 'all') {
    return products.value
  }
  return products.value.filter(p => p.category === activeTab.value)
})


const toggleProductInCart =  (product: Product) => {
  const existingProduct = store.state.cart.find(item => item.id === product.id);
  if (existingProduct) {
    showModal.value = true;
  } else {
    store.addToCart({...product,quantity: 1 });
  }
};

const isProductInCart = (productId) => {
  return store.state.cart.some(item => item.id === productId);
};

onMounted(async () => {
  await getProductsCategory()
      .then((res) => {
        if (res && res?.length) {
          category.value = res.includes('all') ? res : ['all', ...res]
        }
      })
  await getProducts()
      .then((res) => {
        if (res && res?.length) {
          products.value = res
        }
      })
})
</script>

<template>
  <section>
    <Tabs
        @currentTab="(tab)=>selectActiveTab(tab)"
        :tabs="category"
        :activeTab
    />
  </section>

  <section>
    <div class="products">
      <Card
          v-for="product in selectedProducts.slice((currentPage - 1) * pageSize, currentPage * pageSize)"
          :disabled="showModal"
          @addToCart="toggleProductInCart(product)"
          :key="product.id"
          :product
          :isProductInCart=" isProductInCart(product.id)"
      />

    </div>
    <Pagination
        class="mt-4"
        v-show="selectedProducts.length > pageSize"
        @changePage="changePage"
        :pageSize="pageSize"
        :totalCount="selectedProducts.length"
        :currentPage="currentPage"
        :portionSize="5"
    />

  </section>

  <Modal v-if="showModal" :show-modal="showModal" @closeModal="showModal=false" :title="'Cart'">
    <Cart/>
  </Modal>


</template>

<style scoped>
section {
  margin: 10px 0;
}

.products {
  display: grid;
  grid-template-columns:repeat(auto-fill, minmax(280px, 1fr));
  gap: 8px;
  justify-content: center;
}
</style>