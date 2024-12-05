<template>
  <div>
    <p :class="customClass">{{ text }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  text: { type: String, required: true },
  ContentText: { type: String, required: true },
  customClass: { type: String, default: "text-xl" },
});
</script>