import * as React from "react";
import { useNavigate } from "react-router-dom";
import { getRoutePath } from "@rt/routes/routes";
import { ROUTES_ID } from "@rt/routes/routes-id";
import { useMutation } from "@tanstack/react-query";
import { signOut } from "aws-amplify/auth";
import { RTButton } from "@rt/components/Buttons/Index";
import { Menu } from "@mui/icons-material";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = [
  {
    id: ROUTES_ID.dashboard,
    title: "Dashboard",
  },
  {
    id: ROUTES_ID.users,
    title: "Users",
  },
  {
    id: ROUTES_ID.categories,
    title: "Categories",
  },
  {
    id: ROUTES_ID.products,
    title: "Products",
  },
];

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <List>
        {navItems.map((item) => (
          <>
            <ListItem key={item.id} disablePadding>
              <ListItemButton
                sx={{ textAlign: "start" }}
                onClick={() => navigate(getRoutePath(item.id))}
              >
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
            <Divider />
          </>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const mutation = useMutation({
    mutationKey: ["signOut"],
    mutationFn: async () => {
      const response = await signOut();
      return response;
    },
    onSuccess: () => {
      navigate(getRoutePath(ROUTES_ID.login));
    },
  });

  return (
    <>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            DATAFLOWX
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <RTButton.link
                key={item.id}
                onClick={() => navigate(getRoutePath(item.id))}
              >
                {item.title}
              </RTButton.link>
            ))}
          </Box>
          <IconButton color="inherit" onClick={() => mutation.mutate()}>
            <LogoutOutlinedIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </>
  );
}
