<script setup>
import axiosClient from "@/axios";
import { watch } from "vue";
import { useUser } from "@/composables/useUser";
import { Github, Linkedin } from "lucide-vue-next";

const { user } = useUser();
</script>

<template>
  <main
    class="h-full flex flex-col-reverse md:flex-row justify-center items-center"
  >
    <div class="flex-1">
      <h1 class="text-4xl hubot">
        {{ user?.personal_details?.first_name }}
        {{ user?.personal_details?.middle_name }}
        {{ user?.personal_details?.last_name }}
      </h1>
      <p class="my-2">{{ user?.personal_details?.profession }}</p>
      <p class="mt-1 text-md text-gray-300">
        I'm a software developer who loves web apps and data analysis. I prefer
        React for frontend but find Vue simple and fun. For backend, I like
        Node.js but have used Laravel extensively.
      </p>
      <div class="flex mt-4 gap-x-5 items-center">
        <button
          class="w-1/4 bg-blue-800 transition-all text-white font-semibold py-2 px-4 rounded-full text-sm hover:scale-[105%] hover:shadow-blue-900 hover:shadow-lg"
        >
          Download CV
        </button>
        <div class="flex gap-x-2 items-center">
          <Github
            size="35"
            class="border border-blue-800 p-2 rounded-full hover:shadow-blue-600 hover:shadow-lg cursor-pointer transition-all text-blue"
          />
          <Linkedin
            size="35"
            class="border border-blue-800 p-2 rounded-full hover:shadow-blue-600 hover:shadow-lg cursor-pointer transition-all text-blue"
          />
        </div>
      </div>
    </div>
    <div class="flex-1 flex justify-center">
      <div
        class="w-48 h-48 md:w-80 md:h-80 rounded-full border-2 border-dotted border-blue-500 relative flex justify-center items-center glow-effect"
      >
        <img
          src="@/assets/demo.png"
          alt="Profile"
          class="w-48 h-48 md:w-80 md:h-80 rounded-full object-cover"
        />
      </div>
    </div>
  </main>
</template>

<style scoped>
.glow-effect {
  box-shadow: 0 0 20px rgba(0, 102, 255, 0.4);
}
</style>
