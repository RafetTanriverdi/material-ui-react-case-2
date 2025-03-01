import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@rt/api/http";

interface UseListProps {
  endpoint: string;
  queryKey: string;
}

export const useList = ({ endpoint, queryKey }: UseListProps) => {
  const listQuery = useQuery({
    queryKey: [`list-${queryKey}`],
    queryFn: async () => {
      const response = await axiosInstance.get(endpoint);
      return response.data;
    },
  });

  return {
    listQuery,
  };
};
