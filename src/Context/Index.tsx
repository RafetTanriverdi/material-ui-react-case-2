import { GlobalSnackbarProvider } from "@rt/Context/GlobalSnackbarProvider/GlobalSnackbarProvider";
import React from "react";
interface IndexProps {
  children: React.ReactNode;
}
const ContextIndex: React.FC<IndexProps> = ({ children }) => {
  return <GlobalSnackbarProvider>{children}</GlobalSnackbarProvider>;
};

export default ContextIndex;
