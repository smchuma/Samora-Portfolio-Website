<script setup>
import useAuth from "@/composables/useAuth";
import { Button, InputText } from "primevue";
import { computed, reactive, ref, watchEffect } from "vue";

const { data: user, updateUser, isUpdating } = useAuth();

const form = reactive({
  id: "",
  first_name: "",
  last_name: "",
  email: "",
  phone_number: "",
});

const originalForm = ref({});

watchEffect(() => {
  if (user.value) {
    form.id = user.value._id;
    form.first_name = user.value.first_name;
    form.last_name = user.value.last_name;
    form.email = user.value.email;
    form.phone_number = `+255${user.value.phone_number}`;

    originalForm.value = {
      first_name: user.value.first_name,
      last_name: user.value.last_name,
    };
  }
});

const isFormChanged = computed(() => {
  return (
    form.first_name !== originalForm.value.first_name ||
    form.last_name !== originalForm.value.last_name
  );
});

const saveProfile = () => {
  const formData = Object.assign({}, form); // Clone the object
  delete formData.email; // Remove email before sending
  delete formData.phone_number; // Remove phone_number before sending

  updateUser(formData);
  console.log("Profile updated:", formData);
};
</script>

<template>
  <main class="mt-2">
    <div class="pt-6 mx-auto">
      <div class="space-y-4">
        <div class="grid grid-cols-1 md:grid-cols-3 items-center gap-8">
          <div class="flex flex-col">
            <label for="username" class="mb-2">First Name</label>
            <InputText
              id="first_name"
              class="!bg-transparent w-full !border-blue-300 !text-white rounded-md px-3 py-2"
              v-model="form.first_name"
            />
          </div>
          <div class="flex flex-col">
            <label for="username" class="mb-2">Middle Name</label>
            <InputText
              id="first_name"
              class="!bg-transparent w-full !border-blue-300 !text-white rounded-md px-3 py-2"
              v-model="form.last_name"
            />
          </div>
          <div class="flex flex-col">
            <label for="username" class="mb-2">Last Name</label>
            <InputText
              id="first_name"
              class="!bg-transparent w-full !border-blue-300 !text-white rounded-md px-3 py-2"
              v-model="form.last_name"
            />
          </div>
          <div class="flex flex-col">
            <label for="username" class="mb-2">Email</label>
            <InputText
              id="first_name"
              disabled
              class="!bg-gray-700 w-full cursor-not-allowed !border-blue-300 !text-white rounded-md px-3 py-2"
              v-model="form.email"
            />
          </div>
          <div class="flex flex-col">
            <label for="username" class="mb-2">Phone Number</label>
            <InputText
              id="first_name"
              class="!bg-gray-700 w-full cursor-not-allowed !border-blue-300 !text-white rounded-md px-3 py-2"
              v-model="form.phone_number"
              disabled
            />
          </div>
        </div>
      </div>
      <Button
        :disabled="!isFormChanged || isUpdating"
        class="mt-10 mb-20 w-28 !bg-blue-600 !transition-all"
        @click="saveProfile"
        :class="{
          'bg-blue-900 cursor-not-allowed': isUpdating,
          ' hover:bg-blue-900': !isUpdating,
        }"
      >
        {{ isUpdating ? "Updating..." : "Update" }}
      </Button>
    </div>
  </main>
</template>

<style></style>
