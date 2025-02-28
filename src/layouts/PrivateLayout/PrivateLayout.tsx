import { Box, Toolbar } from "@mui/material";
import DrawerAppBar from "@rt/components/Header/Header";
import React from "react";

const PrivateLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <DrawerAppBar />
      <Box component="main" sx={{ flexGrow: 1, p: 3, overflow: "hidden" }}>
        <Toolbar style={{ marginBottom: "-15px" }} />
        {children}
      </Box>
    </>
  );
};

export default PrivateLayout;
