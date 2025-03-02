import { CategoryProvider } from "@rt/context/CategoryContext/CategoryContext";
import { GlobalSnackbarProvider } from "@rt/context/GlobalSnackbarProvider/GlobalSnackbarProvider";
import { ProductProvider } from "@rt/context/ProductContext/ProductContext";
import { UserProvider } from "@rt/context/UserContext/UserContext";
import React from "react";
interface IndexProps {
  children: React.ReactNode;
}
const ContextIndex: React.FC<IndexProps> = ({ children }) => {
  return (
    <GlobalSnackbarProvider>
      <CategoryProvider>
        <UserProvider>
          <ProductProvider>{children}</ProductProvider>
        </UserProvider>
      </CategoryProvider>
    </GlobalSnackbarProvider>
  );
};

export default ContextIndex;
