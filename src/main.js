import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";
import ToastService from "primevue/toastservice";

import App from "./App.vue";
import router from "./router";
import { QueryClient, VueQueryPlugin } from "@tanstack/vue-query";
import axiosClient from "./axios";
import { useAuthStore } from "./stores/AuthStore";

const app = createApp(App);

const queryClient = new QueryClient();

app.use(createPinia());
app.use(ToastService);

app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: false || "none",
    },
  },
});

const authStore = useAuthStore();

async function preFetchUser() {
  try {
    const response = await axiosClient.get("/auth/check_auth");

    if (response.data.user) {
      authStore.setAuthenticated(true);
    } else {
      authStore.setAuthenticated(false);
      router.push({ name: "Login" });
    }
  } catch (error) {
    console.log(error);
    authStore.setAuthenticated(false);
    router.push({ name: "Login" });
  }
}

preFetchUser().then(() => {
  app.use(router);
  app.use(VueQueryPlugin, {
    queryClient,
  });

  app.mount("#app");
});
