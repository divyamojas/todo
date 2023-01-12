import { Box } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { tasks } from "../../reducers/taskSlice";
import TaskCard from "./TaskCard";

function TaskBlock({theme}) {
  const taskList = useSelector(tasks);
  return (
    <Box
      mt={2}
      px={2}
      pb={5}
      style={{
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {taskList.map((task, index) => (
        <TaskCard task={task} key={index} theme = {theme} />
      ))}
    </Box>
  );
}

export default TaskBlock;
