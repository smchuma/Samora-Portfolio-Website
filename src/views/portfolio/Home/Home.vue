<script setup>
import axiosClient from "@/axios";
import { watch } from "vue";
import { useUser } from "@/composables/useUser";

const { user } = useUser();
</script>

<template>
  <main class="h-full">
    <div class="flex">
      <div class="flex-1">
        <h1>Hi, I am</h1>
        <span v-if="user"
          >{{ user.personal_details.first_name }}
          {{ user.personal_details.middle_name }}
          {{ user.personal_details.last_name }}
        </span>
      </div>
      <div class="flex-1">
        <h1>pic</h1>
      </div>
    </div>
  </main>
</template>
