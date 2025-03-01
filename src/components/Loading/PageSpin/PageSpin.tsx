import { Box, CircularProgress, styled } from "@mui/material";
const SpinContainer = styled(Box)(() => ({
  width: "100%",
  height: "80vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const PageSpin = () => {
  return (
    <SpinContainer>
      <CircularProgress size="3rem" />
    </SpinContainer>
  );
};

export default PageSpin;
