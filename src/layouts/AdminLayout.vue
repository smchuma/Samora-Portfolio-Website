<script setup>
import AdminSidebar from "@/components/admin/AdminSidebar/AdminSidebar.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <main class="bg-[#0A0A1A] w-full h-screen text-white">
    <div class="flex">
      <div class="fixed hidden md:block md:w-52 h-screen">
        <AdminSidebar />
      </div>
      <main class="ml-0 md:ml-52">
        <RouterView />
      </main>
    </div>
  </main>
</template>
