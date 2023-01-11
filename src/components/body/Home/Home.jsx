import { Divider } from "@mui/material";
import React from "react";
import AddTaskButton from "../../addTask/AddTaskButton";
import TaskBlock from "../../others/TaskBlock";
import HeadBlock from "./components/HeadBlock";

function Home() {
  return (
    <React.Fragment>
      <HeadBlock />
      <Divider />
      <TaskBlock />
      <AddTaskButton />
    </React.Fragment>
  );
}

export default Home;
