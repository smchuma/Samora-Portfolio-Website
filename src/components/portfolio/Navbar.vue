<script setup>
import { AlignRight } from "lucide-vue-next";
import { Drawer } from "primevue";
import { ref } from "vue";
import {
  Home,
  User,
  Briefcase,
  Lightbulb,
  Layers,
  Code,
  Mail,
} from "lucide-vue-next";
const visible = ref(false);

const navItems = [
  {
    name: "HOME",
    path: "/",
    icon: Home,
  },
  {
    name: "ABOUT ME",
    path: "/about",
    icon: User,
  },
  {
    name: "MY SERVICES",
    path: "/services",
    icon: Lightbulb,
  },
  {
    name: "SKILLS",
    path: "/skills",
    icon: Layers,
  },
  {
    name: "EXPERIENCES",
    path: "",
    icon: Briefcase,
  },
  {
    name: "PROJECTS",
    path: "/projects",
    icon: Code,
  },
  {
    name: "CONTACT ME",
    path: "",
    icon: Mail,
  },
];
</script>

<template>
  <div class="fixed top-0 px-16 left-0 w-full z-50 bg-transparent pt-8">
    <div class="flex justify-between w-full">
      <div>
        <h1 class="text-2xl font-bold text-gray-300 pattaya">Samora.</h1>
      </div>
      <div>
        <AlignRight
          class="text-gray-300 cursor-pointer hover:text-blue-400"
          @click="visible = true"
        />
      </div>
    </div>
    <Drawer
      v-model:visible="visible"
      position="right"
      class="!bg-[#080E1C] !text-white !border-0"
      closeIcon="false"
    >
      <div class="flex flex-col gap-y-5">
        <RouterLink
          v-for="item in navItems"
          :key="item.name"
          :to="item.path"
          @click="visible = false"
          class="relative flex items-center gap-x-2 py-2 px-4 rounded-md text-sm overflow-hidden group"
        >
          <component :is="item.icon" size="20" class="z-10" />
          <span class="relative z-10">{{ item.name }}</span>
          <span
            class="absolute left-0 top-0 h-full w-0 bg-blue-900 transition-all duration-500 group-hover:w-full"
          ></span>
        </RouterLink>
      </div>
    </Drawer>
  </div>
</template>
