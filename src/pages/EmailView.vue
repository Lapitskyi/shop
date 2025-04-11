<script setup>
import { ref, onMounted, computed } from "vue";

const products = ref(JSON.parse(localStorage.getItem('cart')) || []);
const emailContent = ref("");

const totalPrice = computed(() => {
  return products?.value?.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
});


onMounted(async () => {
  const response = await fetch("/mail/email.html");
  emailContent.value = await response.text();
});

const renderEmailTemplate = computed(() => {
  let template = emailContent.value;

  template = template.replace("{{name}}", "John");

  const productRows = products.value.map(product => {
    return `
      <tr>
        <td><img class="w-6 h-6" src="${product.image}" alt="Facebook"></td>
        <td>${product.title}</td>
        <td>${product.quantity}</td>
        <td>$${product.price.toFixed(2)}</td>
      </tr>
    `;
  }).join('');

  template = template.replace("{{products}}", productRows);

  template = template.replace("{{total}}", `$${totalPrice.value}`);

  return template;
});
</script>

<template>
  <div class="email-container" v-html="renderEmailTemplate"></div>
</template>

<style scoped>
.email-container {
  margin: 0 auto;
  max-width: 600px;
}
</style>
