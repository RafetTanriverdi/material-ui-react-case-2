import React from "react";
import { Box, CssBaseline } from "@mui/material";
import { styled } from "@mui/material/styles";

const LayoutContainer = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  backgroundColor: '#f5f5f5',
  color: theme.palette.text.primary,
  transition: "background-color 0.3s ease",
}));

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <LayoutContainer>
        <CssBaseline />
        {children}
    </LayoutContainer>
  );
};

export default MainLayout;
