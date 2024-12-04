<template>
  <div class="h-full bg-slate-100">
    <div data-layout="default">
      <SignUpForm />
      
    </div>
  </div>
</template>

<script setup>

import SignUpForm from "~/components/templates/SignUpForm.vue";

</script>

<style scoped>
.popup-content {
  width: auto;
  height: auto;
  padding: 20px;
}
</style>