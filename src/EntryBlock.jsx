import { Button, Card, TextField, Typography } from "@mui/material";
import React from "react";
import "./EntryBlock.css";

function EntryBlock() {
  return (
    <Card className="root">
      <Typography variant="h2">Add Task</Typography>
      <form action="">
        <TextField
          required
          id="task-heading"
          label="Enter Task"
          variant="filled"
        />
        <TextField
          id="task-description"
          label="Description (Optional)"
          variant="filled"
        />
        <Button>Add</Button>
      </form>
    </Card>
  );
}

export default EntryBlock;
