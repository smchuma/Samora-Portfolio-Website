<script setup>
import { HousePlus, Menu } from "lucide-vue-next";
import { Avatar } from "primevue";
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
  <main
    class="flex lighter pl-10 pr-5 py-5 w-full justify-between items-center"
  >
    <div class="flex gap-x-2 items-center">
      <Menu size="20" class="text-gray-300 md:hidden mr-4 md:mr-0" />
      <HousePlus size="20" class="text-gray-300" />
      <p class="text-gray-300 font-sans font-semibold">
        / {{ router.currentRoute.value.name }}
      </p>
    </div>
    <div class="flex items-center gap-x-2">
      <h1 class="josefin text-xl pattaya text-gray-300">samora</h1>
      <Avatar
        image="https://media.licdn.com/dms/image/v2/D4D03AQFof-aOHU7Ahg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1712228956090?e=1744243200&v=beta&t=fK9hcK3AL-8WfskMxpZJkMkQs0DcOSm3O_wKppVjr3Y"
        class=""
        shape="circle"
      />
    </div>
  </main>
</template>
