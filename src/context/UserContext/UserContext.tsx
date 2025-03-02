/* eslint-disable react-refresh/only-export-components */
import { ENDPOINTS } from "@rt/api/end-points";
import { useList } from "@rt/hooks/crudFunctions/useList";
import React, { createContext, useContext, useMemo } from "react";

export interface UserList {
  userName: string;
  role: string;
  experience: string;
  email: string;
  phone: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
}

interface UserContextValue {
  data: UserList[] | undefined;
  isLoading: boolean;
  isError: unknown;
  error: string;
}

const UserContext = createContext<UserContextValue | undefined>(
  undefined
);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const { listQuery } = useList({
    endpoint: ENDPOINTS.USERS.LIST,
    queryKey: "users",
  });

  const contextValue = useMemo(
    () => ({
      data: listQuery.data as UserList[] | undefined,
      isLoading: listQuery.isLoading,
      isError: listQuery.isError,
      error: listQuery.error ? listQuery.error.message : "",
    }),
    [listQuery.data, listQuery.isLoading, listQuery.isError, listQuery.error]
  );

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error(
      "useUserContext must be used within a UserProvider"
    );
  }
  return context;
}
