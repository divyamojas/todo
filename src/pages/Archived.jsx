import { Box, Container, Divider } from "@mui/material";
import React from "react";
import AddTaskButton from "../components/addTask/AddTaskButton";
import TaskBlock from "../components/common/TaskBlock";
import Header from "../components/header/Header";
import HeadBlock from "../components/tasks/HeadBlock";

export default function Archived({ theme, header }) {
  return (
    <React.Fragment>
      <Header theme={theme} header={header} />
      <Container>
        <Box pt={8} />
        <HeadBlock theme={theme} />
        <Divider />
        <TaskBlock theme={theme} />
        <AddTaskButton theme={theme} />
      </Container>
    </React.Fragment>
  );
}
