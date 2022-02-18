import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "./Menu.css";

function Menu() {
  return (
    <AppBar className="root" position="sticky">
      <Toolbar variant="dense" className="toolbar">
        <IconButton
          className="iconButton"
          edge="start"
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon className="icon" sx={{ fontSize: "4rem" }} />
        </IconButton>
        <Typography
          className="menu__header"
          variant="h3"
          color="inherit"
          component="div"
          //   sx={{ fontFamily: "Lobster" }}
        >
          ToDo Online
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Menu;
