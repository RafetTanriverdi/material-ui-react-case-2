import { Container, styled } from "@mui/material";
import * as React from "react";

export const LayoutContainer = styled(Container)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  width:'100wv',
  backgroundColor: "#f4f6f8",
});

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return <LayoutContainer>{children}</LayoutContainer>;
};

export default AuthLayout;
