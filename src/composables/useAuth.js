import { useAuthStore } from "@/stores/AuthStore";
import { useMutation, useQuery, useQueryClient } from "@tanstack/vue-query";
import axiosClient from "@/axios";
import router from "@/router";
import { computed, ref } from "vue";
import { useToast } from "primevue";

export const useAuth = () => {
  const authStore = useAuthStore();
  const toast = useToast();

  const queryClient = useQueryClient();

  const isAuthenticated = computed(() => authStore.isAuthenticated);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["authUser"],
    queryFn: async () => {
      const response = await axiosClient.get("/auth/check_auth");

      return response.data.user;
    },
    enabled: isAuthenticated.value, //  Fetch only when logged in
  });

  const loginMutate = useMutation({
    mutationFn: async (credentials) => {
      const response = await axiosClient.post("/auth/login", credentials);
      return response.data;
    },
    onSuccess: (data) => {
      if (data.success === true) {
        authStore.setAuthenticated(true);
        router.push({ name: "User" });
      }
    },
    onError: (error) => {
      const message = error.response?.data?.message || "Login failed";
      toast.add({
        severity: "error",
        summary: "Error",
        detail: message,
        life: 5000,
      });
    },
  });

  const logoutMutation = useMutation({
    mutationFn: async () => {
      const response = await axiosClient.post("/auth/logout");
      return response.data;
    },
    onSuccess: () => {
      authStore.setAuthenticated(false);
      router.push({ name: "Login" });
    },
    onError: (error) => {
      const message = error.response?.data?.message || "Logout failed";
      toast.add({
        severity: "error",
        summary: "Error",
        detail: message,
        life: 5000,
      });
    },
  });

  const updateUserMutation = useMutation({
    mutationFn: async (data) => {
      const response = await axiosClient.put(
        `/auth/update_user/${data.id}`,
        data
      );
      return response.data;
    },
    onSuccess: (data) => {
      if (data.success === true) {
        toast.add({
          severity: "success",
          summary: "Success",
          detail: data.message,
          life: 5000,
        });
        queryClient.invalidateQueries(["authUser"]);
      }
    },
    onError: (error) => {
      const message = error.response?.data?.message || "Update failed";
      toast.add({
        severity: "error",
        summary: "Error",
        detail: message,
        life: 5000,
      });
    },
  });

  return {
    data,
    isLoading,
    isError,
    login: loginMutate.mutate,
    isLogin: loginMutate.isPending,
    logout: logoutMutation.mutate,
    updateUser: updateUserMutation.mutate,
    isUpdating: updateUserMutation.isPending,
  };
};

export default useAuth;
