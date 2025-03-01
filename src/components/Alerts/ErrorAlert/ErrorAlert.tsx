import { Alert, styled } from "@mui/material";
import React from "react";
interface ErrorAlertProps {
  message: string;
}

const StyledAlert = styled(Alert)(({ theme }) => ({
  width: "100%",
  marginBottom: theme.spacing(2),
  color: theme.palette.error.contrastText,
  backgroundColor: theme.palette.error.light,
  "& .MuiAlert-icon": {
    color: theme.palette.error.contrastText,
  },
}));

const ErrorAlert: React.FC<ErrorAlertProps> = ({ message }) => {
  return <StyledAlert severity="error">{message}</StyledAlert>;
};

export default ErrorAlert;
