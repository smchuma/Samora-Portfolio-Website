<script setup>
import useAuth from "@/composables/useAuth";

const { data: user } = useAuth();
</script>

<template>
  <main class="w-full text-white lighter rounded-md py-5 px-5">
    <h1 class="mt-3 border-b-2 border-[#4e4e4e] pb-4 text-xl">
      Personal Information
    </h1>
    <p v-if="user">{{ user.first_name }}</p>
  </main>
</template>
