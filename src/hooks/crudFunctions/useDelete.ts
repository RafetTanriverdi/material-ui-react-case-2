/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "@rt/api/http";

export interface CrudEntity {
  invalidationKey?: string;
}

interface UseDeleteProps<T> {
  endpoint: string;
  invalidationKey: string;
  onSuccess?: (data: T) => void;
  onError?: (error: any) => void;
}

export const useDelete = <T extends CrudEntity>({
  endpoint,
  invalidationKey,
  onSuccess,
  onError,
}: UseDeleteProps<T>) => {
  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationKey: [`delete-${endpoint}`],
    mutationFn: async () => {
      const response = await axiosInstance.delete(`${endpoint}`);
      return response.data;
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: [`list-${invalidationKey}`] });

      if (onSuccess) {
        onSuccess(data);
      }
    },
    onError: (error) => {

      if (onError) {
        onError(error);
      }
    },
  });

  return {
    deleteMutation,
  };
};
