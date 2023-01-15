import React from "react";
import {
  faArchive,
  faCheck,
  faCircleNotch,
  faSignOut,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../../Firebase";
import { signout } from "../../../reducers/authSlice";
import StyledAvatar from "../../common/StyledAvatar";

function DrawerContent({ toggleDrawer, theme }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const menuContent = [
    { icon: faCircleNotch, text: "Tasks", link: "/tasks" },
    { icon: faCheck, text: "Completed", link: "/completed" },
    { icon: faArchive, text: "Archived", link: "/archived" },
    { icon: faTrash, text: "Bin", link: "/bin" },
    { icon: faSignOut, text: "Sign Out", link: "none" },
  ];
  async function handleSignOut() {
    await signOut(auth).then(() => {
      navigate("/signin");
      dispatch(signout());
    });
  }

  return (
    <React.Fragment>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        mt={10}
      >
        <StyledAvatar
          theme={theme}
          img="https://mui.com/static/images/avatar/2.jpg"
          size="90px"
        />
        <Typography
          variant="h5"
          my={5}
          color={theme.palette.secondary.contrastText}
        >
          Hello, Divyam!
        </Typography>
      </Box>
      <Divider />
      <Box
        sx={{ width: 250, display: "flex", justifyContent: "space-around" }}
        mt={4}
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <List style={{ width: "100%" }}>
          {menuContent.map((content, index) => (
            <ListItem key={index} disablePadding>
              <Link
                to={content.link !== "none" && content.link}
                style={{
                  textDecoration: "none",
                  width: "100%",
                }}
              >
                <ListItemButton
                  onClick={content.link === "none" ? handleSignOut : () => {}}
                  style={{ width: "100% !important" }}
                >
                  <ListItemIcon>
                    <FontAwesomeIcon
                      icon={content.icon}
                      size="lg"
                      color={theme.palette.secondary.contrastText}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={content.text}
                    style={{
                      color: theme.palette.secondary.contrastText,
                    }}
                  />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
      </Box>
    </React.Fragment>
  );
}

export default DrawerContent;
