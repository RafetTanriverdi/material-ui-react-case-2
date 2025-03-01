import { Box, styled } from "@mui/material";

export const FormCard = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "16px",
  padding: "32px",
  borderRadius: "8px",
  boxShadow:
    theme.palette.mode === "light"
      ? "0px 4px 12px rgba(0,0,0,0.1)"
      : "0px 4px 12px rgba(255,255,255,0.1)",
  backgroundColor: theme.palette.background.paper,
  transition: "all 0.3s ease-in-out",
  width: "100%",
  maxWidth: "400px",
  height: "60%",
}));
