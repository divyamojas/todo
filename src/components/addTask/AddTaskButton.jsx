import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Container, Drawer, Fab } from "@mui/material";
import React from "react";
import AddTask from "./AddTask";

function AddTaskButton() {
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
      <Fab
        size="secondary"
        aria-label="add-task"
        sx={{
          position: "fixed",
          bottom: "5vh",
          right: "5vw",
          backgroundColor: "#145D84",
          "&:hover": {
            backgroundColor: "#001e3c",
          },
        }}
        onClick={toggleDrawer(true)}
      >
        <FontAwesomeIcon icon={faAdd} size="lg" color="white" />
      </Fab>
      <Drawer anchor="bottom" open={state} onClose={toggleDrawer(false)}>
        <Container>
          <AddTask />
        </Container>
      </Drawer>
    </React.Fragment>
  );
}

export default AddTaskButton;
