import React from "react";
import {
  faArchive,
  faCheck,
  faCircleNotch,
  faSignOut,
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
import { useNavigate } from "react-router-dom";
import { auth } from "../../../Firebase";
import { logout } from "../../../reducers/authSlice";
import StyledAvatar from "../../others/StyledAvatar";

function DrawerContent({ toggleDrawer, theme }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function logOut() {
    signOut(auth).then(dispatch(logout())).then(navigate("/signIn"));
  }
  const tasks = () => {};
  const completed = () => {};
  const archived = () => {};
  const menuContent = [
    { icon: faCircleNotch, text: "Tasks", func: tasks },
    { icon: faCheck, text: "Completed", func: completed },
    { icon: faArchive, text: "Archived", func: archived },
    { icon: faSignOut, text: "Sign Out", func: logOut },
  ];

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
        <List>
          {menuContent.map((content, index) => (
            <ListItem
              key={index}
              disablePadding
              >
              <ListItemButton onClick={content.func}
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
            </ListItem>
          ))}
        </List>
      </Box>
    </React.Fragment>
  );
}

export default DrawerContent;
