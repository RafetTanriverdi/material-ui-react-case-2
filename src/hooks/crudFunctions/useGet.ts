import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@rt/api/http";

interface UseGetProps {
  endpoint: string;
  queryKey: string;
}

export const useGet = ({ endpoint, queryKey }: UseGetProps) => {
  const getQuery = useQuery({
    queryKey: [`get-${queryKey}`],
    queryFn: async () => {
      const response = await axiosInstance.get(endpoint);
      return response.data;
    },
  });

  return {
    getQuery,
  };
};
