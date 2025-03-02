/* eslint-disable react-refresh/only-export-components */
import { ENDPOINTS } from "@rt/api/end-points";
import { useList } from "@rt/hooks/crudFunctions/useList";
import React, { createContext, useContext, useMemo } from "react";

export interface ProductList {
  productName: string;
  price: string;
  description: string;
  stock: string;
  categoryName: string;
  productId: string;
  createdAt?: string;
  updatedAt?: string;
  id?: string;
}

interface ProductContextValue {
  data: ProductList[] | undefined;
  isLoading: boolean;
  isError: unknown;
  error: string;
}

const ProductContext = createContext<ProductContextValue | undefined>(
  undefined
);

export function ProductProvider({ children }: { children: React.ReactNode }) {
  const { listQuery } = useList({
    endpoint: ENDPOINTS.PRODUCTS.LIST,
    queryKey: "products",
  });

  const contextValue = useMemo(
    () => ({
      data: listQuery.data as ProductList[] | undefined,
      isLoading: listQuery.isLoading,
      isError: listQuery.isError,
      error: listQuery.error ? listQuery.error.message : "",
    }),
    [listQuery.data, listQuery.isLoading, listQuery.isError, listQuery.error]
  );

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProductContext() {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error(
      "useProductContext must be used within a ProductProvider"
    );
  }
  return context;
}
