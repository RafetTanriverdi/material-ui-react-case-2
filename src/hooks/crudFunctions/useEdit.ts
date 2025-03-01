/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "@rt/api/http";

export interface CrudEntity {
  invalidationKey?: string;
}

interface UseEditProps<T> {
  endpoint: string;
  invalidationKey: string;
  onSuccess?: (data: T) => void;
  onError?: (error: any) => void;
}

export const useEdit = <T extends CrudEntity>({
  endpoint,
  invalidationKey,
  onSuccess,
  onError,
}: UseEditProps<T>) => {
  const queryClient = useQueryClient();

  const editMutation = useMutation({
    mutationKey: [`add-${endpoint}`],
    mutationFn: async (data: T) => {
      const response = await axiosInstance.patch(`${endpoint}`, data);
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
    editMutation,
  };
};
