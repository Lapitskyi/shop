<script setup>
defineProps({
  fill: String,
  half: Boolean,
});
</script>



<template>
  <svg
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="half-star" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="50%" stop-color="gold" />
        <stop offset="50%" stop-color="lightgray" />
      </linearGradient>
    </defs>

    <path
        :fill="half ? 'url(#half-star)' : fill"
        d="M46.83,55a1,1,0,0,1-.45-.11L32,47.6,17.62,54.89a1,1,0,0,1-1.05-.09,1,1,0,0,1-.39-1l2.74-15.38L7.32,27.54a1,1,0,0,1-.27-1,1,1,0,0,1,.81-.68l16.07-2.25,7.18-14a1,1,0,0,1,1.78,0l7.18,14,16.07,2.25a1,1,0,0,1,.81.68,1,1,0,0,1-.27,1l-11.6,10.9,2.74,15.38a1,1,0,0,1-.39,1A1,1,0,0,1,46.83,55Z"
    />
  </svg>
</template>
