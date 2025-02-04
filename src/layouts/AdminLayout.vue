<script setup>
import AdminSidebar from "@/components/admin/AdminSidebar.vue";

import { RouterView } from "vue-router";
</script>

<template>
  <main class="dark w-full h-screen text-white josefin">
    <div class="flex">
      <div class="fixed hidden md:block md:w-52 h-screen">
        <AdminSidebar />
      </div>
      <main class="ml-0 md:ml-52 w-[calc(100%-52px)]">
        <div class="flex md:flex-row flex-col">
          <div class="flex-[2]">
            <RouterView />
          </div>
          <div class="flex-1">two</div>
        </div>
      </main>
    </div>
  </main>
</template>
