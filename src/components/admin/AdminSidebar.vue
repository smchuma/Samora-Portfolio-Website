<script setup>
import { RouterLink, useRouter } from "vue-router";
import { User, GraduationCap, Briefcase, Folder } from "lucide-vue-next";

const navItems = [
  {
    name: "User",
    path: "/admin/user",
    icon: User,
  },
  {
    name: "Education",
    path: "/admin/education",
    icon: GraduationCap,
  },
  {
    name: "Experience",
    path: "/admin/experience",
    icon: Briefcase,
  },
  {
    name: "Projects",
    path: "/admin/projects",
    icon: Folder,
  },
];

const route = useRouter();
</script>

<template>
  <main class="bg-[#1B1B1B] h-full text-white">
    <h1 class="josefin text-2xl pt-5 text-center mb-10 pattaya">samora</h1>

    <div v-for="item in navItems" :key="item.name" class="mt-2">
      <RouterLink
        :to="item.path"
        class="flex py-2 px-10 hover:text-white bg-[#404040]"
        :class="{
          'border-r-2 bg-blue-700 border-white ':
            route.currentRoute.value.path === item.path,
          'hover:bg-blue-700 hover:border-r-2':
            route.currentRoute.value.path !== item.path,
        }"
      >
        <component
          :is="item.icon"
          class="w-5 h-5 inline-block text-white mr-3"
        />
        {{ item.name }}
      </RouterLink>
    </div>
    <div class="bottom-5 px-16 absolute">Logout</div>
  </main>
</template>
