<template>
  <img :src="src" :alt="alt" :class="customClass" />
</template>

<script setup>
const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    default: "",
  },
  customClass: {
    type: String,
    default: "",
  },
});
</script>