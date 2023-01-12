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
import React from "react";
import StyledAvatar from "../../others/StyledAvatar";

function DrawerContent({ toggleDrawer, theme }) {
  const menuContent = [
    { icon: faCircleNotch, text: "Tasks" },
    { icon: faCheck, text: "Completed" },
    { icon: faArchive, text: "Archived" },
    { icon: faSignOut, text: "Sign Out" },
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
      <Divider/>
      <Box
        sx={{ width: 250, display: "flex", justifyContent: "space-around" }}
        mt = {4}
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}

      >
        <List>
          {menuContent.map((content, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton>
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
