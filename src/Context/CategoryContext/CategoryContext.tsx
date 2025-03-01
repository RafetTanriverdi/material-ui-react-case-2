/* eslint-disable react-refresh/only-export-components */
import { ENDPOINTS } from "@rt/api/end-points";
import { useList } from "@rt/hooks/crudFunctions/useList";
import React, { createContext, useContext, useMemo } from "react";

export interface CategoryList {
  categoryId: string;
  categoryName: string;
  description: string;
  productAmount: string;
  updatedDate: string;
  createdDate: string;
}

interface CategoryContextValue {
  data: CategoryList[] | undefined;
  isLoading: boolean;
  isError: unknown;
  error: string;
}

const CategoryContext = createContext<CategoryContextValue | undefined>(
  undefined
);

export function CategoryProvider({ children }: { children: React.ReactNode }) {
  const { listQuery } = useList({
    endpoint: ENDPOINTS.CATEGOREIS.LIST,
    queryKey: "categories",
  });

  const contextValue = useMemo(
    () => ({
      data: listQuery.data as CategoryList[] | undefined,
      isLoading: listQuery.isLoading,
      isError: listQuery.isError,
      error: listQuery.error ? listQuery.error.message : "",
    }),
    [listQuery.data, listQuery.isLoading, listQuery.isError, listQuery.error]
  );

  return (
    <CategoryContext.Provider value={contextValue}>
      {children}
    </CategoryContext.Provider>
  );
}

export function useCategoryContext() {
  const context = useContext(CategoryContext);
  if (!context) {
    throw new Error(
      "useCategoryContext must be used within a CategoryProvider"
    );
  }
  return context;
}
