<template>
  <div
    class="fixed inset-0 z-50 w-full flex items-center justify-center bg-black backdrop-blur-[5px] bg-opacity-50"
  >
    <div
      class="relative z-10 p-5 m-5 text-13 border rounded-lg popup-content bg-black"
    >
      <div class="relative z-10 p-5 text-13 w-full">
        <EmailSignUpHeader />
        <div class="p-4 m-4"></div>
        <EmailSignUPForm />
      </div>
    </div>
  </div>
</template>

<script setup>
import EmailSignUpHeader from "~/components/organisms/EmailSingUpHeader.vue";
import EmailSignUPForm from "~/components/organisms/EmailSignUPForm.vue";
</script>