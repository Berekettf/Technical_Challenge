<template>
  <div class="max-w-5xl mx-auto w-full px-6 py-4">
    <div
      class="items-center py-12 px-8 gap-1 mt-8 text-lg rounded-md border border-gray-200"
    >

      <div class="mt-4">
      <h2>Here is your data in table</h2>
        <Table />
      </div>
    </div>
  </div>
</template>

<script setup>
import Table from "~/components/templates/Table.vue";
</script>

<style scoped>
.popup-content {
  width: auto;
  height: auto;
  padding: 20px;
}
</style>
