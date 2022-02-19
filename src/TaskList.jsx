import React from "react";
import "./TaskList.css";
import TaskItem from "./TaskItem";
import { Typography } from "@mui/material";

function TaskList({ tasks, setTasks }) {
  const handleDelete = (el) => {
    let clone = tasks.slice();
    clone.splice(tasks.indexOf(el), 1);
    setTasks(clone);
  };
  let today = new Date();
  return (
    <div className="taskList">
      <Typography variant="body1">
        Last updated at {today.toTimeString()}
      </Typography>
      <div className="taskBlock">
        {tasks.map((el, key) => (
          <TaskItem item={el} key={key} handleDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}

export default TaskList;
