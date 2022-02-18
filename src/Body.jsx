import { Card } from "@mui/material";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import "./Body.css";

function Body() {
  return (
    <Card className="body">
      <TaskList />
      <AddTask />
    </Card>
  );
}

export default Body;
