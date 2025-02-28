/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "@rt/api/http";

export interface CrudEntity {
  invalidationKey?: string;
}

interface UseAddProps<T> {
  endpoint: string;
  invalidationKey: string;
  onSuccess?: (data: T) => void;
  onError?: (error: any) => void;
}

export const useAdd = <T extends CrudEntity>({
  endpoint,
  invalidationKey,
  onSuccess,
  onError,
}: UseAddProps<T>) => {
  const queryClient = useQueryClient();

  const addMutation = useMutation({
    mutationKey: [`add-${endpoint}`],
    mutationFn: async (data: T) => {
      const response = await axiosInstance.post(`${endpoint}`, data);
      return response.data;
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: [`${invalidationKey}`] });

      if (onSuccess) {
        onSuccess(data);
      }
    },
    onError: (error) => {
      console.error("Creation failed:", error);

      if (onError) {
        onError(error);
      }
    },
  });

  return {
    addMutation,
  };
};
