import { IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "./Menu.css";

function Menu() {
  return (
    <div className="navbar">
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2, ml: 4 }}
      >
        <MenuIcon sx={{ fontSize: "2.5rem" }} />
      </IconButton>
      <Typography variant="h3" color="aliceblue" className="navHead">
        ToDo Online
      </Typography>{" "}
    </div>
  );
}

export default Menu;
