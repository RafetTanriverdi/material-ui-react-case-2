import { Button, styled } from "@mui/material";

export const AddButton = styled(Button)(({ theme }) => ({
  margin: "5px 0",
  padding: "12px",
  fontWeight: "inherit",
  textTransform: "none",
  maxHeight: "40px",
  borderRadius: "8px",
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
}));
