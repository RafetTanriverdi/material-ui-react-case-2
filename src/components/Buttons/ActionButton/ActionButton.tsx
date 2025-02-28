import { Link, styled } from "@mui/material";

export const ActionButton = styled(Link)(() => ({
  margin: "10px 0",
  padding: "12px",
  textTransform: "none",
  borderRadius: "8px",
  cursor: "pointer",
  "&:hover": {
    color: "#000000",
  },
}));


