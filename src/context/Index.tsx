import { CategoryProvider } from "@rt/context/CategoryContext/CategoryContext";
import { GlobalSnackbarProvider } from "@rt/context/GlobalSnackbarProvider/GlobalSnackbarProvider";
import React from "react";
interface IndexProps {
  children: React.ReactNode;
}
const ContextIndex: React.FC<IndexProps> = ({ children }) => {
  return (
    <GlobalSnackbarProvider>
      <CategoryProvider>{children}</CategoryProvider>
    </GlobalSnackbarProvider>
  );
};

export default ContextIndex;
