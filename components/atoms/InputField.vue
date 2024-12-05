<!-- InputField.vue -->
<template>
<input
    :id="id"
    :maxlength="maxlength"
    :autocomplete="autocomplete"
    :placeholder="placeholder"
    :class="customClass"
    :type="type"
  />
</template>

<script setup>
defineProps({
  id: {
    type: String,
  },
  maxlength: {
    type: Number,
    default: 100,
  },
  type: {
    type: String,
    default: "text",
  },
  autocomplete: {
    type: String,
    default: "new-password",
  },
  placeholder: {
    type: String,
    default: "Search...",
  },
  customClass: {
    type: String,
    default: "h-full w-0 flex-1 bg-transparent text-13 outline-none",
  },
});
</script>
