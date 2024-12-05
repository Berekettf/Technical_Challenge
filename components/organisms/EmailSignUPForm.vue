<template>
  <div>
    <InputBox
      v-model="userName"
      placeholder="Name"
      icon-class="fa-user text-base text-black"
    />
    <InputBox
      v-model="userSurname"
      placeholder="Surname"
      icon-class="fa-user text-base text-black"
    />
    <InputBox
      v-model="userEmail"
      placeholder="Your@gmail.com"
      type="email"
      icon-class="fa-envelope text-base text-black/70"
    />
    <InputBox
      v-model="password"
      placeholder="Password"
      type="password"
      icon-class="fa-key text-base text-black"
    />
    <InputBox
      v-model="confirmPassword"
      placeholder="Confirm password"
      type="password"
      icon-class="fa-key text-base text-black"
    />
    <ActionButton  text="Enter"/>
    <Text
      text=" Terms &amp; Conditions "
      class="cursor-pointer text-center text-black"
    />
  </div>
</template>

<script setup>
import InputBox from "../molecules/InputBox.vue";
import ActionButton from "../molecules/ActionButton.vue";
import Text from "../atoms/Text.vue";


</script>

<style scoped>
/* Add custom styling for the page */
</style>
