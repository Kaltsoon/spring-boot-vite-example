import { useEffect, useState } from "react";

import {
  AppBar as MuiAppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Button,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import { Link, useLocation } from "react-router-dom";
import { useQueryClient } from "react-query";
import useAuthenticatedUser from "../hooks/useAuthenticatedUser";
import { logout } from "../services/userService";

export default function AppBar() {
  const location = useLocation();
  const queryClient = useQueryClient();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { authenticatedUser } = useAuthenticatedUser();

  console.log(authenticatedUser)

  useEffect(() => {
    setDrawerOpen(false);
  }, [location]);

  function handleLogout() {
    logout();
    queryClient.invalidateQueries();
  }

  return (
    <>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <List sx={{ minWidth: 250 }}>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/">
              <ListItemText primary="Messages" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Box sx={{ flexGrow: 1 }}>
        <MuiAppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => setDrawerOpen(true)}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component={Link}
              color="inherit"
              to="/"
              sx={{ flexGrow: 1, textDecoration: "none" }}
            >
              Messenger
            </Typography>
            {!authenticatedUser ? (
              <>
                <Button
                  color="inherit"
                  component={Link}
                  to="/login"
                  sx={{ marginRight: 1 }}
                >
                  Login
                </Button>
                <Button
                  color="inherit"
                  component={Link}
                  to="/Register"
                  sx={{ marginRight: 1 }}
                >
                  Register
                </Button>
              </>
            ) : (
              <Button color="inherit" onClick={handleLogout}>
                Logout
              </Button>
            )}
          </Toolbar>
        </MuiAppBar>
      </Box>
    </>
  );
}
