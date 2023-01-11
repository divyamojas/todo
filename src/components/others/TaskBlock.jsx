import { Box } from "@mui/material";
import React from "react";
import TaskCard from "./TaskCard";

function TaskBlock() {
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
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6].map(
        (task, index) => (
          <TaskCard
            task={
              index % 5 === 0
                ? "Hey! This is one of the tasks"
                : "Hey! This is one of the tasksHey! This is one of the tasks"
            }
            key={index}
          />
        )
      )}
    </Box>
  );
}

export default TaskBlock;
