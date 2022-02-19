import { Card } from "@mui/material";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import "./Body.css";
import { useState } from "react";

function Body() {
  const [tasks, setTasks] = useState([
    {
      title: "1DSA practice",
      time: "today",
      description: "full working website",
    },
    {
      title: "2Complete",
      time: "today",
      description: "full working website",
    },
    {
      title: "3Complete the website and go to party",
      time: "today",
      description: "full working website",
    },
    {
      title: "4Complete the website",
      time: "today",
      description: "full working website",
    },
    {
      title: "5Complete the website",
      time: "today",
      description: "full working website",
    },
    {
      title: "6Complete the website",
      time: "today",
      description: "full working website",
    },
    {
      title: "7Complete the website",
      time: "today",
      description: "full working website",
    },
    {
      title: "8Complete the website",
      time: "today",
      description: "full working website",
    },
    {
      title: "9Complete the website",
      time: "today",
      description: "full working website",
    },
  ]);
  return (
    <Card className="body">
      <TaskList tasks={tasks} setTasks={setTasks} />
      <AddTask tasks={tasks} setTasks={setTasks} />
    </Card>
  );
}

export default Body;
