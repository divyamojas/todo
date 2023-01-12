import { Divider } from "@mui/material";
import React from "react";
import AddTaskButton from "../../addTask/AddTaskButton";
import TaskBlock from "../../others/TaskBlock";
import HeadBlock from "./components/HeadBlock";

function Home({theme}) {
  return (
    <React.Fragment>
      <HeadBlock theme = {theme}/>
      <Divider />
      <TaskBlock theme = {theme}/>
      <AddTaskButton theme = {theme}/>
    </React.Fragment>
  );
}

export default Home;
