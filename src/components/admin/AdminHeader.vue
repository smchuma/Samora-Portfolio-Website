<script setup>
import { HousePlus, MenuIcon } from "lucide-vue-next";
import { Avatar, Menu } from "primevue";
import { useRouter } from "vue-router";
import { useAuth } from "@/composables/useAuth";
import { ref } from "vue";

const router = useRouter();
const menu = ref(null);

const { logout, data: user } = useAuth();

const getInitials = (user) => {
  if (user) {
    const firstLetter = user.first_name
      ? user?.first_name.charAt(0).toUpperCase()
      : "";
    const lastLetter = user.last_name
      ? user?.last_name.charAt(0).toUpperCase()
      : "";
    return firstLetter + lastLetter;
  }
};

const menuItems = [
  {
    label: "Logout",
    icon: "pi pi-sign-out",
    command: () => {
      logout();
    },
  },
];
</script>

<template>
  <main
    class="flex lighter pl-10 pr-5 py-5 w-full justify-between items-center"
  >
    <div class="flex gap-x-2 items-center">
      <MenuIcon size="20" class="text-gray-300 md:hidden mr-4 md:mr-0" />
      <HousePlus size="20" class="text-gray-300" />
      <p class="text-gray-300 font-sans font-semibold">
        / {{ router.currentRoute.value.name }}
      </p>
    </div>
    <div class="flex items-center gap-x-2">
      <h1 class="josefin text-xl pattaya text-gray-300">
        {{ user?.first_name }}
      </h1>

      <Menu
        ref="menu"
        :model="menuItems"
        popup
        class="bg-gray-1"
        id="overlay_menu"
      />
      <Avatar
        :label="getInitials(user)"
        class="bg-gray-200 border-5 cursor-pointer"
        shape="circle"
        @click="menu.toggle($event)"
      />
    </div>
  </main>
</template>
