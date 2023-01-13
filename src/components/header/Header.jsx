import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  CssBaseline,
  SwipeableDrawer,
  useScrollTrigger,
  Slide,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DrawerContent from "./drawerContent/DrawerContent";
import ThemeSwitchButton from "../others/ThemeSwitchButton";

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function Header({ theme }) {
  const [state, setState] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(open);
  };

  return (
    <React.Fragment>
      <CssBaseline />

      <HideOnScroll>
        <AppBar sx={{ backgroundColor: theme.palette.primary.main }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>

            <SwipeableDrawer
              anchor="left"
              open={state}
              onClose={toggleDrawer(false)}
              onOpen={toggleDrawer(true)}
              style={{ backgroundColor: theme.palette.secondary.main }}
            >
              <DrawerContent theme={theme} toggleDrawer={toggleDrawer} />
            </SwipeableDrawer>

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              ToDos
            </Typography>
            <ThemeSwitchButton theme={theme} />
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </React.Fragment>
  );
}
