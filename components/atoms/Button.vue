<template>
  <button
    class="relative z-10 flex items-center justify-center gap-2 group-hover:text-black text-white"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
const props = defineProps({
  onClick: {
    type: Function,
    required: true,
  },
});
</script>

<style scoped>

</style>