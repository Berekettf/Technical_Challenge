<template>
  <i :class="['fa-solid', iconClass, customClass]" />
</template>

<script setup>
defineProps({
  iconClass: {
    type: String,
    required: true,
  },
  customClass: {
    type: String,
    default: "",
  },
});
</script>