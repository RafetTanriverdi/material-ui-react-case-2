import { Button, styled } from "@mui/material";

export const DeleteButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.error.light,
  border: "1px solid",
  borderColor: theme.palette.error.light,
  color: theme.palette.error.contrastText,
  "&:hover": {
    color: theme.palette.error.main,
    border: "1px solid",
    backgroundColor: theme.palette.error.contrastText,
    transition: "all 0.6s ease",
  },
}));
