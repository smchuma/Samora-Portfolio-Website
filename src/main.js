import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";
import ToastService from "primevue/toastservice";

import App from "./App.vue";
import router from "./router";
import { QueryClient, VueQueryPlugin } from "@tanstack/vue-query";

const app = createApp(App);

const queryClient = new QueryClient();

app.use(createPinia());
app.use(router);
app.use(ToastService);

app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: false || "none",
    },
  },
});

app.use(VueQueryPlugin, {
  queryClient,
});

app.mount("#app");
