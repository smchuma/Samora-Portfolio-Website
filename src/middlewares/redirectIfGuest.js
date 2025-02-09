import { useAuthStore } from "@/stores/AuthStore";

export default function redirectIfGuest({ next }) {
  const authStore = useAuthStore();

  if (!authStore.isAuthenticated) {
    return next({
      name: "Login",
    });
  }

  return next();
}
