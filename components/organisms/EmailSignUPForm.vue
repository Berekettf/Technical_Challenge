<template>
  <div>
    <InputBox
      v-model="userName"
      placeholder="Name"
      icon-class="fa-user text-base text-black/70"
    />
    <InputBox
      v-model="userSurname"
      placeholder="Surname"
      icon-class="fa-user text-base text-black/70"
    />
    <InputBox
      v-model="userEmail"
      placeholder="test@gmail.com"
      type="email"
      icon-class="fa-envelope text-base text-black/70"
    />
    <InputBox
      v-model="password"
      placeholder="Password"
      type="password"
      icon-class="fa-key text-base text-black/70"
    />
    <InputBox
      v-model="confirmPassword"
      placeholder="Confirm password"
      type="password"
      icon-class="fa-key text-base text-black/70"
    />
    <ActionButton @pointerenter="handleSignUp" @pointerup="handleSignUp" text="Enter" />
    <Text
      text=" Terms &amp; Conditions "
      class="cursor-pointer text-center text-white/40"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { store } from "~/store/store"; // Import your store
import InputBox from "../molecules/InputBox.vue";
import ActionButton from "../molecules/ActionButton.vue";
import Text from "../atoms/Text.vue";

// Define reactive variables for form inputs
const userName = ref("");
const userSurname = ref("");
const userEmail = ref("");
const password = ref("");
const confirmPassword = ref("");

// Handle the signup logic
const handleSignUp = () => {
  // Validate input and set details in the store
  console.log("for debugging in handle signup");
  const isValid = store.setSignUpDetails({
    name: userName.value,
    surname: userSurname.value,
    email: userEmail.value,
    password: password.value,
    confirmPassword: confirmPassword.value,
  });

  // If the signup details are valid, set the email and proceed
};
</script>