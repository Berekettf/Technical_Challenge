<template>
  <div
    class="relative flex h-10 w-full items-center justify-center overflow-hidden rounded-md bg-black text-center text-sm cursor-pointer opacity-70 mt-6 mb-6 border border-white/100"
  >
    <div class="gradient absolute inset-0 opacity-50 text-center"></div>
    <Text :text="text" class="text-white" />
  </div>
</template>

<script setup>
import Text from "~/components/atoms/Text.vue";

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.gradient {
  position: absolute;
  inset: 0;
  opacity: 0.5;
  background: linear-gradient(180deg, #6f6363 0%, rgba(138, 138, 138, 0) 100%);
}
</style>