import axiosClient from "@/axios";
import { useQuery } from "@tanstack/vue-query";

export const useUser = () => {
  const {
    data: user,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["portfolio"],
    queryFn: async () => {
      const response = await axiosClient.get("/portfolio");
      console.log("response", response.data.user);

      return response.data.user;
    },
  });

  return { user, isLoading, isError };
};

export default useUser;
