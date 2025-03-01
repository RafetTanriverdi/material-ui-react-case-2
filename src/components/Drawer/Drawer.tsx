import { Box, Drawer, IconButton, styled, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const DrawerHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: theme.spacing(2),
  borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
}));

const DrawerFooter = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "start",
  alignItems: "center",
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, 0.12)",
}));

const StyledDrawer = ({
  open,
  onClose,
  title,
  content,
  footer,
}: {
  open?: boolean;
  onClose?: () => void;
  title?: string;
  content?: React.ReactNode;
  footer?: React.ReactNode;
}) => {
  return (
    <>
      <Drawer anchor="right" open={open} onClose={onClose}>
        <Box
          sx={{ width: { xs: "100%", sm: 400, md: 600 } }}
          height="100vh"
          display="flex"
          flexDirection="column"
        >
          <DrawerHeader>
            {title && <Typography variant="h6">{title}</Typography>}
            <IconButton onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </DrawerHeader>

          <Box flex={1} p={2}>
            {content}
          </Box>
          {footer && <DrawerFooter>{footer}</DrawerFooter>}
        </Box>
      </Drawer>
    </>
  );
};

export default StyledDrawer;
