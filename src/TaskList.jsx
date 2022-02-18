import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";
import "./TaskList.css";

const TASKS = [
  {
    title: "Complete the website",
    deadline: "today",
    description: "full working website",
  },
  {
    title: "Complete the website and go to party",
    deadline: "today",
    description: "full working website",
  },
  {
    title: "Complete the website",
    deadline: "today",
    description: "full working website",
  },
  {
    title: "Complete the website",
    deadline: "today",
    description: "full working website",
  },
  {
    title: "Complete the website",
    deadline: "today",
    description: "full working website",
  },
];

function TaskList() {
  return (
    <div className="taskList">
      <Typography variant="h3" sx={{ textAlign: "center" }}>
        Pending Tasks!
      </Typography>
      <div className="taskBlock">
        {TASKS.map((el, key) => (
          <Card sx={{ maxWidth: 345 }} className="taskItem">
            <CardHeader
              title={el.title}
              subheader={`Deadline : ${el.deadline}`}
              action={
                <IconButton aria-label="settings" sx={{ ml: 4 }}>
                  <DeleteIcon />
                </IconButton>
              }
            />
            <CardContent>{el.description}</CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default TaskList;
