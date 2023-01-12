import { faCalendarDay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../reducers/taskSlice";

function AddTask({ theme }) {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (taskTitle !== "") {
      dispatch(addTask({ title: taskTitle, description: taskDescription }));
      setTaskTitle("");
      setTaskDescription("");
    } else alert("Enter Title to Continue");
  };
  return (
    <Card style={{ backgroundColor: theme.palette.background.default }}>
      <CardContent
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <Container
          style={{ textAlign: "center", fontSize: "32px", fontWeight: "600" }}
        >
          Add Task
        </Container>
        <Box
          style={{
            display: "flex",
            flexWrap: "wrap",
            width: "60vw",
            alignItems: "center",
            justifyContent: "Space-between",
          }}
        >
          <TextField
            id="standard-textarea"
            placeholder="add ..Task Title"
            multiline
            maxRows={4}
            variant="standard"
            required
            style={{
              width: "29vw",
              minWidth: 216,
            }}
            mx={2}
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
          />

          <TextField
            id="standard-textarea"
            placeholder="add ..Task Description"
            multiline
            maxRows={4}
            variant="standard"
            style={{
              width: "29vw",
              minWidth: 216,
            }}
            mx={2}
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
          />
        </Box>
        <Box
          style={{
            display: "flex",
            width: "60vw",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          mt={3}
        >
          <FontAwesomeIcon icon={faCalendarDay} size="2x" />
          <Button variant="contained" onClick={handleAddTask}>
            Add
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}

export default AddTask;
