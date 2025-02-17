<script setup>
import { Form, Field } from "vee-validate";
import { ref } from "vue";
import * as yup from "yup";
import InputText from "primevue/inputtext";
import FloatLabel from "primevue/floatlabel";
import useAuth from "@/composables/useAuth";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const { login, data, errorMessage, isLogin } = useAuth();

const handleFormSubmit = (values) => {
  login(values);
};
</script>

<template>
  <div class="min-h-screen flex items-center justify-center pattern">
    <div
      class="bg-[#0D1526] relative shadow-lg rounded-3xl p-8 w-full max-w-sm pb-14"
    >
      <h1 class="text-center mb-5 mt-10">Admin Panel</h1>
      <p class="text-red-400 text-sm text-center mb-6">{{ errorMessage }}</p>
      <Form
        ref="form"
        :validation-schema="schema"
        @submit="handleFormSubmit"
        :initial-values="formData"
        class="space-y-4 mb-10"
      >
        <FloatLabel variant="on" class="mb-5">
          <Field name="email" v-slot="{ field, errorMessage }">
            <InputText
              id="email"
              v-bind="field"
              class="!bg-transparent w-full !text-white !py-3"
            />
            <label for="on_label" class="!bg-[#2c2c2c] !text-white"
              >Email</label
            >
            <span class="text-red-400 text-sm">{{ errorMessage }}</span>
          </Field>
        </FloatLabel>

        <FloatLabel variant="on" class="mb-5">
          <Field name="password" v-slot="{ field, errorMessage }">
            <InputText
              type="password"
              id="password"
              v-bind="field"
              class="!bg-transparent w-full !text-white !py-3"
            />
            <label for="on_label" class="!bg-[#2c2c2c] !text-white"
              >Password</label
            >
            <span class="text-red-400 text-sm">{{ errorMessage }}</span>
          </Field>
        </FloatLabel>

        <button
          type="submit"
          :disabled="isLogin"
          class="w-full bg-blue-600 transition-all text-white font-semibold py-2 px-4 rounded-md text-sm"
          :class="{
            'bg-blue-900 cursor-not-allowed': isLogin,
            'hover:scale-[102%] hover:bg-blue-800': !isLogin,
          }"
        >
          {{ isLogin ? "Logging..." : "Login" }}
        </button>
      </Form>
    </div>
  </div>
</template>
