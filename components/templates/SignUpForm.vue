<template>
  <div
    class="fixed inset-0 z-50 w-full flex items-center justify-center bg- backdrop-blur-[5px] bg-opacity-50"
  >
    <div
      class="relative z-10 py-2 px-4 w-1/4 h-10/11 m-5 text-13 border rounded-3xl popup-content bg-slate-500"
    >
      <div class="relative z-10 p-5 text-13 w-full">
        <EmailSignUPForm />
      </div>
    </div>
  </div>
</template>

<script setup>

import EmailSignUPForm from "~/components/organisms/EmailSignUPForm.vue";
</script>