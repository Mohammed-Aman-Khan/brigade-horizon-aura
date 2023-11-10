import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

const drawerWidth = 240;

const navItems = [
  "Home",
  "Overview",
  "Price",
  "Master Plan",
  "Floor Plans",
  "Amenities",
  "Gallery",
  "Location",
  "Virtual Tour",
];

const scrollTo = (id = "") =>
  document
    .getElementById(id.replace(" ", ""))
    ?.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });

const Navbar = ({ children, isMobile }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [target, setTarget] = useState("");

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    if (isMobile) {
      if (!mobileOpen) {
        if (target) scrollTo(target);
        setTarget("");
      }
    } else {
      if (target) {
        scrollTo(target);
        setTarget("");
      }
    }
  }, [mobileOpen, target, isMobile]);

  const drawer = (
    <Box
      sx={{
        textAlign: "center",
        backgroundColor: (theme) => theme.palette.primary.dark,
        color: "white",
        height: "100%",
      }}
    >
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              onClick={() => {
                setTarget(item);
                handleDrawerToggle();
              }}
            >
              <ListItemText sx={{ color: "white" }} primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex", width: { xs: "100%", md: "75%" } }}>
      <AppBar
        component="nav"
        sx={{
          width: { xs: "100%", md: "75%", left: 0 },
        }}
      >
        <Toolbar sx={{ padding: { md: 0 } }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              flexGrow: 1,
              padding: "5px",
              display: { xs: "block", md: "none" },
            }}
          >
            <center>
              <picture>
                <source srcSet="/assets/logo.svg" type="image/svg+xml" />
                <img
                  alt="Logo"
                  src="/assets/logo.svg"
                  style={{ height: "50px", width: "auto" }}
                />
              </picture>
            </center>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              paddingLeft: "5px",
              display: { xs: "none", md: "block" },
            }}
          >
            <picture>
              <source srcSet="/assets/logo.svg" type="image/svg+xml" />
              <img
                alt="Logo"
                src="/assets/logo.svg"
                style={{ height: "50px", width: "auto" }}
              />
            </picture>
          </Box>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item}
                size="small"
                sx={{
                  color: "black",
                  padding: "10px 5px",
                  ":hover": {
                    backgroundColor: "white",
                    color: "black",
                  },
                }}
                onClick={() => scrollTo(item)}
              >
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
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
      </Box>
      <Box component="main">
        <Toolbar sx={{ height: { xs: "56px", md: "65px" } }} />
        {children}
      </Box>
    </Box>
  );
};

export default Navbar;
