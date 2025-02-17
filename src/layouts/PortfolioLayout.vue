<script setup>
import Navbar from "@/components/portfolio/Navbar.vue";
</script>

<template>
  <div class="h-screen pattern">
    <Navbar />
    <main class="pt-20 h-screen px-16">
      <RouterView />
    </main>
  </div>
</template>

<style></style>
