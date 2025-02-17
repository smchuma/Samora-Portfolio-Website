<script setup>
import AdminHeader from "@/components/admin/AdminHeader.vue";
import AdminSidebar from "@/components/admin/AdminSidebar.vue";

import { RouterView } from "vue-router";
</script>

<template>
  <main class="pattern w-full h-screen text-white josefin">
    <div class="flex">
      <div class="fixed hidden md:block md:w-52 h-screen">
        <AdminSidebar />
      </div>
      <main class="ml-0 md:ml-52 w-full md:w-[calc(100%-52px)]">
        <div class="">
          <AdminHeader />
          <div class="p-5">
            <RouterView />
          </div>
        </div>
      </main>
    </div>
  </main>
</template>
