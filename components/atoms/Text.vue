<template>
  <p :class="customClass">{{ text }}</p>
</template>

<script setup>
const props = defineProps({
  text: { type: String, required: true },
  ContentText: { type: String, required: true },
  customClass: { type: String, default: "text-xl" },
});
</script>