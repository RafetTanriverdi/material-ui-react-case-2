import React from "react";
import { Box, CssBaseline, Container } from "@mui/material";
import { styled } from "@mui/material/styles";

// Styled Main Layout Container
const LayoutContainer = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  backgroundColor: "red",
  color: theme.palette.text.primary,
  transition: "background-color 0.3s ease",
  margin: "0px",
  padding: "0px",
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
