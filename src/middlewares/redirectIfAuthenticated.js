import { useAuthStore } from "@/stores/AuthStore";

export default function redirectIfAuthenticated({ next }) {
  const authStore = useAuthStore();

  if (authStore.isAuthenticated) {
    return next({
      name: "User",
    });
  }

  return next();
}
