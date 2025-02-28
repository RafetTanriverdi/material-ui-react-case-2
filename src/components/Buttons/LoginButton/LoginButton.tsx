import { Button, styled } from "@mui/material";

export const LoginButton = styled(Button)(({ theme }) => ({
  margin: "10px 0",
  padding: "12px",
  fontWeight: "bold",
  textTransform: "none",
  maxHeight: "45px",
  borderRadius: "8px",
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
}));
