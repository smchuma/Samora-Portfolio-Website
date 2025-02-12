<script setup>
import { RouterView } from "vue-router";
import Toast from "primevue/toast";
</script>

<template>
  <div class="h-screen">
    <Toast />
    <RouterView />
  </div>
</template>
