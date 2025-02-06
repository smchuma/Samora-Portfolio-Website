import { useAuthStore } from "@/stores/AuthStore";
import { useMutation, useQuery } from "@tanstack/vue-query";
import axiosClient from "@/axios";
import router from "@/router";
import { computed, ref } from "vue";

export const useAuth = () => {
  const authStore = useAuthStore();

  const errorMessage = ref(null);

  const isAuthenticated = computed(() => authStore.isAuthenticated);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["authUser"],
    queryFn: async () => {
      const response = await axiosClient.get("/auth/check_auth");
      console.log(response.data.user);
      return response.data.user;
    },
    enabled: isAuthenticated.value, //  Fetch only when logged in
  });

  const loginMutate = useMutation({
    mutationFn: async (credentials) => {
      console.log(credentials);
      const response = await axiosClient.post("/auth/login", credentials);
      return response.data.user;
    },
    onSuccess: (data) => {
      if (data) {
        authStore.setAuthenticated(true);
        router.push({ name: "User" });
      }
    },
    onError: (error) => {
      if (error.response) {
        console.log("Error", error.response.data);
        errorMessage.value = error.response?.data?.message || "Login failed";
      } else {
        console.log(error.message);
        errorMessage.value = error.response?.data?.message || "Login failed";
      }
    },
  });

  return {
    data,
    isLoading,
    isError,
    login: loginMutate.mutate,
    isLogin: loginMutate.isPending,
    errorMessage,
  };
};

export default useAuth;
