import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  TextField,
  Typography,
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
    <Card
      style={{
        backgroundColor: theme.palette.background.default,
        boxShadow: `0px 0px 15px 15px ${theme.palette.primary.main}`,
      }}
    >
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
        <CardActions
          style={{
            display: "flex",
            width: "60vw",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          pt={4}
        >
          <Typography
            variant="body1"
            sx={{
              fontWeight: 600,
              color:
                theme.palette.mode === "light"
                  ? theme.palette.primary.main
                  : theme.palette.grey[100],
              cursor: "pointer",
              lineHeight: 2,
            }}
          >
            Select Time
          </Typography>
          <Button variant={taskTitle ? "contained" : "disabled"}>
            <Typography
              sx={{
                fontWeight: 600,
              }}
              variant="body1"
              onClick={handleAddTask}
              disabled={taskTitle ? false : true}
            >
              Add Task
            </Typography>
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}

export default AddTask;
