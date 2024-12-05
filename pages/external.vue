<template>
  <div class="max-w-5xl mx-auto w-full px-6 py-4">
    <div
      class="items-center py-12 px-8 gap-1 mt-8 text-lg"
    >
      <div class="mt-4">
        <h1 class="text-center scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl py-3">
          Here is your data in table
        </h1>
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
