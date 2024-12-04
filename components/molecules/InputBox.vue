<template>
  <div
    class="group relative mt-8 flex h-10 w-full rounded transition-all bg-white justify-center"
  >
    <div class="flex w-10 items-center justify-center text-xl">
      <Icon :icon-class="iconClass" />
    </div>

    <!-- Pass value via modelValue and listen to the input event -->
    <InputField
      :value="modelValue"
      @input="handleInput"
      maxlength="100"
      :placeholder="placeholder"
      customClass="h-full flex-1 rounded bg-transparent text-sm text-black outline-none transition-all"
      :type="inputType"
    />
  </div>
</template>

<script setup>
import Icon from "~/components/atoms/Icon.vue";
import InputField from "~/components/atoms/InputField.vue";

const props = defineProps({
  modelValue: { type: String, default: "" }, // Required for two-way binding
  iconClass: { type: String, required: true },
  placeholder: { type: String, required: true },
  inputType: { type: String, default: "text" },
});

const emit = defineEmits(["update:modelValue"]);

// Emit update event to parent with the new value
const handleInput = (event) => {
  emit("update:modelValue", event.target.value);
};
</script>